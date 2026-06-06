import { useLocale } from "next-intl";

export default function PrivacyPage() {
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <div className="min-h-screen bg-night-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-night-900/50 p-8 md:p-12 rounded-3xl border border-night-800">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
          {isEs ? "Política de privacidad" : "Privacy Policy"}
        </h1>
        <p className="text-lg text-night-400 mb-10">BLKWHT S.A. DE C.V. (ADVEN ZA)</p>

        <div className="space-y-8 text-night-300 leading-relaxed text-sm md:text-base">
          {isEs ? (
            <>
              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">IDENTIDAD Y DOMICILIO DEL RESPONSABLE</h2>
                <p className="mb-4">BLKWHT S.A. DE C.V. (en adelante, &quot;ADVEN ZA&quot;), con domicilio en AVENIDA PRESIDENTE MASARYK, N° 178, DEP. 303, COLONIA POLANCO V SECCION, ALCALDIA MIGUEL HIDALGO, C.P. 11560, ENTIDAD FEDERATIVA CIUDAD DE MÉXICO., es responsable del tratamiento, uso y protección de los datos personales que recaba de sus clientes, usuarios y visitantes de su sitio web advenza.com.mx.</p>
                <p>Para cualquier asunto relacionado con el tratamiento de sus datos personales, podrá comunicarse al correo electrónico atencion@advenza.com.mx</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">DATOS PERSONALES QUE SE RECABAN</h2>
                <p className="mb-2">ADVEN ZA podrá recopilar los siguientes datos personales de manera directa o indirecta, cuando usted:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Visita el sitio web o utiliza nuestros formularios de contacto.</li>
                  <li>Se registra para adquirir cursos, talleres o diplomados en línea.</li>
                  <li>Realiza pagos a través de las plataformas habilitadas.</li>
                  <li>Solicita información o soporte técnico.</li>
                </ul>
                <p className="mb-2 font-semibold text-white">Datos recabados:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Nombre completo.</li>
                  <li>Correo electrónico.</li>
                  <li>Teléfono de contacto.</li>
                  <li>Domicilio fiscal (en caso de requerir factura).</li>
                  <li>Datos de facturación (RFC, razón social).</li>
                  <li>Datos financieros limitados (banco emisor y tipo de tarjeta).</li>
                </ul>
                <p>ADVEN ZA no almacena ni procesa directamente datos completos de tarjetas de crédito o débito; el procesamiento se realiza a través de pasarelas de pago certificadas y seguras.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">FINALIDADES DEL TRATAMIENTO DE LOS DATOS PERSONALES</h2>
                <p className="mb-2">Los datos personales recabados se utilizarán para las siguientes finalidades primarias:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Registrar y administrar su acceso a los cursos, talleres o diplomados ofrecidos por ADVEN ZA.</li>
                  <li>Gestionar pagos, facturación y emisión de comprobantes fiscales digitales.</li>
                  <li>Brindar soporte técnico, atención al cliente y seguimiento académico.</li>
                  <li>Cumplir con obligaciones derivadas de la contratación de servicios y cursos.</li>
                  <li>Enviar notificaciones relacionadas con su cuenta o servicios contratados.</li>
                </ul>
                <p className="mb-2">Y para las siguientes finalidades secundarias, que no son necesarias para la prestación del servicio, pero permiten brindarle una mejor experiencia:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Envío de información promocional sobre nuevos cursos, descuentos y eventos.</li>
                  <li>Evaluación de calidad y satisfacción del servicio.</li>
                  <li>Realización de encuestas o análisis de mercado.</li>
                  <li>Estadísticas internas y mejora de la experiencia del usuario.</li>
                </ul>
                <p>En caso de que no desee que sus datos se utilicen para fines secundarios, puede manifestarlo enviando un correo a atencion@advenza.com.mx con el asunto &quot;Negativa de tratamiento para finalidades secundarias&quot;.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">USO DE COOKIES Y TECNOLOGÍAS SIMILARES</h2>
                <p className="mb-2">ADVEN ZA utiliza cookies, web beacons y otras tecnologías de rastreo para mejorar su experiencia en el sitio web, analizar tráfico y personalizar contenido. Las cookies pueden recopilar información como:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Dirección IP.</li>
                  <li>Tipo de navegador y dispositivo.</li>
                  <li>Páginas visitadas dentro del sitio.</li>
                  <li>Duración de la visita.</li>
                </ul>
                <p>Usted puede desactivar o eliminar las cookies desde la configuración de su navegador; sin embargo, hacerlo podría afectar algunas funciones del sitio.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">TRANSFERENCIA DE DATOS PERSONALES</h2>
                <p className="mb-2">ADVEN ZA podrá compartir sus datos personales con terceros nacionales o extranjeros en los siguientes casos:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Autoridades fiscales o administrativas (cuando la ley así lo requiera).</li>
                  <li>Proveedores de servicios de hospedaje web, correo electrónico o herramientas digitales, necesarios para la operación del sitio.</li>
                </ul>
                <p>En todos los casos, se adoptarán las medidas de seguridad necesarias para garantizar que los terceros traten los datos conforme a la LFPDPPP y este Aviso de Privacidad.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">MEDIDAS DE SEGURIDAD</h2>
                <p className="mb-4">ADVEN ZA aplica medidas administrativas, técnicas y físicas de seguridad con el propósito de garantizar la integridad, confidencialidad y disponibilidad de los datos personales bajo su resguardo, previniendo cualquier daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado.</p>
                <p className="mb-4">Estas medidas se implementan conforme a los principios y obligaciones establecidos por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, e incluyen, de manera enunciativa más no limitativa, las siguientes acciones:</p>
                
                <h3 className="font-bold text-white mb-2">Medidas Administrativas</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Establecimiento de políticas internas de privacidad y confidencialidad, aplicables a todo el personal que interviene en el tratamiento de datos personales.</li>
                  <li>Capacitación y sensibilización periódica del personal sobre el manejo responsable de la información y las obligaciones legales derivadas del tratamiento de datos personales.</li>
                  <li>Implementación de acuerdos de confidencialidad con empleados, proveedores y terceros que tengan acceso a la información.</li>
                  <li>Procedimientos internos para la gestión de incidentes de seguridad, que incluyen notificación, contención, análisis y medidas correctivas.</li>
                </ul>

                <h3 className="font-bold text-white mb-2">Medidas Técnicas</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Uso de conexiones seguras (SSL) en todo el sitio web, garantizando la transmisión cifrada de la información proporcionada por los usuarios.</li>
                  <li>Cifrado de contraseñas y datos sensibles, aplicando estándares de encriptación reconocidos internacionalmente.</li>
                  <li>Control de acceso electrónico mediante autenticación y credenciales únicas para los sistemas internos que manejan datos personales.</li>
                  <li>Monitoreo y auditorías periódicas para detectar accesos no autorizados o vulnerabilidades en los sistemas.</li>
                  <li>Copias de seguridad (backups) cifradas de la información esencial para prevenir pérdida o corrupción de datos.</li>
                </ul>

                <h3 className="font-bold text-white mb-2">Medidas Físicas</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Restricción de acceso físico a las instalaciones y servidores donde se almacenan los datos personales, mediante controles de ingreso y vigilancia.</li>
                  <li>Almacenamiento seguro de documentos físicos en espacios cerrados, con acceso exclusivo a personal autorizado.</li>
                  <li>Implementación de medidas de respaldo y protección contra siniestros, como sistemas de detección de incendios, control ambiental y energía regulada para los equipos que alojan información.</li>
                </ul>

                <h3 className="font-bold text-white mb-2">Supervisión y Mejora Continua</h3>
                <p className="mb-2">ADVEN ZA mantiene un proceso de evaluación y mejora continua de sus medidas de seguridad, con revisiones periódicas que permiten adecuarlas a los avances tecnológicos, a las recomendaciones de autoridades competentes y a la evolución de las amenazas informáticas.</p>
                <p>En caso de presentarse un incidente de seguridad que afecte de forma significativa los derechos patrimoniales o morales de los titulares, ADVEN ZA notificará de inmediato al titular afectado, conforme al procedimiento previsto por la LFPDPPP.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">DERECHOS ARCO (ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN)</h2>
                <p className="mb-4">Usted tiene derecho a acceder a sus datos personales, rectificarlos si son incorrectos, cancelarlos cuando considere que ya no son necesarios o oponerse a su tratamiento para fines específicos.</p>
                <p className="mb-2">Para ejercer sus derechos ARCO, deberá enviar un correo electrónico a atencion@advenza.com.mx con la siguiente información:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Nombre completo y medio de contacto.</li>
                  <li>Descripción clara de la solicitud.</li>
                  <li>Documentos que acrediten su identidad o representación legal.</li>
                </ul>
                <p>El área correspondiente atenderá su solicitud en un plazo máximo de 20 días hábiles contados a partir de su recepción.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">LIMITACIÓN Y REVOCACIÓN DEL CONSENTIMIENTO</h2>
                <p className="mb-4">En cualquier momento, usted puede revocar su consentimiento para el tratamiento de sus datos personales enviando su solicitud a atencion@advenza.com.mx, indicando expresamente qué uso desea revocar.</p>
                <p>Asimismo, puede limitar el uso o divulgación de sus datos registrándose en el listado de exclusión interno de ADVEN ZA.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CONSERVACIÓN Y PLAZOS DE LOS DATOS</h2>
                <p className="mb-4">Los datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades señaladas o mientras exista relación contractual.</p>
                <p>En caso de usuarios inscritos en cursos o diplomados, la información se conservará hasta por atencion@advenza.com.mx después de concluido el curso, salvo disposición legal que exija otro plazo.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CAMBIOS AL AVISO DE PRIVACIDAD</h2>
                <p className="mb-4">ADVEN ZA se reserva el derecho de modificar o actualizar este Aviso de Privacidad para reflejar cambios legales, técnicos o comerciales.</p>
                <p>Las modificaciones serán publicadas en advenza.com.mx/aviso-de-privacidad y entrarán en vigor a partir de su publicación.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">ACEPTACIÓN</h2>
                <p>Al utilizar el sitio web y/o adquirir cualquiera de los servicios ofrecidos por ADVEN ZA, usted manifiesta haber leído, entendido y aceptado los términos de este Aviso de Privacidad.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">IDENTITY AND DOMICILE OF THE RESPONSIBLE PARTY</h2>
                <p className="mb-4">BLKWHT S.A. DE C.V. (hereinafter, &quot;ADVEN ZA&quot;), domiciled at AVENIDA PRESIDENTE MASARYK, N° 178, DEP. 303, COLONIA POLANCO V SECCION, ALCALDIA MIGUEL HIDALGO, C.P. 11560, MEXICO CITY, is responsible for the processing, use, and protection of the personal data it collects from its clients, users, and visitors to its website advenza.com.mx.</p>
                <p>For any matter related to the processing of your personal data, you may communicate via email to atencion@advenza.com.mx</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">PERSONAL DATA COLLECTED</h2>
                <p className="mb-2">ADVEN ZA may collect the following personal data directly or indirectly when you:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Visit the website or use our contact forms.</li>
                  <li>Register to acquire online courses, workshops, or diplomas.</li>
                  <li>Make payments through the enabled platforms.</li>
                  <li>Request information or technical support.</li>
                </ul>
                <p className="mb-2 font-semibold text-white">Data collected:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Full name.</li>
                  <li>Email address.</li>
                  <li>Contact phone number.</li>
                  <li>Tax domicile (if an invoice is required).</li>
                  <li>Billing data (RFC, business name).</li>
                  <li>Limited financial data (issuing bank and type of card).</li>
                </ul>
                <p>ADVEN ZA does not store or process complete credit or debit card data directly; processing is done through certified and secure payment gateways.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">PURPOSES OF PERSONAL DATA PROCESSING</h2>
                <p className="mb-2">The personal data collected will be used for the following primary purposes:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Register and manage your access to the courses, workshops, or diplomas offered by ADVEN ZA.</li>
                  <li>Manage payments, billing, and issuance of digital tax receipts.</li>
                  <li>Provide technical support, customer service, and academic follow-up.</li>
                  <li>Comply with obligations derived from the contracting of services and courses.</li>
                  <li>Send notifications related to your account or contracted services.</li>
                </ul>
                <p className="mb-2">And for the following secondary purposes, which are not necessary for the provision of the service, but allow us to offer you a better experience:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Sending promotional information about new courses, discounts, and events.</li>
                  <li>Evaluation of service quality and satisfaction.</li>
                  <li>Conducting surveys or market analysis.</li>
                  <li>Internal statistics and user experience improvement.</li>
                </ul>
                <p>In case you do not want your data to be used for secondary purposes, you can express it by sending an email to atencion@advenza.com.mx with the subject &quot;Refusal of processing for secondary purposes&quot;.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">USE OF COOKIES AND SIMILAR TECHNOLOGIES</h2>
                <p className="mb-2">ADVEN ZA uses cookies, web beacons, and other tracking technologies to improve your experience on the website, analyze traffic, and personalize content. Cookies may collect information such as:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>IP address.</li>
                  <li>Browser type and device.</li>
                  <li>Pages visited within the site.</li>
                  <li>Duration of the visit.</li>
                </ul>
                <p>You can disable or delete cookies from your browser settings; however, doing so may affect some site functions.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">TRANSFER OF PERSONAL DATA</h2>
                <p className="mb-2">ADVEN ZA may share your personal data with national or foreign third parties in the following cases:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Tax or administrative authorities (when required by law).</li>
                  <li>Providers of web hosting services, email, or digital tools necessary for the operation of the site.</li>
                </ul>
                <p>In all cases, the necessary security measures will be adopted to ensure that third parties treat the data in accordance with the LFPDPPP and this Privacy Notice.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">SECURITY MEASURES</h2>
                <p className="mb-4">ADVEN ZA applies administrative, technical, and physical security measures to guarantee the integrity, confidentiality, and availability of the personal data under its safeguard, preventing any damage, loss, alteration, destruction, or unauthorized use, access, or processing.</p>
                <p className="mb-4">These measures are implemented in accordance with the principles and obligations established by the Federal Law on Protection of Personal Data Held by Private Parties and its Regulations, and include, but are not limited to, the following actions:</p>
                
                <h3 className="font-bold text-white mb-2">Administrative Measures</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Establishment of internal privacy and confidentiality policies applicable to all personnel involved in the processing of personal data.</li>
                  <li>Periodic training and awareness of personnel regarding the responsible handling of information and legal obligations derived from data processing.</li>
                  <li>Implementation of confidentiality agreements with employees, providers, and third parties with access to information.</li>
                  <li>Internal procedures for managing security incidents, including notification, containment, analysis, and corrective measures.</li>
                </ul>

                <h3 className="font-bold text-white mb-2">Technical Measures</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Use of secure connections (SSL) throughout the website, guaranteeing encrypted transmission of user-provided information.</li>
                  <li>Encryption of passwords and sensitive data, applying internationally recognized encryption standards.</li>
                  <li>Electronic access control through authentication and unique credentials for internal systems handling personal data.</li>
                  <li>Monitoring and periodic audits to detect unauthorized access or vulnerabilities in systems.</li>
                  <li>Encrypted backups of essential information to prevent data loss or corruption.</li>
                </ul>

                <h3 className="font-bold text-white mb-2">Physical Measures</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Restriction of physical access to facilities and servers where personal data is stored through access controls and surveillance.</li>
                  <li>Secure storage of physical documents in closed spaces with exclusive access to authorized personnel.</li>
                  <li>Implementation of backup measures and protection against disasters, such as fire detection systems, environmental control, and regulated power for equipment hosting information.</li>
                </ul>

                <h3 className="font-bold text-white mb-2">Supervision and Continuous Improvement</h3>
                <p className="mb-2">ADVEN ZA maintains a process of evaluation and continuous improvement of its security measures with periodic reviews to adapt them to technological advances, competent authority recommendations, and evolving cyber threats.</p>
                <p>In the event of a security incident significantly affecting the patrimonial or moral rights of data subjects, ADVEN ZA will immediately notify the affected subject, as per the procedure provided by the LFPDPPP.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">ARCO RIGHTS (ACCESS, RECTIFICATION, CANCELLATION, AND OPPOSITION)</h2>
                <p className="mb-4">You have the right to access your personal data, rectify it if it is incorrect, cancel it when you consider it is no longer necessary, or oppose its processing for specific purposes.</p>
                <p className="mb-2">To exercise your ARCO rights, you must send an email to atencion@advenza.com.mx with the following information:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Full name and contact method.</li>
                  <li>Clear description of the request.</li>
                  <li>Documents proving your identity or legal representation.</li>
                </ul>
                <p>The corresponding department will address your request within a maximum of 20 business days from its receipt.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">LIMITATION AND REVOCATION OF CONSENT</h2>
                <p className="mb-4">At any time, you can revoke your consent for the processing of your personal data by sending your request to atencion@advenza.com.mx, expressly indicating what use you wish to revoke.</p>
                <p>Likewise, you can limit the use or disclosure of your data by registering on ADVEN ZA&apos;s internal exclusion list.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">RETENTION AND DATA DEADLINES</h2>
                <p className="mb-4">Personal data will be kept for the time necessary to fulfill the stated purposes or while a contractual relationship exists.</p>
                <p>For users enrolled in courses or diplomas, information will be retained via atencion@advenza.com.mx after the course concludes, unless a legal provision requires another term.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">CHANGES TO THE PRIVACY NOTICE</h2>
                <p className="mb-4">ADVEN ZA reserves the right to modify or update this Privacy Notice to reflect legal, technical, or commercial changes.</p>
                <p>Modifications will be published at advenza.com.mx/aviso-de-privacidad and will come into effect upon publication.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-fire-400 mb-4">ACCEPTANCE</h2>
                <p>By using the website and/or acquiring any of the services offered by ADVEN ZA, you acknowledge having read, understood, and accepted the terms of this Privacy Notice.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}