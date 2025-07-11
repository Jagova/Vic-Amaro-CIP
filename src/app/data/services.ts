import { Service } from "../interfaces/service.interface";

export const services: Service[] = [
    {
        path: 'physical-image',
        image: 'assets/images/services/physical-image.png',
        title: 'Manual de imagen física',
        description: `
            <div>
                <p>Incluye:</p>
                <ul>
                    <li>Auditoria de imagen profesional.</li>
                    <li>Imagen física profesional.</li>
                    <li>Comunicación verbal y no verbal.</li>
                    <li>Etiqueta profesional.</li>
                </ul>
                <p>Recomendaciones personalizadas:</p>
                <ul>
                    <li>Vestuario y aliño profesional</li>
                    <li>Comunicación persuasiva</li>
                    <li>Imagen kinésica (movimientos corporales)</li>
                    <li>Imagen en redes sociales</li>
                    <li>Etiqueta profesional</li>
                </ul>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>Responderás un cuestionario, unas pruebas psicométricas y un test de estilo para reconocer tu esencia personal y me enviaras las respuestas al correo electrónico info@cipvictoriamaro.com.mx (Duración apróx. 1 hora).</li>
                    <li>Tendremos una entrevista 1 a 1 para conocerte mejor y reafirmar tu estilo (Duración apróx. 3-4 horas).</li>
                    <li>Con la ayuda de alguien más te pediré que te tomes unas fotografías y mediciones para determinar tu tipo de rostro, cuerpo y cromometría y me las enviarás al correo info@cipvictoriamaro.com.mx.</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 15 días.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Responderás un cuestionario, unas pruebas psicométricas y un test de estilo para reconocer tu esencia personal y me enviaras las respuestas a mi correo electrónico info@cipvictoriamaro.com.mx (Duración apróx. 1 hora).</li>
                    <li>Tendremos una entrevista 1 a 1 para conocerte mejor y definir tu estilo. (Duración apróx. 2-3 horas).</li>
                    <li>Se hará una sesión fotográfica y toma de medidas para determinar tu tipo de rostro, cuerpo y cromometría. (Duración apróx. 30-45 min.).</li>
                    <li>Se confirmará la cromometría por medio de una prueba de drapeados y se configurará tu paleta de colores personalizada. (Duración apróx. 1-2 horas).</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 15 días.</li>
                </ol>
            </div>
        `,
        isPrincipal: true,
        priceOnline: '$5,400',
        pricePresencial: '$6,000',
        priority: 7,
        presencialLink: "https://go.hotmart.com/C100672283S",
        onlineLink: "https://go.hotmart.com/U100672296D"
    },
    {
        path: 'professional-image',
        image: 'assets/images/services/professional-image.png',
        title: 'Manual de Imagen Profesional',
        description: `
          <div>
            <p>¿Te gustaría que tu imagen transmitiera confianza, credibilidad y coherencia con lo que haces?</p>
            <p>Este servicio está diseñado para ayudarte a proyectar una imagen profesional alineada con tu personalidad, valores y objetivos laborales o de negocio.</p>
            <p>Incluye:</p>
            <ul>
              <li>Auditoría de imagen profesional</li>
              <li>Comunicación verbal y no verbal</li>
              <li>Etiqueta profesional</li>
            </ul>
            <p>Recomendaciones personalizadas en:</p>
            <ul>
              <li>Comunicación persuasiva</li>
              <li>Imagen kinésica (movimientos corporales)</li>
              <li>Imagen en redes sociales</li>
              <li>Etiqueta profesional</li>
            </ul>
            <p><strong>Modalidad:</strong> Virtual (vía Zoom) o presencial en San Luis Potosí</p>
            <p>Dirigido a personas de cualquier edad y ocupación, especialmente emprendedores, profesionistas, freelancers y personas en transición laboral.</p>
          </div>
        `,
        onlineDescription: `
          <div>
            <ol>
              <li>Cuestionario, pruebas psicométricas y test de estilo para reconocer tu esencia personal (Duración aprox. 1 hora).</li>
              <li>Entrevista 1 a 1 para definir tus objetivos profesionales (Duración aprox. 1 hora).</li>
              <li>Encuesta de imagen profesional para públicos objetivo (Google Form).</li>
              <li>2 videos tuyos (uno profesional, otro de interés personal) y 1 video caminando (se enviarán instrucciones).</li>
              <li>Sesión de capacitación en comunicación verbal y no verbal.</li>
              <li>Entrega de PDF con análisis, diagnóstico y recomendaciones (en un máximo de 15 días tras la última sesión).</li>
            </ol>
          </div>
        `,
        presencialDescription: `
          <div>
            <ol>
              <li>Cuestionario, pruebas psicométricas y test de estilo (Duración aprox. 1 hora).</li>
              <li>Entrevista 1 a 1 para definir estilo y objetivos profesionales (Duración aprox. 2-3 horas).</li>
              <li>Encuesta de imagen profesional para públicos objetivo (Google Form).</li>
              <li>Sesión de capacitación en comunicación verbal y no verbal.</li>
              <li>Entrega de PDF con análisis, diagnóstico y recomendaciones (en un máximo de 15 días tras la última sesión).</li>
            </ol>
          </div>
        `,
        isPrincipal: true,
        priceOnline: '$6,000',
        pricePresencial: '$6,800',
        priority: 10,
        presencialLink: "https://go.hotmart.com/B100672257R",
        onlineLink: "https://go.hotmart.com/H100672267N"
    },
    {
        path: 'style-diagnosis',
        image: 'assets/images/services/style-diagnosis.png',
        title: 'Diagnóstico de estilo',
        description: `
            <div>
                <p>Con este servicio conocerás:</p>
                <ul>
                    <li>Cuál es tu estilo y sub-estilo y como aprovecharlos al máximo.</li>
                    <li>Como lograr tus objetivos (personales/laborales) por medio de tu apariencia.</li>
                    <li>Como comunicar quién eres a través de tu ropa y arreglo personal.</li>
                    <li>Outfit inspo según la ocasión (trabajo, evento social formal de día, noche y de diario).</li>
                </ul>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí, México.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>Responderás un cuestionario, unas pruebas psicométricas y un test de estilo para reconocer tu esencia personal y me enviaras las respuestas al correo electrónico info@cipvictoriamaro.com (Duración apróx. 1 hora).</li>
                    <li>Tendremos una entrevista 1 a 1 para conocerte mejor y reafirmar tu estilo vía zoom (Duración apróx. 2-3 horas).</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico en un máximo de 72 horas.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Responderás un cuestionario, unas pruebas psicométricas y un test de estilo para reconocer tu esencia personal y me enviaras las respuestas al correo electrónico info@cipvictoriamaro.com (Duración apróx. 1 hora).</li>
                    <li>Tendremos una entrevista 1 a 1 para conocerte mejor y reafirmar tu estilo (Duración apróx. 2-3 horas).</li>
                    <li>Te Entregaré un PDF con la información completa de análisis y diagnóstico en un máximo de 72 horas.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$2,100',
        pricePresencial: '$2,400',
        priority: 1,
        presencialLink: "https://go.hotmart.com/U100243020B",
        onlineLink: "https://go.hotmart.com/L100243805J"
    },
    {
        path: 'face-and-body-type',
        image: 'assets/images/services/face-and-body-type.png',
        title: 'Face & body type',
        description: `
            <div>
                <p>Con este servicio conocerás:</p>
                <ul>
                    <li>Las prendas que más favorecen tu tipo de cuerpo.</li>
                    <li>Los peinados, maquillaje, vello facial y accesorios que más van contigo según el visagismo.</li>
                    <li>Ilusiones ópticas para cuerpo y rostro.</li>
                    <li>Técnicas de aplicación de maquillaje.</li>
                    <li>Tu escala ideal.</li>
                </ul>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>Con la ayuda de alguien más te pediré que te tomes unas fotografías y mediciones que me enviarás al correo info@cipvictoriamaro.com.mx.</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico en un máximo de 48 horas.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Se hará una sesión fotográfica y toma de medidas para determinar tu tipo de rostro y cuerpo (Duración apróx. 30-45 min.).</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico en un máximo de 48 horas.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$2,100',
        pricePresencial: '$2,400',
        priority: 2,
        presencialLink: "https://go.hotmart.com/F100455751J",
        onlineLink: "https://go.hotmart.com/F100671432Q?dp=1"
    },
    {
        path: 'color-analysis',
        image: 'assets/images/services/color-analysis.png',
        title: 'Análisis de color',
        description: `
            <div>
                <p>Con este servicio conocerás:</p>
                <ul>
                    <li>La paleta de colores personalizada que más te favorece según tu color de piel, ojos y cabello.</li>
                    <li>Tu estación y subestación cromática.</li>
                    <li>Los colores en prendas que te harán lucir más radiante.</li>
                    <li>Los accesorios que mejor van contigo (¿Dorados? ¿Plateados? ¿Both?).</li>
                    <li>Los tintes de cabello que más te favorecen.</li>
                    <li>Las tonalidades en maquillaje ideales para ti.</li>
                    <li>Combinaciones de colores y lo que comunican.</li>
                </ul>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>Te pediré que te tomes unas fotografías para poder observar tus colores de piel, ojos y cabello, de preferencia con luz natural del sol y me las enviarás al correo info@cipvictoriamaro.com.mx.</li>
                    <li>Te entregaré un PDF con la información completa de análisis, diagnóstico y recomendaciones en un máximo de 48 horas</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Tendremos una sesión en la que te tomaré unas fotografías para poder observar tus colores de piel, ojos y cabello.</li>
                    <li>Se reafirmará la cromometría por medio de una prueba de drapeados y se configurará tu paleta de colores personalizada.</li>
                    <li>Te entregaré un PDF con la información completa de análisis, diagnóstico y recomendaciones en un máximo de 48 horas</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$2,500',
        pricePresencial: '$2,800',
        priority: 3,
        presencialLink: "https://go.hotmart.com/W100671696W",
        onlineLink: "https://go.hotmart.com/W100671728J"
    },
    {
        path: 'express',
        image: 'assets/images/services/sos-tip.png',
        title: 'Asesoria Express',
        description: `
            <div>
                <p>Disponible en los servicios de:</p>
                <ul>
                    <li>Diagnóstico de estilo.</li>
                    <li>Análisis de color.</li>
                    <li>Face & body type.</li>
                    <li>Imagen completa.</li>
                </ul>
                <p>Imagen completa express como  requisito mínimo para:</p>
                <ul>
                    <li>Clóset détox.</li>
                    <li>Personal shopper.</li>
                    <li>Asesoría por evento.</li>
                </ul>
            </div>
        `,
        onlineDescription: "",
        presencialDescription: "",
        isPrincipal: false,
        priceOnline: "Desde $800",
        pricePresencial: "Desde $900",
        priority: 9,
        presencialLink: "https://go.hotmart.com/H100672328V",
        onlineLink: "https://go.hotmart.com/X100672332T"
    },
    {
        path: 'closet-detox',
        image: 'assets/images/services/closet-detox.png',
        title: 'Clóset Detox',
        description: `
            <div>
                <p>*Servicio complementario al Manual de Imagen Física.</p>
                <p>Con este servicio:</p>
                <ul>
                    <li>Siempre tendrás algo que ponerte.</li>
                    <li>Sabrás reconocer las prendas que te hacen falta y no gastarás dinero de más al comprar ropa.</li>
                    <li>Soltarás aquellas prendas que ya no deberían de formar parte de tu vida.</li>
                    <li>Optimizarás el espacio en tu clóset y sabrás como combinar todo.</li>
                    <li>Utilizarás todas tus prendas y les sacarás el máximo provecho.</li>
                </ul>
                <p>*Incluye una Asesoría Express de Imagen completa o se contrata como servicio adicional al Manual de Imagen Física.</p>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>1 hora antes nuestra videollamada, sacarás todas las prendas de tu clóset (incluyendo accesorios, zapatos, bolsos, etc.) y los colocarás sobre una mesa o superficie plana.</li>
                    <li> Tendremos una sesión de apróx 3 horas en las que clasificaremos todo.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu clóset y para que puedas tenerlas de una manera accesible y ordenada, priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré un resumen del clóset détox y una lista con aquellas cosas que podrías adquirir para complementar en un máximo de 42 horas.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Tendremos una sesión de apróx. 3 horas en las que clasificaremos todas tus prendas, accesorios, calzado y bolsos, para esto te pediré que saques todas tus prendas y accesorios 1 hora antes de nuestra cita.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu clóset y que puedas tenerlas de una manera accesible y ordenada, priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré un resumen del clóset détox y una lista con aquellas cosas que podrías adquirir para complementar en un máximo de 42 horas.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$1,600',
        pricePresencial: '$1,800',
        priority: 4,
        presencialLink: "https://go.hotmart.com/M100672170S",
        onlineLink: "https://go.hotmart.com/K100672187H"
    },
    {
        path: 'personal-shopper',
        image: 'assets/images/services/personal-shopper.png',
        title: 'Personal Shopper',
        description: `
            <div>
                <p>Con este servicio tendrás un asesoramiento personalizado para encontrar en tiendas aquellas prendas y accesorios que podrían complementar tu guardarropa y que siempre tengas que ponerte.</p>
                <p>*Incluye una Asesoría Express de Imagen completa o se contrata como servicio adicional al Manual de Imagen Física.</p>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>De acuerdo con tu presupuesto y guiándome en la lista de faltantes de tu closet detox, buscaré en tiendas online aquellas prendas y accesorios que ayuden a complementar tu guardarropa y te lo enviaré en un máximo de 42 horas.</li>
                    <li>Te enviaré la lista de compras para que puedas pedirlos directamente a la dirección de tu preferencia.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Dependiendo de tus necesidades de vestimenta y presupuesto crearé una ruta de tiendas con 4 opciones diferentes para hacer la búsqueda de tus prendas faltantes.</li>
                    <li>Nos reuniremos durante apróx. 2-3 horas para encontrar las prendas y que te las puedas probar.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$1,800',
        pricePresencial: '$2,500',
        priority: 5,
        presencialLink: "https://go.hotmart.com/M100672218Q",
        onlineLink: "https://go.hotmart.com/L100672226H"
    },
    {
        path: 'advice-per-event',
        image: 'assets/images/services/advice-per-event.png',
        title: 'Asesoría por evento',
        description: `
            <div>
                <p>Con este servicio podrás recibir asesoramiento de vestimenta y etiqueta del próximo evento al que vayas a asistir, ya sea como anfitrión o como invitado.</p>
                <p>*Incluye una Asesoría Express de Imagen completa o se contrata como servicio adicional al Manual de Imagen Física.</p>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>Recibirás un cuestionario con preguntas sobre tu evento.</li>
                    <li>2. Recibirás una lista de compras con 2 opciones diferentes de vestimenta según tus características personales y una guía sobre el protocolo adecuado según el evento y el papel que funjas en el (como anfitrión o invitado) en un máximo de 42 horas.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Recibirás un cuestionario con preguntas sobre tu evento.</li>
                    <li>De acuerdo a tus necesidades de vestimenta y presupuesto, nos reuniremos en una tienda para adquirir el vestuario que sea el adecuado para ti.</li>
                    <li>Recibirás una guía sobre el protocolo adecuado según el evento y el papel que funjas en el (como anfitrión o invitado).</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$1,800',
        pricePresencial: '$2,000',
        priority: 6,
        presencialLink: "https://go.hotmart.com/O100672235A",
        onlineLink: "https://go.hotmart.com/C100672242A"
    },
    // {
    //     path: 'verbal-and-non-verbal-image',
    //     image: 'assets/images/services/verbal-and-non-verbal-image.jpeg',
    //     title: 'Auditoría en imagen verbal y no verbal',
    //     description: `
    //         <div>
    //             <p>Con este servicio podrás:</p>
    //             <ul>
    //                 <li>Conocer estrategias para calmar la ansiedad al hablar en público.</li>
    //                 <li>Reconocer tu estilo como orador.</li>
    //                 <li>Armar un discurso adecuado para conectar con tu público objetivo y que este sea persuasivo.</li>
    //                 <li>Construir un mensaje y comunicarlo como lo deseas.</li>
    //                 <li>Usar los movimientos de tu cuerpo y gesticulaciones como una herramienta a tu favor.</li>
    //             </ul>
    //             <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
    //             <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
    //         </div>
    //     `,
    //     onlineDescription: `
    //         <div>
    //             <ol>
    //                 <li>Tendremos una sesión de zoom para conocerte mejor y definir tus objetivos.</li>
    //                 <li>Me enviarás unos videos y fotografías al correo info@cipvictoriamaro.com.mx de:</li>
    //                 <ul>
    //                     <li>Video de cuerpo completo hablando a modo de discurso sobre tu profesión.</li>
    //                     <li>Video de rostro hablando a modo de discurso sobre tu hobbie favorito o algún tema que te apasione.</li>
    //                     <li>Video caminando (se enviará ejemplo).</li>
    //                     <li>Fotografía sentado (se enviará ejemplo).</li>
    //                 </ul>
    //                 <li>Se enviarán las recomendaciones pertinentes y se te pedirá que se vuelvan a enviar los videos y fotografías con las correcciones.</li>
    //                 <li>Se tendrá una sesión de zoom de preguntas y respuestas para, de ser necesario, ajustar las recomendaciones.</li>
    //             </ol>
    //         </div>
    //     `,
    //     presencialDescription: `
    //         <div>
    //             <ol>
    //                 <li>Tendremos una reunión para conocerte mejor y definir tus objetivos. En esta sesión te pediré decir un discurso sobre tu profesión y otro sobre tu hobbie favorito o tema de tu interés mientras eres grabado. Se te tomará otro video para analizar tu caminado y unas fotografías para evaluar tu postura al sentarte, gesticulaciones y ademanes.</li>
    //                 <li>Tendremos de dos a tres sesiones más para perfeccionar tu discurso y movimientos corporales y resolver dudas.</li>
    //             </ol>
    //         </div>
    //     `,
    //     isPrincipal: true,
    //     priceOnline: '$3,865',
    //     pricePresencial: '$4,154',
    //     priority: 11
    // },
    {
        path: '360-image',
        image: 'assets/images/services/360-image.png',
        title: 'Manual de Imagen 360',
        description: `
          <div>
            <h2>¿Te gustaría alinear tu esencia personal con la forma en la que te presentas al mundo?</h2>
            <p>El servicio de <strong>Imagen 360°</strong> es una experiencia completa de autoconocimiento y transformación, que une lo mejor de la imagen física y profesional para ayudarte a proyectarte con autenticidad, seguridad y coherencia en todos los ámbitos de tu vida.</p>
            <p>Incluye:</p>
            <ul>
              <li>Diagnóstico de estilo</li>
              <li>Face & body type</li>
              <li>Análisis de color</li>
              <li>Auditoría de imagen profesional</li>
              <li>Comunicación verbal y no verbal</li>
              <li>Etiqueta profesional</li>
            </ul>
            <p>Recomendaciones personalizadas:</p>
            <ul>
              <li>Prendas y accesorios</li>
              <li>Maquillaje y cabello</li>
              <li>Colores básicos y combinaciones</li>
              <li>Armario cápsula social y profesional</li>
              <li>Etiqueta social para eventos</li>
              <li>Clóset détox</li>
              <li>Personal Shopper</li>
              <li>Imagen kinésica y redes sociales</li>
            </ul>
            <p><strong>Modalidad:</strong> Virtual (vía Zoom) o presencial en San Luis Potosí</p>
            <p>Para personas de cualquier edad y ocupación.</p>
          </div>
        `,
        onlineDescription: `
          <div>
            <ol>
              <li>Cuestionario, test psicométrico y de estilo para identificar tu esencia personal (Duración aprox. 1 hora).</li>
              <li>Entrevista 1 a 1 para reafirmar estilo y definir objetivos profesionales (Duración aprox. 2-3 horas).</li>
              <li>Fotografías y medidas para análisis físico y cromático.</li>
              <li>Fotos de prendas y accesorios. Recibirás lista de lo que conservar y lo que adquirir.</li>
              <li>Lista de compras online personalizada.</li>
              <li>Encuesta de imagen profesional a tus públicos objetivo.</li>
              <li>Envío de dos videos tuyos y uno caminando para análisis de comunicación.</li>
              <li>Sesión de capacitación en comunicación verbal y no verbal.</li>
              <li>Entrega de diagnóstico y recomendaciones personalizadas en PDF (15 días después de la última sesión).</li>
            </ol>
          </div>
        `,
        presencialDescription: `
          <div>
            <ol>
              <li>Cuestionario, test psicométrico y de estilo para identificar tu esencia personal (Duración aprox. 1 hora).</li>
              <li>Entrevista 1 a 1, sesión de fotos y toma de medidas (Duración aprox. 2 horas).</li>
              <li>Prueba de drapeados para confirmar paleta cromática personalizada (Duración aprox. 1-2 horas).</li>
              <li>Sesión de clasificación y organización de clóset (Duración aprox. 2-3 horas).</li>
              <li>Lista de compras para complementar guardarropa.</li>
              <li>Ruta de tiendas personalizada y salida de compras (Duración aprox. 2-3 horas).</li>
              <li>Encuesta de imagen profesional a tus públicos objetivo.</li>
              <li>Sesión de capacitación en comunicación verbal y no verbal.</li>
              <li>Entrega de diagnóstico y recomendaciones personalizadas en PDF (15 días después de la última sesión).</li>
            </ol>
          </div>
        `,
        isPrincipal: true,
        priceOnline: '$11,000',
        pricePresencial: '$12,500',
        priority: 11,
        onlineLink: "https://go.hotmart.com/X100307590W",
        presencialLink: "https://go.hotmart.com/H100231612Y"
    }
    ,
    {
        path: 'pro-image',
        image: 'assets/images/services/pro-image.png',
        title: 'Manual de Imagen Física PRO',
        description: `
            <div>
                <h2>¡El servicio más completo!</h2>
                <p>Incluye:</p>
                <ul>
                    <li>Auditoria de imagen profesional.</li>
                    <li>Imagen física profesional.</li>
                    <li>Comunicación verbal y no verbal.</li>
                    <li>Etiqueta profesional.</li>
                </ul>
                <p>Recomendaciones personalizadas:</p>
                <ul>
                    <li>Vestuario y aliño profesional</li>
                    <li>Comunicación persuasiva</li>
                    <li>Imagen kinésica (movimientos corporales)</li>
                    <li>Imagen en redes sociales</li>
                    <li>Etiqueta profesional</li>
                </ul>
                <p>Servicios adicionales:</p>
                <ul>
                    <li>Clóset détox</li>
                    <li>Personal Shopper</li>
                </ul>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>Responderás un cuestionario, un test psicométrico y un test de estilo para reconocer tu esencia personal y me enviaras las respuestas al correo electrónico info@cipvictoriamaro.com.mx (Duración apróx. 1 hora).</li>
                    <li>Tendremos una entrevista 1 a 1 para conocerte mejor y reafirmar tu estilo (Duración apróx. 3-4 horas).</li>
                    <li>Con la ayuda de alguien más te pediré que te tomes unas fotografías y mediciones para determinar tu tipo de rostro, cuerpo y cromometría y me las enviarás al correo info@cipvictoriamaro.com.mx</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 14 días.</li>
                    <li>Tendremos una videollamada para hacer tu clóset détox, para esto te pediré que 1 hora antes de la cita, saques todas las prendas de tu clóset (incluyendo accesorios, zapatos, bolsos, etc.) y los colocarás sobre una mesa o superficie plana.</li>
                    <li>Juntos/as clasificaremos todas tus prendas y accesorios y decidiremos que se va y que se queda.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu clóset y que puedas tenerlas de una manera accesible y ordenada priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                    <li>De acuerdo con tu presupuesto y guiándome en la lista de faltantes de tu clóset détox, buscaré en tiendas online aquellas prendas y accesorios que ayuden a complementar tu guardarropa.</li>
                    <li>Te enviaré la lista de compras para que puedas pedirlos directamente a la dirección de tu preferencia.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Responderás un cuestionario, un test psicométrico y un test de estilo para reconocer tu esencia personal y me enviaras las respuestas al correo electrónico info@cipvictoriamaro.com.mx (Duración apróx. 1 hora).</li>
                    <li>Tendremos una entrevista 1 a 1 para conocerte mejor y reafirmar tu estilo. (Duración apróx. 3-4 horas).</li>
                    <li>Se hará una sesión fotográfica y toma de medidas para determinar tu tipo de rostro, cuerpo y cromometría. (Duración apróx. 30-45 min.).</li>
                    <li>Se reafirmará tu cromometría por medio de una prueba de drapeados y se configurará tu paleta de colores personalizada. (Duración apróx. 1-2 horas).</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 14 días.</li>
                    <li>Tendremos una sesión de apróx. 3 horas en las que clasificaremos todas tus prendas, accesorios, calzado y bolsos, para esto te pediré que saques todas tus prendas y accesorios 1 hora antes de nuestra cita.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu clóset y que puedas tenerlas de una manera accesible y ordenada priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                    <li>Dependiendo de tus necesidades de vestimenta y presupuesto crearé una ruta de tiendas con 4 opciones diferentes para hacer la búsqueda de tus prendas faltantes.</li>
                    <li>Nos reuniremos apróx. 2-3 horas para encontrar las prendas y que te las puedas probar.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$7,500',
        pricePresencial: '$8,400',
        priority: 8,
        presencialLink: "https://go.hotmart.com/M100672306N",
        onlineLink: "https://go.hotmart.com/I100672318Q"
    }
];