import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializamos Resend con la variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

// Definimos la interfaz para TypeScript
interface ContactFormBody {
  nombre: string;
  empresa: string;
  email: string;
  objetivos: string;
  plazo: string;
  presupuesto: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormBody;
    const { nombre, empresa, email, objetivos, plazo, presupuesto } = body;

    if (!email) {
      return NextResponse.json({ success: false, message: "El correo es obligatorio." }, { status: 400 });
    }

    // Bloque de contenido reutilizable para ambos correos
    const contentDetails = `
      <p style="margin: 5px 0;"><strong>Nombre:</strong> ${nombre}</p>
      <p style="margin: 5px 0;"><strong>Empresa:</strong> ${empresa}</p>
      <p style="margin: 5px 0;"><strong>Correo:</strong> ${email}</p>
      <hr style="border: 0; border-top: 1px solid #444; margin: 15px 0;" />
      <p style="margin: 5px 0;"><strong>Objetivos del proyecto:</strong><br/> ${objetivos}</p>
      <p style="margin: 15px 0 5px 0;"><strong>Plazo estimado:</strong> ${plazo}</p>
      <p style="margin: 5px 0;"><strong>Presupuesto destinado:</strong> $${presupuesto} MXN</p>
    `;

    // 1. Promesa: Enviar correo al Administrador
    const adminEmailPromise = resend.emails.send({
      from: 'Adven Za Sistema <atencion@advenza.com.mx>',
      to: 'atencion@advenza.com.mx', 
      subject: `Nuevo Proyecto: ${nombre} (${empresa})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #f9fafb;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h2 style="color: #FF6B00; margin-top: 0;">Nueva Solicitud de Plan a la Medida</h2>
            <p>Se ha recibido un nuevo formulario de contacto en la plataforma.</p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px;">
              ${contentDetails.replace(/#444/g, '#d1d5db')} </div>
          </div>
        </div>
      `
    });

    // 2. Promesa: Enviar correo de Confirmación al Cliente
    const clientEmailPromise = resend.emails.send({
      from: 'Adven Za <atencion@advenza.com.mx>',
      to: email, // Correo del cliente
      subject: 'Hemos recibido tu solicitud de proyecto - Adven Za',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 30px 20px; color: #ffffff; background-color: #0a0a0a;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border-radius: 12px; overflow: hidden; border: 1px solid #333;">
            
            <div style="background: linear-gradient(135deg, #FF6B00, #FFB800); padding: 25px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">Adven Za<span style="color: #0a0a0a;">.</span></h1>
            </div>
            
            <div style="padding: 30px;">
              <h2 style="color: #ffffff; margin-top: 0;">¡Hola, ${nombre}!</h2>
              <p style="color: #9ca3af; font-size: 16px; line-height: 1.6;">
                Hemos recibido exitosamente tu solicitud de plan a la medida. Nuestro equipo experto revisará los detalles de tu proyecto para <strong>${empresa}</strong> y nos pondremos en contacto contigo a la brevedad posible.
              </p>
              
              <div style="margin-top: 30px; background-color: #222; padding: 20px; border-radius: 8px; border: 1px solid #333;">
                <h3 style="color: #FFB800; margin-top: 0; margin-bottom: 15px;">Resumen de tu solicitud:</h3>
                <div style="color: #e5e7eb; font-size: 14px; line-height: 1.5;">
                  ${contentDetails}
                </div>
              </div>
              
              <p style="color: #6b7280; font-size: 13px; margin-top: 30px; text-align: center;">
                Este es un mensaje automático generado por nuestra plataforma. Por favor, no respondas a esta dirección.
              </p>
            </div>
          </div>
        </div>
      `
    });

    // Ejecutamos ambos envíos de correo en paralelo para mayor velocidad
    await Promise.all([adminEmailPromise, clientEmailPromise]);

    return NextResponse.json({ success: true, message: "Mensajes enviados correctamente." });
    
  } catch (error) {
    console.error("Error enviando formulario:", error);
    return NextResponse.json({ success: false, message: "Error del servidor al procesar el formulario." }, { status: 500 });
  }
}