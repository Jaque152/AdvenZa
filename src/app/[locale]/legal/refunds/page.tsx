import { useLocale } from "next-intl";

export default function RefundsPage() {
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <div className="min-h-screen bg-night-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-night-900/50 p-8 md:p-12 rounded-3xl border border-night-800">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
          {isEs ? "Política de devoluciones y reembolsos" : "Return and Refund Policy"}
        </h1>
        <p className="text-lg text-night-400 mb-10">BLKWHT S.A. DE C.V. (ADVEN ZA)</p>

        <div className="space-y-8 text-night-300 leading-relaxed text-sm md:text-base">
          {isEs ? (
            <>
              <section>
                <p className="mb-4">La presente Política tiene como finalidad establecer los términos y condiciones bajo los cuales los usuarios podrán solicitar reembolsos o cancelaciones de pagos realizados por los cursos, talleres, diplomados o servicios de capacitación en línea adquiridos a través del sitio web advenza.com.mx, propiedad de BLKWHT S.A. DE C.V. (ADVEN ZA).</p>
                <p>Al realizar una compra en el Sitio, el usuario declara haber leído y aceptado tanto esta Política de Reembolsos como los Términos y Condiciones y el Aviso de Privacidad.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">NATURALEZA DE LOS SERVICIOS</h2>
                <p>Los servicios ofrecidos por ADVEN ZA son intangibles, personalizados y de entrega digital inmediata, al tratarse de acceso a cursos, materiales audiovisuales y recursos educativos en línea.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">SUPUESTOS EN LOS QUE PROCEDERÁ EL REEMBOLSO</h2>
                <p className="mb-2">ADVEN ZA podrá autorizar un reembolso únicamente en los siguientes casos:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Cuando el cargo se haya efectuado de manera duplicada por error del sistema o de la pasarela de pago.</li>
                  <li>Cuando el usuario no haya recibido el acceso al curso dentro de las 48 horas hábiles posteriores a la confirmación del pago, siempre que el retraso sea atribuible a ADVEN ZA.</li>
                  <li>Cuando exista un error imputable a la empresa en la descripción del servicio adquirido (por ejemplo, curso incorrecto o paquete distinto al contratado).</li>
                  <li>Cuando, por causas imputables a ADVEN ZA, el curso o programa no pueda impartirse o sea cancelado definitivamente.</li>
                </ul>
                <p>En cualquiera de estos casos, el usuario deberá solicitar el reembolso conforme al procedimiento establecido en el punto siguiente.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">PROCEDIMIENTO PARA SOLICITAR UN REEMBOLSO</h2>
                <p className="mb-2">Para tramitar una solicitud de reembolso, el usuario deberá enviar un correo electrónico a atencion@advenza.com.mx con el asunto &quot;Solicitud de reembolso&quot;, incluyendo la siguiente información:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Nombre completo del titular de la compra.</li>
                  <li>Correo electrónico con el que se realizó la compra.</li>
                  <li>Comprobante de pago (captura o recibo).</li>
                  <li>Descripción clara del motivo de la solicitud.</li>
                  <li>Fecha de compra y nombre del curso o servicio.</li>
                </ul>
                <p className="mb-4">ADVEN ZA revisará cada caso de manera individual y responderá por correo electrónico dentro de un plazo máximo de 10 (diez) días hábiles contados a partir de la recepción de la solicitud.</p>
                <p>Si la solicitud es procedente, el reembolso se realizará mediante el mismo método de pago utilizado en la compra, a la tarjeta de crédito o débito correspondiente, y estará sujeto a los tiempos de procesamiento del banco emisor, que pueden variar entre 5 y 15 días hábiles posteriores a la confirmación de ADVEN ZA.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">SUPUESTOS EN LOS QUE NO PROCEDERÁ EL REEMBOLSO</h2>
                <p className="mb-2">No se realizarán reembolsos en los siguientes casos:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cuando el usuario haya accedido parcial o totalmente al contenido digital del curso, taller o diplomado.</li>
                  <li>Cuando la solicitud se base en inconformidad con la metodología, estilo o resultados del curso, al tratarse de experiencias subjetivas.</li>
                  <li>Cuando el curso haya sido adquirido a través de promociones, cupones o descuentos especiales.</li>
                  <li>Cuando la solicitud se presente fuera del plazo o sin la información requerida.</li>
                  <li>Por fallas técnicas atribuibles al dispositivo, conexión a internet o software del usuario.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CANCELACIONES</h2>
                <p className="mb-4">En caso de que el usuario desee cancelar su compra antes de acceder al contenido del curso, podrá solicitar la cancelación dentro de las primeras 24 horas posteriores al pago, siempre que el acceso no haya sido activado.</p>
                <p>El proceso de cancelación deberá solicitarse por correo a atencion@advenza.com.mx y una vez verificada la elegibilidad, se procederá al reembolso bajo los mismos plazos establecidos en el punto PROCEDIMIENTO PARA SOLICITAR UN REEMBOLSO.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">MODIFICACIONES Y SUSPENSIONES DE SERVICIOS</h2>
                <p>ADVEN ZA se reserva el derecho de modificar la estructura, duración o materiales de los cursos ofrecidos, siempre que dichas modificaciones no afecten de manera sustancial los objetivos de aprendizaje del usuario.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CONTACTO</h2>
                <p>Para cualquier duda, aclaración o solicitud relacionada con esta Política de Reembolsos, el usuario puede comunicarse al correo electrónico atencion@advenza.com.mx o a través de los medios de contacto disponibles en el sitio web advenza.com.mx.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">ACEPTACIÓN</h2>
                <p>Al realizar una compra o registrarse en el Sitio, el usuario reconoce haber leído, comprendido y aceptado expresamente los términos establecidos en esta Política de Reembolsos.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <p className="mb-4">The purpose of this Policy is to establish the terms and conditions under which users may request refunds or cancellations for payments made for online courses, workshops, diplomas, or training services purchased through the website advenza.com.mx, owned by BLKWHT S.A. DE C.V. (ADVEN ZA).</p>
                <p>By making a purchase on the Site, the user declares to have read and accepted both this Refund Policy and the Terms and Conditions and Privacy Notice.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">NATURE OF THE SERVICES</h2>
                <p>The services offered by ADVEN ZA are intangible, personalized, and delivered immediately digitally, as they involve access to courses, audiovisual materials, and online educational resources.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CASES WHERE A REFUND WILL BE GRANTED</h2>
                <p className="mb-2">ADVEN ZA may authorize a refund only in the following cases:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>When a duplicate charge has been made due to an error in the system or payment gateway.</li>
                  <li>When the user has not received access to the course within 48 business hours following payment confirmation, provided the delay is attributable to ADVEN ZA.</li>
                  <li>When an error attributable to the company exists in the description of the purchased service (e.g., incorrect course or package different from the contracted one).</li>
                  <li>When, for reasons attributable to ADVEN ZA, the course or program cannot be delivered or is definitively canceled.</li>
                </ul>
                <p>In any of these cases, the user must request the refund according to the procedure established in the following section.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">PROCEDURE TO REQUEST A REFUND</h2>
                <p className="mb-2">To process a refund request, the user must send an email to atencion@advenza.com.mx with the subject &quot;Refund Request&quot;, including the following information:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Full name of the purchase holder.</li>
                  <li>Email used to make the purchase.</li>
                  <li>Proof of payment (screenshot or receipt).</li>
                  <li>Clear description of the reason for the request.</li>
                  <li>Date of purchase and name of the course or service.</li>
                </ul>
                <p className="mb-4">ADVEN ZA will review each case individually and respond via email within a maximum period of 10 (ten) business days from the receipt of the request.</p>
                <p>If the request is approved, the refund will be made through the same payment method used in the purchase, to the corresponding credit or debit card, and will be subject to the issuing bank&apos;s processing times, which may vary between 5 and 15 business days following ADVEN ZA&apos;s confirmation.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CASES WHERE A REFUND WILL NOT BE GRANTED</h2>
                <p className="mb-2">Refunds will not be issued in the following cases:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>When the user has accessed partially or totally the digital content of the course, workshop, or diploma.</li>
                  <li>When the request is based on dissatisfaction with the methodology, style, or results of the course, as these are subjective experiences.</li>
                  <li>When the course was purchased through promotions, coupons, or special discounts.</li>
                  <li>When the request is submitted outside the deadline or without the required information.</li>
                  <li>Due to technical failures attributable to the user&apos;s device, internet connection, or software.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CANCELLATIONS</h2>
                <p className="mb-4">If the user wishes to cancel their purchase before accessing the course content, they may request a cancellation within the first 24 hours after payment, provided access has not been activated.</p>
                <p>The cancellation process must be requested by email to atencion@advenza.com.mx, and once eligibility is verified, the refund will proceed under the same terms established in the PROCEDURE TO REQUEST A REFUND section.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">MODIFICATIONS AND SUSPENSION OF SERVICES</h2>
                <p>ADVEN ZA reserves the right to modify the structure, duration, or materials of the courses offered, provided such modifications do not substantially affect the user&apos;s learning objectives.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CONTACT</h2>
                <p>For any doubt, clarification, or request related to this Refund Policy, the user can communicate to the email atencion@advenza.com.mx or through the contact methods available on the website advenza.com.mx.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">ACCEPTANCE</h2>
                <p>By making a purchase or registering on the Site, the user acknowledges having expressly read, understood, and accepted the terms established in this Refund Policy.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}