import { Service } from "../interfaces/service.interface";

export const services: Service[] = [
    {
        path: 'physical-image',
        image: 'assets/images/services/physical-image.jpeg',
        title: 'Manual de imagen física',
        description: `
            <div>
                <p>Incluye:</p>
                <ul>
                    <li>Diagnóstico de estilo.</li>
                    <li>Face & body type.</li>
                    <li>Análisis de color.</li>
                    <li>Recomendaciones personalizadas por prenda</li>
                    <li>Combinaciones de color</li>
                    <li>Recomendaciones de cortes de cabello, tintes y maquillaje.</li>
                    <li>Armario cápsula</li>
                    <li>Ejemplos de outfit por evento</li>
                    <li>Ejemplo de atuendo laboral</li>
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
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 30 días.</li>
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
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 30 días.</li>
                </ol>
            </div>
        `,
        isPrincipal: true,
        priceOnline: '$6,188',
        pricePresencial: '$6,749'
    },
    {
        path: 'professional-image',
        image: 'assets/images/services/professional-image.jpeg',
        title: 'Manual de imagen profesional',
        description: `
            <div>
                <p>Incluye:</p>
                <ul>
                    <li>Diagnóstico de estilo.</li>
                    <li>Face & body type.</li>
                    <li>Análisis de color.</li>
                    <li>Recomendaciones personalizadas por prenda</li>
                    <li>Combinaciones de color</li>
                    <li>Armario cápsula</li>
                    <li>Ejemplos de outfit por evento</li>
                    <li>Ejemplo de atuendo laboral</li>
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
                    <li>Con la ayuda de alguien más te pediré que te tomes unas fotografías y mediciones para determinar tu tipo de rostro, cuerpo y cromometría y me las enviarás al correo info@cipvictoriamaro.com.mx.</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 30 días.</li>
                    <li>Tendremos una videollamada para hacer tu closet détox, para esto te pediré que 1 hora antes de la cita, saques todas las prendas de tu closet (incluyendo accesorios, zapatos, bolsos, etc.) y los colocarás sobre una mesa o superficie plana.</li>
                    <li>Juntos/as clasificaremos todas tus prendas y accesorios y decidiremos que se va y que se queda.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu closet y que puedas tenerlas de una manera accesible y ordenada priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                    <li>De acuerdo a tu presupuesto y guiándome en la lista de faltantes de tu closet détox, buscaré en tiendas online aquellas prendas y accesorios que ayuden a complementar tu guardarropa.</li>
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
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 30 días.</li>
                    <li>Tendremos una sesión de apróx. 3 horas en las que clasificaremos todas tus prendas, accesorios, calzado y bolsos, para esto te pediré que saques todas tus prendas y accesorios 1 hora antes de nuestra cita.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu closet y que puedas tenerlas de una manera accesible y ordenada priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                    <li>Dependiendo de tus necesidades de vestimenta y presupuesto crearé una ruta de tiendas con 4 opciones diferentes para hacer la búsqueda de tus prendas faltantes.</li>
                    <li>Nos reuniremos aprox. 2-3 horas para encontrar las prendas y que te las puedas probar.</li>
                </ol>
            </div>
        `,
        isPrincipal: true,
        priceOnline: '$9,676',
        pricePresencial: '$10,967'
    },
    {
        path: 'style-diagnosis',
        image: 'assets/images/services/style-diagnosis.jpeg',
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
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico en un máximo de 14 días.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Responderás un cuestionario, unas pruebas psicométricas y un test de estilo para reconocer tu esencia personal y me enviaras las respuestas al correo electrónico amarolopezv@gmail.com (Duración apróx. 1 hora).</li>
                    <li>Tendremos una entrevista 1 a 1 para conocerte mejor y reafirmar tu estilo (Duración apróx. 2-3 horas).</li>
                    <li>Te Entregaré un PDF con la información completa de análisis y diagnóstico en un máximo de 14 días.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$2,101',
        pricePresencial: '$2,231'
    },
    {
        path: 'face-and-body-type',
        image: 'assets/images/services/face-and-body-type.jpeg',
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
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico en un máximo de 14 días.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Se hará una sesión fotográfica y toma de medidas para determinar tu tipo de rostro y cuerpo (Duración apróx. 30-45 min.).</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico en un máximo de 14 días.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$2,101',
        pricePresencial: '$2,315'
    },
    {
        path: 'color-analysis',
        image: 'assets/images/services/color-analysis.jpeg',
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
                    <li>Te entregaré un PDF con la información completa de análisis, diagnóstico y recomendaciones en un máximo de 14 días.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Tendremos una sesión en la que te tomaré unas fotografías para poder observar tus colores de piel, ojos y cabello.</li>
                    <li>Se reafirmará la cromometría por medio de una prueba de drapeados y se configurará tu paleta de colores personalizada.</li>
                    <li>Te entregaré un PDF con la información completa de análisis, diagnóstico y recomendaciones en un máximo de 14 días.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$2,486',
        pricePresencial: '$2,829'
    },
    {
        path: 'sos-tip',
        image: 'assets/images/services/sos-tip.jpeg',
        title: 'Tip S.O.S.',
        description: `
            <div>
                <p>Haz una pregunta específica relacionada a tu estilo personal, tipo de rostro, cuerpo o cromometría sin un manual de imagen completo. Recibiras una respuesta en menos de 24 horas.</p>
                <p>Ej.:</p>
                <ul>
                    <li>¿Cuáles lentes me compro?</li>
                    <li>¿De qué color me pinto el cabello?</li>
                    <li>¿Qué camisa me conviene usar para una entrevista de trabajo?</li>
                    <li>¿Cuál es el color de labial que mejor me queda?</li>
                </ul>
                <p><strong>Modalidad:</strong> Online.</p>
                <p>*Paquetes de 1 a 3 preguntas.</p>
                <p>*Dependiendo de la pregunta podría pedirte que me contestes un test, me envíes alguna fotografía o medición.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <p>Haz una pregunta específica relacionada a tu estilo personal, tipo de rostro, cuerpo o cromometría sin un manual de imagen completo. Recibiras una respuesta en menos de 24 horas.</p>
                <p>Ej.:</p>
                <ul>
                    <li>¿Cuáles lentes me compro?</li>
                    <li>¿De qué color me pinto el cabello?</li>
                    <li>¿Qué camisa me conviene usar para una entrevista de trabajo?</li>
                    <li>¿Cuál es el color de labial que mejor me queda?</li>
                </ul>
            </div>
        `,
        presencialDescription: "",
        isPrincipal: false,
        priceOnline: '1 pregunta $300/ 3 preguntas $750',
        pricePresencial: ''
    },
    {
        path: 'closet-detox',
        image: 'assets/images/services/closet-detox.jpeg',
        title: 'Closet Detox',
        description: `
            <div>
                <p>*Servicio complementario al Manual de Imagen Física.</p>
                <p>Con este servicio:</p>
                <ul>
                    <li>Siempre tendrás algo que ponerte.</li>
                    <li>Sabrás reconocer las prendas que te hacen falta y no gastarás dinero de más al comprar ropa.</li>
                    <li>Soltarás aquellas prendas que ya no deberían de formar parte de tu vida.</li>
                    <li>Optimizarás el espacio en tu closet y sabrás como combinar todo.</li>
                    <li>Utilizarás todas tus prendas y les sacarás el máximo provecho.</li>
                </ul>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>1 hora antes nuestra videollamada, sacarás todas las prendas de tu closet (incluyendo accesorios, zapatos, bolsos, etc.) y los colocarás sobre una mesa o superficie plana.</li>
                    <li>Tendremos una sesión de apróx 3 horas en las que juntos/as clasificaremos todo.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu closet y para que puedas tenerlas de una manera accesible y ordenada, priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Tendremos una sesión de apróx. 3 horas en las que clasificaremos todas tus prendas, accesorios, calzado y bolsos, para esto te pediré que saques todas tus prendas y accesorios 1 hora antes de nuestra cita.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu closet y que puedas tenerlas de una manera accesible y ordenada, priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$2,259',
        pricePresencial: '$1,849'
    },
    {
        path: 'personal-shopper',
        image: 'assets/images/services/personal-shopper.jpeg',
        title: 'Personal Shopper',
        description: `
            <div>
                <p>*Servicio complementario al Manual de Imagen Física y Closet detox.</p>
                <p>Con este servicio tendrás un asesoramiento personalizado para encontrar en tienda las prendas y accesorios que podrían complementar tu guardarropa sin gastar dinero de más.</p>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>De acuerdo con tu presupuesto y guiándome en la lista de faltantes de tu closet detox, buscaré en tiendas online aquellas prendas y accesorios que ayuden a complementar tu guardarropa.</li>
                    <li>Te enviaré la lista de compras para que puedas pedirlos directamente a la dirección de tu preferencia.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Dependiendo de tus necesidades de vestimenta y presupuesto crearé una ruta de tiendas con 4 opciones diferentes para hacer la búsqueda de tus prendas faltantes.</li>
                    <li>Nos reuniremos durante aprox. 2-3 horas para encontrar las prendas y que te las puedas probar.</li>
                </ol>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$1,839',
        pricePresencial: '$2,159'
    },
    {
        path: 'advice-per-event',
        image: 'assets/images/services/advice-per-event.jpeg',
        title: 'Asesoría por evento',
        description: `
            <div>
                <p>*Servicio complementario al Manual de Imagen Física.</p>
                <p>Con este servicio podrás recibir asesoramiento de vestimenta y etiqueta del próximo evento al que vayas a asistir, ya sea como anfitrión o como invitado.</p>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>Recibirás un cuestionario con preguntas sobre tu evento.</li>
                    <li>Recibirás una lista de compras con 2 opciones diferentes de vestimenta según tus características personales y una guía sobre el protocolo adecuado según el evento y el papel que funjas en el (como anfitrión o invitado).</li>
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
        priceOnline: '$1,389',
        pricePresencial: '$1,539'
    },
    {
        path: 'verbal-and-non-verbal-image',
        image: 'assets/images/services/verbal-and-non-verbal-image.jpeg',
        title: 'Auditoría en imagen verbal y no verbal',
        description: `
            <div>
                <p>Con este servicio podrás:</p>
                <ul>
                    <li>Conocer estrategias para calmar la ansiedad al hablar en público.</li>
                    <li>Reconocer tu estilo como orador.</li>
                    <li>Armar un discurso adecuado para conectar con tu público objetivo y que este sea persuasivo.</li>
                    <li>Construir un mensaje y comunicarlo como lo deseas.</li>
                    <li>Usar los movimientos de tu cuerpo y gesticulaciones como una herramienta a tu favor.</li>
                </ul>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>Tendremos una sesión de zoom para conocerte mejor y definir tus objetivos.</li>
                    <li>Me enviarás unos videos y fotografías al correo info@cipvictoriamaro.com.mx de:</li>
                    <ul>
                        <li>Video de cuerpo completo hablando a modo de discurso sobre tu profesión.</li>
                        <li>Video de rostro hablando a modo de discurso sobre tu hobbie favorito o algún tema que te apasione.</li>
                        <li>Video caminando (se enviará ejemplo).</li>
                        <li>Fotografía sentado (se enviará ejemplo).</li>
                    </ul>
                    <li>Se enviarán las recomendaciones pertinentes y se te pedirá que se vuelvan a enviar los videos y fotografías con las correcciones.</li>
                    <li>Se tendrá una sesión de zoom de preguntas y respuestas para, de ser necesario, ajustar las recomendaciones.</li>
                </ol>
            </div>
        `,
        presencialDescription: `
            <div>
                <ol>
                    <li>Tendremos una reunión para conocerte mejor y definir tus objetivos. En esta sesión te pediré decir un discurso sobre tu profesión y otro sobre tu hobbie favorito o tema de tu interés mientras eres grabado. Se te tomará otro video para analizar tu caminado y unas fotografías para evaluar tu postura al sentarte, gesticulaciones y ademanes.</li>
                    <li>Tendremos de dos a tres sesiones más para perfeccionar tu discurso y movimientos corporales y resolver dudas.</li>
                </ol>
            </div>
        `,
        isPrincipal: true,
        priceOnline: '$3,865',
        pricePresencial: '$4,154'
    },
    {
        path: '360-image',
        image: 'assets/images/services/360-image.jpg',
        title: 'Manual de Imagen 360',
        description: `
            <div>
                <h2>¡El servicio más completo!</h2>
                <p>Incluye:</p>
                <ul>
                    <li>Diagnóstico de estilo.</li>
                    <li>Face & body type.</li>
                    <li>Análisis de color.</li>
                </ul>
                <p>Recomendaciones personalizadas:</p>
                <ul>
                    <li>Por prenda</li>
                    <li>Combinaciones de color</li>
                    <li>Armario cápsula</li>
                    <li>Ejemplos de outfit por evento</li>
                    <li>Ejemplo de atuendo laboral</li>
                </ul>
                <p>Servicios adicionales:</p>
                <ul>
                    <li>Closet détox</li>
                    <li>Personal Shopper</li>
                    <li>Auditoría en Imagen Verbal y No Verbal</li>
                    <li>Capacitación en protocolos profesionales</li>
                </ul>
                <p><strong>Modalidad:</strong> Virtual (Vía Zoom) o presencial en San Luis Potosí.</p>
                <p>Para hombres y mujeres de cualquier edad y ocupación.</p>
            </div>
        `,
        onlineDescription: `
            <div>
                <ol>
                    <li>Responderás un cuestionario, un test psicométrico y un test de estilo para reconocer tu esencia personal y me enviaras las respuestas al correo electrónico info@cipvictoriamaro.com.mx (Duración apróx. 1 hora).</li>
                    <li>Tendremos una entrevista 1 a 1 para conocerte mejor y reafirmar tu estilo. (Duración apróx. 3-4 horas).</li>
                    <li>Con la ayuda de alguien más te pediré que te tomes unas fotografías y mediciones para determinar tu tipo de rostro, cuerpo y cromometría y me las enviarás al correo info@cipvictoriamaro.com.mx.</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 30 días.</li>
                    <li>Tendremos una videollamada para hacer tu closet détox, para esto te pediré que 1 hora antes de la cita, saques todas las prendas de tu closet (incluyendo accesorios, zapatos, bolsos, etc.) y los colocarás sobre una mesa o superficie plana.</li>
                    <li>Juntos/as clasificaremos todas tus prendas y accesorios y decidiremos que se va y que se queda.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu closet y que puedas tenerlas de una manera accesible y ordenada priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                    <li>De acuerdo a tu presupuesto y guiándome en la lista de faltantes de tu closet détox, buscaré en tiendas online aquellas prendas y accesorios que ayuden a complementar tu guardarropa.</li>
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
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 30 días.</li>
                    <li>Tendremos una sesión de apróx. 3 horas en las que clasificaremos todas tus prendas, accesorios, calzado y bolsos, para esto te pediré que saques todas tus prendas y accesorios 1 hora antes de nuestra cita.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu closet y que puedas tenerlas de una manera accesible y ordenada priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                    <li>Dependiendo de tus necesidades de vestimenta y presupuesto crearé una ruta de tiendas con 4 opciones diferentes para hacer la búsqueda de tus prendas faltantes.</li>
                    <li>Nos reuniremos aprox. 2-3 horas para encontrar las prendas y que te las puedas probar.</li>
                </ol>
            </div>
        `,
        isPrincipal: true,
        priceOnline: '$12,209',
        pricePresencial: '$17,651'
    },
    {
        path: 'pro-image',
        image: 'assets/images/services/pro-image.jpg',
        title: 'Manual de Imagen Física PRO',
        description: `
            <div>
                <h2>¡El servicio más completo!</h2>
                <p>Incluye:</p>
                <ul>
                    <li>Diagnóstico de estilo.</li>
                    <li>Face & body type.</li>
                    <li>Análisis de color.</li>
                </ul>
                <p>Recomendaciones personalizadas:</p>
                <ul>
                    <li>Por prenda</li>
                    <li>Combinaciones de color</li>
                    <li>Armario cápsula</li>
                    <li>Ejemplos de outfit por evento</li>
                    <li>Ejemplo de atuendo laboral</li>
                </ul>
                <p>Servicios adicionales:</p>
                <ul>
                    <li>Closet détox</li>
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
                    <li>Con la ayuda de alguien más te pediré que te tomes unas fotografías y mediciones para determinar tu tipo de rostro, cuerpo y cromometría y me las enviarás al correo info@cipvictoriamaro.com.mx.</li>
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 30 días.</li>
                    <li>Tendremos una videollamada para hacer tu closet détox, para esto te pediré que 1 hora antes de la cita, saques todas las prendas de tu closet (incluyendo accesorios, zapatos, bolsos, etc.) y los colocarás sobre una mesa o superficie plana.</li>
                    <li>Juntos/as clasificaremos todas tus prendas y accesorios y decidiremos que se va y que se queda.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu closet y que puedas tenerlas de una manera accesible y ordenada priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                    <li>De acuerdo a tu presupuesto y guiándome en la lista de faltantes de tu closet détox, buscaré en tiendas online aquellas prendas y accesorios que ayuden a complementar tu guardarropa.</li>
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
                    <li>Te entregaré un PDF con la información completa de análisis y diagnóstico con recomendaciones en un máximo de 30 días.</li>
                    <li>Tendremos una sesión de apróx. 3 horas en las que clasificaremos todas tus prendas, accesorios, calzado y bolsos, para esto te pediré que saques todas tus prendas y accesorios 1 hora antes de nuestra cita.</li>
                    <li>Te enseñaré un método para poder organizar las prendas que regresarán a tu closet y que puedas tenerlas de una manera accesible y ordenada priorizando el mantenimiento de tu ropa.</li>
                    <li>Te enviaré una lista con aquellas cosas que podrías adquirir para complementar.</li>
                    <li>Dependiendo de tus necesidades de vestimenta y presupuesto crearé una ruta de tiendas con 4 opciones diferentes para hacer la búsqueda de tus prendas faltantes.</li>
                    <li>Nos reuniremos aprox. 2-3 horas para encontrar las prendas y que te las puedas probar.</li>
                </ol>
                <p><strong>COSTO:</strong> Presencial: $10,967 | Online: $9,676</p>
            </div>
        `,
        isPrincipal: false,
        priceOnline: '$9,676',
        pricePresencial: '$10,967'
    }
];