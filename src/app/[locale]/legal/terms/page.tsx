import { useLocale } from "next-intl";

export default function TermsPage() {
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <div className="min-h-screen bg-night-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-night-900/50 p-8 md:p-12 rounded-3xl border border-night-800">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-10 font-display">
          {isEs ? "Términos y condiciones de uso" : "Terms and Conditions of Use"}
        </h1>

        <div className="space-y-8 text-night-300 leading-relaxed text-sm md:text-base">
          {isEs ? (
            <>
              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">ACEPTACIÓN DE LOS TÉRMINOS</h2>
                <p className="mb-4">El presente documento establece los Términos y Condiciones bajo los cuales los usuarios pueden acceder y utilizar el sitio web advenza.com.mx (en adelante, el &quot;Sitio&quot;) y los servicios ofrecidos por BLKWHT S.A. DE C.V. (ADVEN ZA) (en adelante, &quot;ADVEN ZA&quot;).</p>
                <p>Al acceder, navegar o realizar cualquier compra dentro del Sitio, el usuario declara haber leído, comprendido y aceptado estos Términos y Condiciones, así como el Aviso de Privacidad publicado en el mismo sitio. En caso de no estar de acuerdo con cualquiera de las disposiciones aquí contenidas, deberá abstenerse de utilizar el Sitio o los servicios ofrecidos.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">IDENTIDAD DEL PRESTADOR DEL SERVICIO</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Razón social:</strong> BLKWHT S.A. DE C.V.</li>
                  <li><strong className="text-white">Domicilio:</strong> AVENIDA PRESIDENTE MASARYK, N° 178, DEP. 303, COLONIA POLANCO V SECCION, ALCALDIA MIGUEL HIDALGO, C.P. 11560, ENTIDAD FEDERATIVA CIUDAD DE MÉXICO.</li>
                  <li><strong className="text-white">Correo electrónico de contacto:</strong> atencion@advenza.com.mx</li>
                  <li><strong className="text-white">Sitio web:</strong> advenza.com.mx</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">DESCRIPCIÓN DE LOS SERVICIOS</h2>
                <p className="mb-4">ADVEN ZA ofrece cursos, talleres, diplomados y servicios de capacitación en línea, con acceso a materiales audiovisuales, ejercicios, foros de discusión y sesiones interactivas, según el curso seleccionado.</p>
                <p>Los contenidos se ofrecen en modalidad 100% digital, sin entrega física de materiales, y están destinados a personas mayores de edad o empresas que buscan formación profesional en áreas de negocios, liderazgo, marketing, recursos humanos y temas relacionados.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">REGISTRO Y CUENTAS DE USUARIO</h2>
                <p className="mb-4">Para acceder a determinados servicios o contenidos, el usuario deberá registrarse y crear una cuenta personal, proporcionando datos veraces, completos y actualizados.</p>
                <p className="mb-4">El usuario será responsable del uso confidencial de sus credenciales de acceso (correo electrónico y contraseña), comprometiéndose a no compartirlas con terceros. ADVEN ZA no será responsable por el uso indebido derivado del manejo inadecuado de las credenciales por parte del usuario.</p>
                <p>ADVEN ZA se reserva el derecho de suspender o cancelar cuentas que infrinjan estos Términos, o que presenten actividad fraudulenta, abusiva o contraria a las buenas prácticas.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">PRECIOS Y FORMAS DE PAGO</h2>
                <p className="mb-4">Todos los precios publicados en el Sitio están expresados en pesos mexicanos (MXN) e incluyen el Impuesto al Valor Agregado (IVA) correspondiente, salvo que se indique lo contrario.</p>
                <p className="mb-4">Los pagos se realizan únicamente mediante tarjeta de crédito o débito, a través de las pasarelas de pago seguras habilitadas en el Sitio. ADVEN ZA no almacena datos completos de tarjetas; el procesamiento es realizado directamente por los proveedores de pago certificados conforme a los estándares PCI-DSS.</p>
                <p className="mb-4">El pago total debe completarse antes de otorgar acceso al curso o servicio adquirido.</p>
                <p>Una vez confirmado el pago, el usuario recibirá un correo de confirmación y acceso con los datos de inicio de sesión o instrucciones correspondientes.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">ACCESO A LOS CURSOS Y VIGENCIA</h2>
                <p className="mb-4">El acceso a los cursos y materiales digitales estará disponible durante el plazo determinado en cada programa o plan adquirido.</p>
                <p>Una vez vencido el plazo, el acceso podrá deshabilitarse automáticamente, salvo que el usuario adquiera una extensión o servicio adicional.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">PROPIEDAD INTELECTUAL</h2>
                <p className="mb-4">Todo el contenido del Sitio —incluyendo videos, textos, imágenes, audios, logotipos, materiales descargables, interfaces, estructuras y códigos— es propiedad exclusiva de ADVEN ZA o de sus licenciantes, y se encuentra protegido por la legislación mexicana e internacional en materia de derechos de autor y propiedad industrial.</p>
                <p className="mb-2">El usuario se compromete a:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>No copiar, distribuir, reproducir o compartir el contenido con terceros.</li>
                  <li>No grabar, descargar ni publicar los materiales en otras plataformas.</li>
                  <li>No usar los contenidos con fines comerciales, salvo autorización expresa y por escrito de ADVEN ZA.</li>
                </ul>
                <p>El incumplimiento de esta cláusula podrá dar lugar a acciones legales civiles y/o penales conforme a la ley aplicable.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">USO ADECUADO DE LOS SERVICIOS</h2>
                <p className="mb-2">El usuario se obliga a utilizar el Sitio y los servicios de forma lícita, ética y conforme a los presentes Términos. Queda estrictamente prohibido:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Suplantar identidades o registrar cuentas falsas.</li>
                  <li>Intentar vulnerar la seguridad o funcionamiento del Sitio.</li>
                  <li>Utilizar los servicios para actividades fraudulentas, ilegales o que afecten a terceros.</li>
                </ul>
                <p>ADVEN ZA podrá suspender o dar de baja la cuenta del usuario sin previo aviso si detecta cualquiera de estas conductas.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">POLÍTICA DE CANCELACIÓN Y REEMBOLSO</h2>
                <p className="mb-4">El usuario podrá solicitar reembolso únicamente conforme a la Política de Reembolsos publicada en el Sitio, la cual forma parte integrante de estos Términos y Condiciones.</p>
                <p>Dicha política establece los supuestos, plazos y procedimientos aplicables a las devoluciones de pagos por cursos o servicios digitales.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">RESPONSABILIDAD Y LIMITACIÓN DE GARANTÍAS</h2>
                <p className="mb-4">ADVEN ZA no garantiza que los servicios estén libres de interrupciones o errores, aunque realiza esfuerzos razonables para mantener la disponibilidad y calidad de la plataforma.</p>
                <p className="mb-4">Los cursos y materiales se ofrecen &quot;tal cual&quot; y no sustituyen asesorías profesionales o consultorías personalizadas. ADVEN ZA no será responsable por decisiones o acciones que los usuarios tomen basadas en los contenidos ofrecidos.</p>
                <p className="mb-2">Asimismo, ADVEN ZA no se hace responsable por:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fallas técnicas derivadas del dispositivo, navegador o conexión del usuario.</li>
                  <li>Pérdida de progreso o datos por causas ajenas a su control.</li>
                  <li>Daños indirectos, incidentales o consecuenciales relacionados con el uso del Sitio.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS</h2>
                <p>ADVEN ZA tratará toda la información personal conforme a lo establecido en su Aviso de Privacidad, disponible en advenza.com.mx/aviso-de-privacidad.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">MODIFICACIONES</h2>
                <p className="mb-4">ADVEN ZA se reserva el derecho de modificar en cualquier momento estos Términos y Condiciones, así como los precios o características de los servicios, sin previo aviso.</p>
                <p>Las modificaciones se publicarán en el Sitio y entrarán en vigor en la fecha indicada. El uso posterior del Sitio implicará la aceptación de las nuevas condiciones.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">LEGISLACIÓN Y JURISDICCIÓN APLICABLE</h2>
                <p>Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos, y cualquier controversia derivada de su interpretación o cumplimiento será sometida a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiera corresponder.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CONTACTO</h2>
                <p>Para aclaraciones, soporte o dudas sobre estos Términos, puede comunicarse al correo electrónico atencion@advenza.com.mx o utilizar los medios de contacto disponibles en el Sitio.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">ACCEPTANCE OF TERMS</h2>
                <p className="mb-4">This document establishes the Terms and Conditions under which users may access and use the website advenza.com.mx (hereinafter, the &quot;Site&quot;) and the services offered by BLKWHT S.A. DE C.V. (ADVEN ZA) (hereinafter, &quot;ADVEN ZA&quot;).</p>
                <p>By accessing, browsing, or making any purchase within the Site, the user declares to have read, understood, and accepted these Terms and Conditions, as well as the Privacy Notice published on the same site. If you do not agree with any of the provisions contained herein, you must refrain from using the Site or the services offered.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">IDENTITY OF THE SERVICE PROVIDER</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Business name:</strong> BLKWHT S.A. DE C.V.</li>
                  <li><strong className="text-white">Address:</strong> AVENIDA PRESIDENTE MASARYK, N° 178, DEP. 303, COLONIA POLANCO V SECCION, ALCALDIA MIGUEL HIDALGO, C.P. 11560, ENTIDAD FEDERATIVA CIUDAD DE MÉXICO.</li>
                  <li><strong className="text-white">Contact email:</strong> atencion@advenza.com.mx</li>
                  <li><strong className="text-white">Website:</strong> advenza.com.mx</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">DESCRIPTION OF SERVICES</h2>
                <p className="mb-4">ADVEN ZA offers online courses, workshops, diplomas, and training services, with access to audiovisual materials, exercises, discussion forums, and interactive sessions, depending on the selected course.</p>
                <p>The contents are offered in a 100% digital modality, without physical delivery of materials, and are intended for adults or companies seeking professional training in business, leadership, marketing, human resources, and related areas.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">REGISTRATION AND USER ACCOUNTS</h2>
                <p className="mb-4">To access certain services or content, the user must register and create a personal account, providing truthful, complete, and updated data.</p>
                <p className="mb-4">The user will be responsible for the confidential use of their access credentials (email and password), committing not to share them with third parties. ADVEN ZA will not be responsible for the improper use derived from the inappropriate handling of credentials by the user.</p>
                <p>ADVEN ZA reserves the right to suspend or cancel accounts that violate these Terms, or that present fraudulent, abusive, or contrary to good practices activity.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">PRICES AND PAYMENT METHODS</h2>
                <p className="mb-4">All prices published on the Site are expressed in Mexican pesos (MXN) and include the corresponding Value Added Tax (VAT), unless otherwise indicated.</p>
                <p className="mb-4">Payments are made exclusively by credit or debit card, through the secure payment gateways enabled on the Site. ADVEN ZA does not store complete card data; processing is carried out directly by certified payment providers under PCI-DSS standards.</p>
                <p className="mb-4">Total payment must be completed before granting access to the acquired course or service.</p>
                <p>Once the payment is confirmed, the user will receive a confirmation and access email with the login details or corresponding instructions.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">ACCESS TO COURSES AND VALIDITY</h2>
                <p className="mb-4">Access to courses and digital materials will be available during the period determined in each acquired program or plan.</p>
                <p>Once the period expires, access may be automatically disabled, unless the user acquires an extension or additional service.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">INTELLECTUAL PROPERTY</h2>
                <p className="mb-4">All content on the Site—including videos, texts, images, audio, logos, downloadable materials, interfaces, structures, and codes—is the exclusive property of ADVEN ZA or its licensors, and is protected by Mexican and international law regarding copyright and industrial property.</p>
                <p className="mb-2">The user agrees to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Not copy, distribute, reproduce, or share the content with third parties.</li>
                  <li>Not record, download, or publish the materials on other platforms.</li>
                  <li>Not use the contents for commercial purposes, without express written authorization from ADVEN ZA.</li>
                </ul>
                <p>Failure to comply with this clause may result in civil and/or criminal legal action according to applicable law.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">PROPER USE OF SERVICES</h2>
                <p className="mb-2">The user is obliged to use the Site and services lawfully, ethically, and in accordance with these Terms. It is strictly prohibited to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Impersonate identities or register fake accounts.</li>
                  <li>Attempt to breach the security or functionality of the Site.</li>
                  <li>Use the services for fraudulent, illegal activities, or those that affect third parties.</li>
                </ul>
                <p>ADVEN ZA may suspend or terminate the user&apos;s account without prior notice if any of these behaviors are detected.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CANCELLATION AND REFUND POLICY</h2>
                <p className="mb-4">The user may request a refund only in accordance with the Refund Policy published on the Site, which forms an integral part of these Terms and Conditions.</p>
                <p>Said policy establishes the assumptions, terms, and procedures applicable to refunds for payments for digital courses or services.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">LIABILITY AND LIMITATION OF WARRANTIES</h2>
                <p className="mb-4">ADVEN ZA does not guarantee that the services will be free from interruptions or errors, although it makes reasonable efforts to maintain the availability and quality of the platform.</p>
                <p className="mb-4">The courses and materials are offered &quot;as is&quot; and do not substitute professional advice or personalized consulting. ADVEN ZA will not be responsible for decisions or actions users take based on the offered content.</p>
                <p className="mb-2">Furthermore, ADVEN ZA is not responsible for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Technical failures derived from the user&apos;s device, browser, or connection.</li>
                  <li>Loss of progress or data due to causes beyond its control.</li>
                  <li>Indirect, incidental, or consequential damages related to the use of the Site.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CONFIDENTIALITY AND DATA PROTECTION</h2>
                <p>ADVEN ZA will treat all personal information in accordance with the provisions of its Privacy Notice, available at advenza.com.mx/aviso-de-privacidad.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">MODIFICATIONS</h2>
                <p className="mb-4">ADVEN ZA reserves the right to modify these Terms and Conditions, as well as the prices or characteristics of the services, at any time and without prior notice.</p>
                <p>The modifications will be published on the Site and will come into effect on the indicated date. Subsequent use of the Site will imply acceptance of the new conditions.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">APPLICABLE LAW AND JURISDICTION</h2>
                <p>These Terms and Conditions are governed by the laws of the United Mexican States, and any controversy derived from their interpretation or compliance will be submitted to the jurisdiction of the competent courts of Mexico City, expressly waiving any other jurisdiction that may correspond.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CONTACT</h2>
                <p>For clarifications, support, or doubts about these Terms, you can communicate via email to atencion@advenza.com.mx or use the contact methods available on the Site.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}