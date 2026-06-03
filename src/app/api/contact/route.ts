import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, objetivos, plazo, presupuesto } = body;

    await resend.emails.send({
      from: 'Adven Za Contacto <atencion@advenza.com.mx>',
      to: 'ventas@advenza.com.mx', 
      subject: `Nuevo Proyecto: ${nombre} (${empresa})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #FF6B00;">Nueva Solicitud de Plan a la Medida</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <hr />
          <p><strong>Objetivos del proyecto:</strong><br/> ${objetivos}</p>
          <p><strong>Plazo estimado:</strong> ${plazo}</p>
          <p><strong>Presupuesto destinado:</strong> $${presupuesto} MXN</p>
        </div>
      `
    });

    return NextResponse.json({ success: true, message: "Mensaje enviado." });
  } catch (error) {
    console.error("Error enviando formulario:", error);
    return NextResponse.json({ success: false, message: "Error del servidor." }, { status: 500 });
  }
}