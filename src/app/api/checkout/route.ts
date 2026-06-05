import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// 1. DEFINICIÓN ESTRICTA DE TIPOS (Evita el uso de 'any' y errores en el build)
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  description?: string;
  features?: string[];
}

interface ClientData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  pais: string;
  direccion: string;
  poblacion: string;
  region: string;
  cp: string;
  notas: string;
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCVC: string;
}

interface CheckoutBody {
  clientData: ClientData;
  amount: number;
  cartItems: CartItem[];
  locale: 'es' | 'en'; // Recibimos el idioma desde el frontend
}

// Inicializamos Resend con la variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 2. Parseo y tipado del cuerpo de la petición
    const body = (await request.json()) as CheckoutBody;
    const { clientData, amount, cartItems, locale } = body;

    const OCTANO_API_URL = process.env.OCTANO_API_URL;
    const OCTANO_EMAIL = process.env.OCTANO_EMAIL;
    const OCTANO_PASSWORD = process.env.OCTANO_PASSWORD;
    const isEs = locale === 'es';
    
    // ---------------------------------------------------------
    // PASO 1: Autenticación con Octano (/signin)
    // ---------------------------------------------------------
    const signinParams = new URLSearchParams();
    signinParams.append('email', OCTANO_EMAIL as string);
    signinParams.append('password', OCTANO_PASSWORD as string);

    const signinRes = await fetch(`${OCTANO_API_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: signinParams,
    });

    const signinData = await signinRes.json();

    if (!signinData.authToken) {
      return NextResponse.json({ success: false, message: "Error de autenticación con la pasarela." }, { status: 401 });
    }
    
    const authToken = signinData.authToken;

    // ---------------------------------------------------------
    // PASO 2: Tokenización de Tarjeta (/card/tokenizer)
    // ---------------------------------------------------------
    const [expMonth, expYear] = clientData.cardExpiry.split('/').map((str: string) => str.trim());

    const tokenizationBody = {
      cardData: {
        cardNumber: clientData.cardNumber.replace(/\s+/g, ''),
        cardholderName: clientData.cardName,
        expirationMonth: expMonth,
        expirationYear: expYear,
      }
    };

    const tokenizerRes = await fetch(`${OCTANO_API_URL}/card/tokenizer`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tokenizationBody),
    });

    const tokenizerData = await tokenizerRes.json();

    if (!tokenizerData.cardNumberToken) {
      return NextResponse.json({ success: false, message: "Error al validar la tarjeta." }, { status: 400 });
    }

    // ---------------------------------------------------------
    // PASO 3: Procesar la Venta (/sale)
    // ---------------------------------------------------------
    const saleBody = {
      amount: Math.round(amount * 100) / 100,
      currency: 484, 
      reference: `ORD-${Date.now()}`,
      customerInformation: {
        firstName: clientData.nombre,
        lastName: clientData.apellidos,
        middleName: '',
        email: clientData.email,
        phone1: clientData.telefono,
        city: clientData.poblacion,
        address1: clientData.direccion,
        postalCode: clientData.cp,
        state: clientData.region,
        country: 'Mx', 
        ip: '127.0.0.1', 
      },
      cardData: {
        cardNumberToken: tokenizerData.cardNumberToken,
        cvv: clientData.cardCVC,
      },
      items: cartItems.map((item) => ({
        title: item.name,
        amount: Math.round(item.price * 100) / 100, 
        quantity: 1, 
        id: item.id
      })),
      redirectUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/success`
    };

    const saleRes = await fetch(`${OCTANO_API_URL}/sale`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(saleBody),
    });

    const saleData = await saleRes.json();

    // ---------------------------------------------------------
    // PASO 4: Generación de Correos Personalizados (HTML)
    // ---------------------------------------------------------
    if (saleData.status === 'APPROVED') {
      
      // Variables de estilo corporativo (Inline CSS para emails)
      const bgColor = "#0a0a0a";
      const surfaceColor = "#1a1a1a";
      const primaryColor = "#FF6B00";
      const secondaryColor = "#FFB800";
      const textColor = "#ffffff";
      const textMuted = "#9ca3af";

      // Generar la lista de items comprados en HTML
      const itemsHtml = cartItems.map((item) => `
        <tr style="border-bottom: 1px solid #333;">
          <td style="padding: 15px 0; color: ${textColor};"><strong>${item.name}</strong></td>
          <td style="padding: 15px 0; text-align: right; color: ${primaryColor}; font-weight: bold;">$${item.price.toLocaleString()} MXN</td>
        </tr>
      `).join('');

      // Plantilla base reutilizable
      const getEmailHtml = (title: string, intro: string, details: string) => `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: ${bgColor}; padding: 40px 20px; color: ${textColor}; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; background-color: ${surfaceColor}; border-radius: 16px; overflow: hidden; border: 1px solid #333;">
            
            <div style="background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor}); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 1px;">Adven Za<span style="color: #0a0a0a;">.</span></h1>
            </div>

            <div style="padding: 40px 30px;">
              <h2 style="margin-top: 0; color: ${textColor}; font-size: 24px;">${title}</h2>
              <p style="color: ${textMuted}; font-size: 16px;">${intro}</p>
              
              ${details}

              <div style="margin-top: 30px; border-top: 2px solid ${primaryColor}; padding-top: 20px;">
                <h3 style="color: ${textColor}; margin-bottom: 15px;">${isEs ? 'Resumen de Orden' : 'Order Summary'}</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  ${itemsHtml}
                </table>
                <div style="margin-top: 20px; text-align: right; font-size: 20px;">
                  <span style="color: ${textMuted};">${isEs ? 'Total Pagado (IVA inc.):' : 'Total Paid (Tax inc.):'}</span>
                  <strong style="color: ${secondaryColor}; margin-left: 10px;">$${amount.toLocaleString()} MXN</strong>
                </div>
              </div>
            </div>

            <div style="background-color: #111; padding: 20px; text-align: center; border-top: 1px solid #333;">
              <p style="color: ${textMuted}; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Adven Za. ${isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
              </p>
            </div>
          </div>
        </div>
      `;

      try {
        // 1. CORREO PARA EL CLIENTE
        const clientSubject = isEs ? '¡Gracias por tu compra en Adven Za!' : 'Thank you for your purchase at Adven Za!';
        const clientIntro = isEs 
          ? `Tu pago ha sido procesado exitosamente mediante nuestra plataforma segura. En breve te enviaremos las instrucciones de acceso.`
          : `Your payment has been successfully processed through our secure platform. We will send you the access instructions shortly.`;
        
        await resend.emails.send({
          from: 'Adven Za <atencion@advenza.com.mx>',
          to: clientData.email,
          subject: clientSubject,
          html: getEmailHtml(
            isEs ? `¡Hola, ${clientData.nombre}!` : `Hi, ${clientData.nombre}!`, 
            clientIntro, 
            `` // Sin detalles extra para el cliente
          )
        });

        // 2. CORREO PARA EL ADMINISTRADOR (Tú)
        const adminDetails = `
          <div style="background-color: #222; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: ${secondaryColor};">Datos del Cliente:</h3>
            <p style="margin: 5px 0;"><strong>Nombre:</strong> ${clientData.nombre} ${clientData.apellidos}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${clientData.email}</p>
            <p style="margin: 5px 0;"><strong>Teléfono:</strong> ${clientData.telefono}</p>
            <p style="margin: 5px 0;"><strong>Ubicación:</strong> ${clientData.direccion}, ${clientData.poblacion}, ${clientData.region} - ${clientData.pais}</p>
            ${clientData.notas ? `<p style="margin: 15px 0 5px 0; color: ${primaryColor};"><strong>Notas del pedido:</strong> ${clientData.notas}</p>` : ''}
          </div>
        `;

        await resend.emails.send({
          from: 'Adven Za Sistema <atencion@advenza.com.mx>',
          to: 'atencion@advenza.com.mx', 
          subject: `💰 Nueva Venta Registrada: ${clientData.nombre} ${clientData.apellidos}`,
          html: getEmailHtml(
            '¡Nueva Venta Aprobada!', 
            'Se ha registrado y cobrado exitosamente un nuevo pedido en la plataforma.', 
            adminDetails
          )
        });

      } catch (emailError) {
        console.error("Error al enviar correos:", emailError);
      }

      return NextResponse.json({ success: true, message: "Pago procesado exitosamente." });
      
    } else if (saleData.status === 'DECLINED') {
      return NextResponse.json({ success: false, message: "El pago fue declinado por la pasarela." }, { status: 400 });
    } else {
      return NextResponse.json({ success: false, message: `Estado del pago: ${saleData.status || 'Desconocido'}` }, { status: 400 });
    }

  } catch (error) {
    console.error("Error en la ruta de checkout:", error);
    return NextResponse.json(
      { success: false, message: "Error interno procesando la solicitud." }, 
      { status: 500 }
    );
  }
}