    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const englishTranslations = {
      "Abrir indicaciones": "Open directions",
      "Agenda tu visita": "Book your visit",
      "Agrega una foto del servicio": "Add a service photo",
      "Algunos estudios pueden requerir indicaciones previas. Confirma cuáles aplican a tu servicio antes de realizar cambios en tu rutina o medicamentos.": "Some tests may require preparation. Confirm the instructions for your service before changing your routine or medication.",
      "Alojamiento y seguimiento clínico para observación, recuperación o atención continua bajo supervisión médica especializada.": "Inpatient care and clinical follow-up for observation, recovery, or ongoing care under the supervision of a medical professional.",
      "Anestesiología": "Anesthesiology",
      "Antes de visitarnos": "Before your visit",
      "Atención cercana, humana y profesional en Guzman Medical Center.": "Compassionate, personal, and professional care at Guzman Medical Center.",
      "Atención con calidez, confianza y profesionalismo.": "Care with compassion, trust, and professionalism.",
      "Atención de emergencia en Santiago | Guzman Medical Center": "Emergency Care in Santiago | Guzman Medical Center",
      "Atención para situaciones que requieren valoración urgente. Comunícate con el centro para confirmar disponibilidad y recibir orientación.": "Care for situations that require urgent assessment. Contact the center to confirm availability and get guidance.",
      "Atención para trastornos musculoesqueléticos y de movilidad, con evaluación profesional y orientación sobre el tratamiento más adecuado.": "Care for musculoskeletal and mobility conditions, with a professional assessment and guidance on suitable treatment options.",
      "Atención personalizada para conversar sobre tus inquietudes, evaluar síntomas y recibir orientación sobre los siguientes pasos para tu salud.": "Personalized care to discuss your concerns, assess symptoms, and guide you on next steps for your health.",
      "Atención por cita y emergencia disponible.": "Appointments and emergency care available.",
      "Atención quirúrgica de acuerdo con la valoración médica, con orientación sobre el proceso y el seguimiento.": "Surgical care based on medical assessment, with guidance on the process and follow-up.",
      "Atención quirúrgica según valoración médica, con enfoque seguro, personalizado y orientado a la recuperación del paciente.": "Surgical care based on medical assessment, with a safe, personalized approach focused on the patient's recovery.",
      "Atención quirúrgica según valoración médica, con enfoque seguro, personalizado y orientado a la recuperación y el bienestar del paciente.": "Surgical care based on medical assessment, with a safe, personalized approach focused on the patient's recovery and well-being.",
      "Brindar atención médica integral de excelencia, respaldada por un equipo altamente calificado y comprometido con la humanidad, la empatía y el servicio.": "To provide excellent, comprehensive medical care supported by a highly qualified team committed to compassion, empathy, and service.",
      "Buscar un servicio": "Find a service",
      "Cardiología": "Cardiology",
      "Carretera Jacagua #158 Buenos Aires, Santiago R.D.": "Carretera Jacagua #158, Buenos Aires, Santiago, Dominican Republic",
      "Carretera Jacagua #158, Buenos Aires, Santiago, República Dominicana.": "Carretera Jacagua #158, Buenos Aires, Santiago, Dominican Republic.",
      "Chequea tus niveles internos (colesterol, glucemia, plaquetas, triglicéridos, etc.) con pruebas clínicas de confianza y resultados orientados a tu bienestar.": "Check your levels (including cholesterol, blood glucose, platelets, and triglycerides) with reliable clinical tests and results focused on your well-being.",
      "Cirugía": "Surgery",
      "Cirugía general": "General Surgery",
      "Cirugía general en Santiago | Guzman Medical Center": "General Surgery in Santiago | Guzman Medical Center",
      "Cirugía general y laparoscopia": "General and Laparoscopic Surgery",
      "Cirugía ortopédica": "Orthopedic Surgery",
      "Cirugía ortopédica en Santiago | Guzman Medical Center": "Orthopedic Surgery in Santiago | Guzman Medical Center",
      "Comprometidos con": "Committed to",
      "Comprometidos con tu salud": "Committed to your health",
      "Comunícate con nosotros para agendar tu visita, consultar nuestros servicios o recibir orientación.": "Contact us to schedule your visit, ask about our services, or get guidance.",
      "Comunícate con nuestro equipo para recibir orientación y coordinar tu visita.": "Contact our team for guidance and to arrange your visit.",
      "Confirma disponibilidad": "Confirm availability",
      "Conoce a los especialistas": "Meet our specialists",
      "Conoce las opciones de atención disponibles. Cada servicio se brinda de acuerdo con la evaluación y las necesidades de cada paciente; contáctanos para recibir orientación y coordinar tu visita.": "Explore the care options available. Services are provided based on each patient's assessment and needs. Contact us for guidance and to arrange your visit.",
      "Conoce nuestros servicios": "Explore our services",
      "Consulta general y especializada": "General and Specialty Consultation",
      "Consulta médica en Santiago | Guzman Medical Center": "Medical Consultations in Santiago | Guzman Medical Center",
      "Consultar por WhatsApp": "Ask us on WhatsApp",
      "Contacto": "Contact",
      "Contacto y ubicación en Santiago | Guzman Medical Center": "Contact and Location in Santiago | Guzman Medical Center",
      "Continuar por WhatsApp": "Continue to WhatsApp",
      "Contáctanos": "Contact us",
      "Correo electrónico": "Email",
      "Cuidando su salud.": "Caring for your health.",
      "Cuéntanos qué necesitas y se abrirá WhatsApp con tu consulta lista para enviar.": "Tell us what you need. WhatsApp will open with your message ready to send.",
      "Cómo llegar": "How to get here",
      "Detección de CA uterino": "Uterine Cancer Screening",
      "Detección de cáncer uterino": "Uterine Cancer Screening",
      "Detección de cáncer uterino en Santiago | Guzman Medical Center": "Uterine Cancer Screening in Santiago | Guzman Medical Center",
      "Dirección": "Address",
      "Durante la prueba, el personal te explicará cómo realizar las respiraciones necesarias y seguirá las indicaciones del profesional que la solicitó. Consulta antes si debes mantener o ajustar algún medicamento; no lo cambies por cuenta propia.": "During the test, our staff will explain how to perform the required breathing maneuvers and follow the instructions from the referring professional. Ask us beforehand whether to continue any medication; do not change it on your own.",
      "El equipo valora la situación para orientar la atención necesaria. Si tienes dudas sobre disponibilidad o cómo llegar, comunícate directamente con el centro; ante una emergencia, busca atención sin demora.": "Our team assesses the situation and guides you to the care needed. Contact the center if you have questions about availability or directions. In an emergency, seek care without delay.",
      "El internamiento se considera cuando el profesional entiende que se necesita observación o atención continua. El equipo puede explicar al paciente y sus familiares el plan de atención y las indicaciones correspondientes.": "Inpatient care may be considered when a medical professional determines that observation or ongoing care is needed. The team can explain the care plan and relevant instructions to patients and their families.",
      "El profesional determina qué área necesita evaluarse de acuerdo con tu caso. Antes de acudir, confirma si el estudio requiere alguna preparación y lleva los resultados previos relacionados, si los tienes.": "A medical professional determines which area should be assessed based on your situation. Before your visit, confirm whether preparation is needed and bring any related previous results you may have.",
      "El resultado se interpreta junto con tus síntomas y antecedentes, por lo que no sustituye la valoración de un profesional. Consulta al solicitar tu cita si debes llevar una indicación médica o estudios anteriores.": "Results are interpreted alongside your symptoms and medical history and do not replace an assessment by a medical professional. When booking, ask whether to bring a referral or previous test results.",
      "El tipo de procedimiento y las indicaciones previas dependen de la evaluación médica. Antes de coordinarlo, pregunta cómo prepararte y comunica al equipo cualquier medicamento o condición relevante.": "The procedure and any preparation instructions depend on your medical assessment. Before arranging it, ask how to prepare and tell the team about any relevant medication or health conditions.",
      "El tipo de sonografía depende de la zona que indique el profesional de salud. La preparación puede cambiar según el estudio; al coordinarlo, pregunta qué debes hacer antes y si necesitas llevar una indicación médica.": "The type of sonogram depends on the area identified by your health professional. Preparation varies by test; when arranging your appointment, ask what to do beforehand and whether you need a referral.",
      "El área a estudiar se define según la indicación médica. Al coordinar el estudio, confirma si necesitas llevar una orden y comunica al personal si existe posibilidad de embarazo para que puedan orientarte.": "The area to be imaged is determined by the medical referral. When arranging your test, ask whether you need to bring an order and tell the staff if there is any possibility of pregnancy so they can guide you.",
      "Electrocardiografía": "Electrocardiography",
      "Electrocardiografía en Santiago | Guzman Medical Center": "Electrocardiography in Santiago | Guzman Medical Center",
      "Emergencia": "Emergency Care",
      "En la consulta puedes conversar sobre tus inquietudes y recibir orientación sobre los siguientes pasos. Al solicitar tu cita, indica si buscas atención general o una especialidad para que el equipo pueda orientarte.": "During your consultation, you can discuss your concerns and get guidance on next steps. When booking, let the team know whether you need general care or a specialty consultation.",
      "Endoscopia digestiva": "Digestive Endoscopy",
      "Endoscopia digestiva en Santiago | Guzman Medical Center": "Digestive Endoscopy in Santiago | Guzman Medical Center",
      "Envíanos un mensaje": "Send us a message",
      "Escríbenos o llámanos para consultar horarios, disponibilidad y coordinar una cita.": "Message or call us to ask about hours, availability, and appointments.",
      "Espacio para imagen": "Image placeholder",
      "Especialistas": "Specialists",
      "Espirometría": "Spirometry",
      "Espirometría en Santiago | Guzman Medical Center": "Spirometry in Santiago | Guzman Medical Center",
      "Estamos aquí para ayudarte.": "We are here to help.",
      "Estamos comprometidos con tu salud y en tal virtud entregamos con empeño y dedicación nuestras mejores atenciones para el beneficio de todos nuestros pacientes que nos visiten.": "We are committed to your health and dedicated to providing attentive care for the benefit of every patient who visits us.",
      "Estudios de imagen para apoyar el diagnóstico de diferentes condiciones mediante radiografías rápidas, seguras y orientadas al cuidado clínico.": "Imaging studies that support the assessment of different conditions through timely X-rays performed with patient care in mind.",
      "Estudios de imagen para evaluar distintas áreas del cuerpo. La preparación depende del tipo de estudio; consúltala al coordinar.": "Imaging studies to assess different areas of the body. Preparation depends on the type of study; ask when arranging your appointment.",
      "Estudios de imagen para evaluar órganos internos, tejidos blandos y estructuras anatómicas con apoyo diagnóstico para una atención médica segura y personalizada.": "Imaging studies to assess internal organs, soft tissues, and anatomical structures to support safe, personalized medical care.",
      "Estudios de ultrasonido para evaluar órganos internos, tejidos blandos y estructuras anatómicas con apoyo diagnóstico preciso y cercano.": "Ultrasound studies to assess internal organs, soft tissues, and anatomical structures as part of personalized diagnostic care.",
      "Estudios radiográficos indicados para apoyar la evaluación médica. Confirma los requisitos al coordinar tu estudio.": "X-ray studies may be recommended to support a medical assessment. Confirm any requirements when arranging your test.",
      "Evaluación diagnóstica del tracto digestivo para identificar molestias, cambios funcionales y condiciones que requieren atención médica especializada.": "Diagnostic assessment of the digestive tract to investigate symptoms, functional changes, and conditions that may require specialized medical care.",
      "Evaluación diagnóstica del tracto digestivo. El profesional indicará el procedimiento y las instrucciones previas necesarias.": "Diagnostic assessment of the digestive tract. A medical professional will determine the procedure and any preparation instructions.",
      "Evaluación funcional respiratoria para valorar la función pulmonar, detectar alteraciones y orientar un mejor cuidado de la salud respiratoria.": "A breathing test to assess lung function, identify possible changes, and help guide respiratory care.",
      "Evaluación por imágenes de órganos y tejidos, indicada de acuerdo con las necesidades de cada paciente.": "Imaging assessment of organs and tissues, recommended according to each patient's needs.",
      "Evaluación profesional de condiciones musculoesqueléticas y orientación sobre opciones de tratamiento.": "Professional assessment of musculoskeletal conditions and guidance on treatment options.",
      "Facebook": "Facebook",
      "Ginecología": "Gynecology",
      "Guzman Medical Center": "Guzman Medical Center",
      "Guzman Medical Center | Centro médico en Santiago, RD": "Guzman Medical Center | Medical Center in Santiago, DR",
      "Habla con un médico sobre tus malestares y previene cualquier enfermedad. Atención personalizada para evaluar tus síntomas y orientar tu salud.": "Speak with a medical professional about your concerns. Personalized care to assess your symptoms and guide your health.",
      "Horario": "Hours",
      "Humanidad y Empatía • Atención Personalizada • Excelencia Médica • Bienestar Integral • Confianza y Ética.": "Compassion and Empathy • Personalized Care • Medical Excellence • Whole-Person Well-Being • Trust and Ethics.",
      "Imagenología": "Medical Imaging",
      "Información sobre un servicio": "Information about a service",
      "Inicio": "Home",
      "Instagram": "Instagram",
      "Internamiento médico en Santiago | Guzman Medical Center": "Inpatient Care in Santiago | Guzman Medical Center",
      "Internamientos": "Inpatient Care",
      "La necesidad y el tipo de procedimiento se determinan mediante evaluación profesional. En la consulta podrás recibir orientación sobre los pasos previos, resolver dudas y conocer las indicaciones de seguimiento aplicables a tu caso.": "The need for and type of procedure are determined through a professional assessment. During your consultation, you can learn about next steps, ask questions, and receive follow-up instructions for your situation.",
      "La orientación y las pruebas recomendadas dependen de cada paciente y de su historial. Consulta con el equipo qué evaluación corresponde a tu caso, cómo prepararte y cuáles son los pasos para conocer los resultados.": "Guidance and recommended tests depend on each patient and their history. Ask the team which assessment is appropriate, how to prepare, and how you will receive the results.",
      "Laboratorio clínico": "Clinical Laboratory",
      "Laboratorio clínico en Santiago | Guzman Medical Center": "Clinical Laboratory in Santiago | Guzman Medical Center",
      "Las pruebas se realizan según la indicación y la necesidad de cada paciente. Los requisitos pueden variar: consulta antes si tu análisis requiere ayuno, una hora específica u otra preparación, y lleva la orden médica si cuentas con ella.": "Tests are performed based on each patient's needs and referral. Requirements may vary: ask whether fasting, a specific appointment time, or other preparation is needed, and bring your medical order if you have one.",
      "Limpiar": "Clear",
      "Lleva información relevante": "Bring relevant information",
      "Los requisitos dependen del servicio. Confirma los detalles con nuestro equipo antes de acudir.": "Requirements vary by service. Confirm the details with our team before your visit.",
      "Medicina interna": "Internal Medicine",
      "Medicina interna e intensiva": "Internal and Critical Care Medicine",
      "Mensaje": "Message",
      "Misión": "Mission",
      "Médico asistente": "Assistant Physician",
      "No estoy seguro/a": "I'm not sure",
      "No incluyas información médica confidencial. WhatsApp abrirá el mensaje para que puedas revisarlo y enviarlo.": "Do not include confidential medical information. WhatsApp will open the message so you can review and send it.",
      "Nombre": "Name",
      "Nuestra misión": "Our Mission",
      "Nuestra visión": "Our Vision",
      "Nuestro equipo": "Our Team",
      "Nuestro propósito es cuidar de la salud y bienestar de cada paciente con calidad, seguridad y atención responsable, ofreciendo un acompañamiento cercano, personalizado y confiable, donde la prevención y el bienestar integral son el centro de nuestra labor.": "Our purpose is to care for every patient's health and well-being through quality, safety, and responsible care. We provide trusted, personalized support with prevention and whole-person well-being at the heart of our work.",
      "Nuestros servicios": "Our Services",
      "Nuestros valores": "Our Values",
      "Nutrición": "Nutrition",
      "Observación o atención continua cuando el profesional de salud determina que es necesaria.": "Observation or ongoing care when a health professional determines it is needed.",
      "Orientación y pruebas preventivas de acuerdo con la evaluación y el historial de cada paciente.": "Guidance and preventive tests based on each patient's assessment and history.",
      "Ortopedia": "Orthopedics",
      "Otra consulta": "Other inquiry",
      "Otro": "Other",
      "Papanicolaou": "Pap Smear",
      "Papanicolaou en Santiago | Guzman Medical Center": "Pap Smear in Santiago | Guzman Medical Center",
      "Pediatría": "Pediatrics",
      "Pregunta por la preparación": "Ask about preparation",
      "Prepara tu visita": "Prepare for your visit",
      "Programas de prevención y detección temprana del cáncer uterino para apoyar la salud y el bienestar de la mujer.": "Prevention and early detection programs for uterine cancer to support women's health and well-being.",
      "Prueba de prevención para la detección oportuna de cambios cervicales y apoyo al cuidado de la salud femenina.": "A preventive test to detect cervical changes early and support women's health.",
      "Prueba funcional que ayuda a valorar la función pulmonar, con indicaciones explicadas por el personal de salud.": "A breathing test that helps assess lung function. Our health care staff will explain the instructions.",
      "Prueba preventiva para detectar cambios cervicales y apoyar el cuidado de la salud femenina.": "A preventive test to detect cervical changes and support women's health.",
      "Pruebas clínicas que apoyan la evaluación y el seguimiento de la salud. Consulta si tu análisis requiere preparación previa.": "Clinical tests that support health assessments and follow-up. Ask whether your test requires preparation.",
      "Puedes consultar por molestias relacionadas con huesos, articulaciones o movilidad. Lleva informes o estudios previos si están disponibles; el profesional te orientará sobre las opciones de manejo según tu evaluación.": "You can ask about concerns involving bones, joints, or mobility. Bring any available reports or previous test results; a medical professional will discuss options based on your assessment.",
      "Rayos X": "X-rays",
      "Rayos X en Santiago | Guzman Medical Center": "X-rays in Santiago | Guzman Medical Center",
      "Registro de la actividad eléctrica del corazón como apoyo a la valoración y seguimiento cardiovascular.": "A recording of the heart's electrical activity to support cardiovascular assessment and follow-up.",
      "Registro del ritmo y la actividad eléctrica del corazón para valoración cardiovascular, control y seguimiento clínico.": "A recording of the heart's rhythm and electrical activity for cardiovascular assessment and clinical follow-up.",
      "Se muestran los 14 servicios.": "Showing all 14 services.",
      "Selecciona una opción": "Select an option",
      "Ser un Centro de Servicios de Salud caracterizado por la atención personalizada con un equipo de profesionales altamente clasificados, atentos a tu bienestar y al de tu familia.": "To be a health care center known for personalized care from a highly qualified team dedicated to you and your family's well-being.",
      "Ser un centro médico líder a nivel nacional e internacional, destacado por la excelencia médica, la atención humana y la innovación en salud, ofreciendo una experiencia integral y confiable que mejore el bienestar de los pacientes, incluyendo un acompañamiento completo para pacientes extranjeros durante todo su proceso médico.": "To be a leading medical center nationally and internationally, recognized for medical excellence, compassionate care, and health care innovation. We aim to provide a trusted, comprehensive experience that supports patients' well-being, including international patients throughout their care journey.",
      "Servicio 24/7 para cualquier tipo de urgencia médica. Atención inmediata con apoyo profesional para situaciones que requieren valoración urgente.": "Emergency services are available 24/7. Professional support is provided for situations that require urgent assessment.",
      "Servicio de cirugía en Santiago | Guzman Medical Center": "Surgery in Santiago | Guzman Medical Center",
      "Servicio de interés": "Service of interest",
      "Servicios": "Services",
      "Servicios médicos en Santiago | Guzman Medical Center": "Medical Services in Santiago | Guzman Medical Center",
      "Servicios para cuidar de ti": "Services to care for you",
      "Si cuentas con una indicación médica o estudios previos relacionados con tu visita, llévalos para que el equipo pueda orientarte.": "If you have a medical referral or previous test results related to your visit, bring them so our team can guide you.",
      "Si tienes preguntas sobre el procedimiento o cuándo realizarlo, puedes conversarlas con el profesional antes de la prueba. Consulta al solicitar la cita si debes seguir alguna indicación previa y cómo recibirás seguimiento de los resultados.": "If you have questions about the test or when to have it, discuss them with a medical professional beforehand. When booking, ask whether you need to follow any instructions and how you will receive your results.",
      "Sobre nosotros": "About us",
      "Solicitar cita": "Request an appointment",
      "Solicitar información": "Request information",
      "Solicitar una cita": "Request an appointment",
      "Somos una Institución de Salud Fundada el 19 de Marzo del 1992 con el objetivo de juntar múltiples recursos Humanos en el área de la salud y entregar con calidad y calidez nuestras atenciones enfocada en la prevención y tratamiento de múltiples factores que inciden en la salud de nuestra población.": "We are a health care institution founded on March 19, 1992, to bring together health care professionals and provide compassionate, high-quality care focused on prevention and treatment for our community.",
      "Sonografía": "Sonography",
      "Sonografía en Santiago | Guzman Medical Center": "Sonography in Santiago | Guzman Medical Center",
      "Síguenos:": "Follow us:",
      "Tel:": "Phone:",
      "Teléfono": "Phone",
      "Teléfono de contacto": "Contact phone",
      "Ultrasonido": "Ultrasound",
      "Ultrasonido en Santiago | Guzman Medical Center": "Ultrasound in Santiago | Guzman Medical Center",
      "Urología": "Urology",
      "Valores": "Values",
      "Ver servicio": "View service",
      "Visión": "Vision",
      "Visítanos en Santiago": "Visit us in Santiago",
      "tu salud": "your health",
      "© 2017 Guzman Medical Center, Con todos los derechos reservados.": "© 2017 Guzman Medical Center. All rights reserved.",
      "¿Qué necesitas?": "What do you need?",
      "¿Tienes dudas sobre qué servicio necesitas?": "Not sure which service you need?",
      "← Volver al inicio": "← Back to home",
      "1 de 7": "1 of 7",
      "2 de 7": "2 of 7",
      "3 de 7": "3 of 7",
      "4 de 7": "4 of 7",
      "5 de 7": "5 of 7",
      "6 de 7": "6 of 7",
      "7 de 7": "7 of 7",
      "Imagen de atención de emergencia": "Emergency care image",
      "Imagen de atención ortopédica": "Orthopedic care image",
      "Imagen de equipo de laboratorio clínico": "Clinical laboratory equipment image",
      "Imagen de prevención de cáncer uterino": "Uterine cancer prevention image",
      "Imagen de un estudio de electrocardiografía": "Electrocardiography test image",
      "Imagen de un estudio de rayos X": "X-ray study image",
      "Imagen de un estudio de sonografía": "Sonography study image",
      "Imagen de un estudio de ultrasonido": "Ultrasound study image",
      "Imagen de un procedimiento de cirugía general": "General surgery procedure image",
      "Imagen de un procedimiento de endoscopia digestiva": "Digestive endoscopy procedure image",
      "Imagen de un quirófano": "Operating room image",
      "Imagen de una consulta ginecológica": "Gynecology consultation image",
      "Imagen de una consulta médica": "Medical consultation image",
      "Imagen de una habitación de internamiento": "Inpatient room image",
      "Imagen de una prueba de función pulmonar": "Lung function test image",
      "Imágenes de Guzman Medical Center": "Guzman Medical Center images",
      "Perfiles oficiales de Guzman Medical Center": "Guzman Medical Center official profiles",
      "Redes sociales": "Social media",
      "Seleccionar imagen": "Select image",
      "Mapa de Guzman Medical Center en Carretera Jacagua, Santiago": "Map of Guzman Medical Center on Carretera Jacagua, Santiago",
      "Atención médica en Guzman Medical Center": "Medical care at Guzman Medical Center",
      "Atención profesional y cercana para los pacientes": "Professional, compassionate care for patients",
      "Consulta médica personalizada": "Personalized medical consultation",
      "Instalaciones de un centro médico": "Medical center facilities",
      "Profesional de la salud brindando atención a un paciente": "Health care professional caring for a patient",
      "Profesional médico realizando una evaluación": "Medical professional performing an assessment",
      "Área de atención en un centro de salud": "Care area at a health center",
      "Ej.: laboratorio, cirugía, sonografía": "E.g., laboratory, surgery, sonography",
      "Tu nombre": "Your name",
      "Tu teléfono": "Your phone",
      "tunombre@correo.com": "yourname@email.com",
      "Escribe brevemente cómo podemos ayudarte": "Briefly describe how we can help",
      "No encontramos servicios que coincidan. Prueba con otra búsqueda.": "No matching services found. Try another search.",
      "servicio": "service",
      "servicios": "services",
      "Navegación principal": "Main navigation",
      "Guzman Medical Center, ir al inicio": "Guzman Medical Center, go to home",
      "Mary Leidy Henríquez": "Mary Leidy Henríquez",
      "Abrir menú": "Open menu",
      "Cerrar menú": "Close menu",
      "carrusel": "carousel",
      "diapositiva": "slide"
    };
    Object.assign(englishTranslations, {
      "Centro médico en Santiago, República Dominicana. Conoce nuestros servicios de salud y contacta a Guzman Medical Center para coordinar tu visita.": "Medical center in Santiago, Dominican Republic. Explore our health services and contact Guzman Medical Center to arrange your visit.",
      "Conoce el servicio de cirugía general de Guzman Medical Center en Santiago. Solicita información sobre evaluación y atención quirúrgica.": "Learn about general surgery at Guzman Medical Center in Santiago. Contact us for information about assessments and surgical care.",
      "Conoce el servicio de electrocardiografía de Guzman Medical Center en Santiago, para registro de actividad eléctrica del corazón y valoración clínica.": "Learn about electrocardiography at Guzman Medical Center in Santiago, a test that records the heart's electrical activity for clinical assessment.",
      "Conoce el servicio de espirometría en Guzman Medical Center, Santiago, una prueba funcional para valorar la función pulmonar.": "Learn about spirometry at Guzman Medical Center in Santiago, a test used to assess lung function.",
      "Conoce la atención de emergencia de Guzman Medical Center en Santiago. Comunícate para confirmar disponibilidad y recibir orientación.": "Learn about emergency care at Guzman Medical Center in Santiago. Contact us to confirm availability and get guidance.",
      "Conoce los estudios de Rayos X de Guzman Medical Center en Santiago y consulta los requisitos para coordinar tu evaluación.": "Learn about X-ray studies at Guzman Medical Center in Santiago and ask about requirements when arranging your appointment.",
      "Conoce los estudios de ultrasonido de Guzman Medical Center en Santiago y consulta qué preparación requiere el estudio indicado.": "Learn about ultrasound studies at Guzman Medical Center in Santiago and ask about preparation for your test.",
      "Consulta información sobre atención quirúrgica en Guzman Medical Center, Santiago. La necesidad y el procedimiento se determinan mediante evaluación médica.": "Learn about surgical care at Guzman Medical Center in Santiago. The need for and type of procedure are determined through a medical assessment.",
      "Consulta los servicios de laboratorio clínico de Guzman Medical Center en Santiago y pregunta si tu análisis requiere preparación previa.": "Learn about clinical laboratory services at Guzman Medical Center in Santiago and ask whether your test requires preparation.",
      "Encuentra la dirección, el teléfono, el correo y el mapa de Guzman Medical Center en Santiago, República Dominicana. Contáctanos para recibir orientación.": "Find the address, phone number, email, and map for Guzman Medical Center in Santiago, Dominican Republic. Contact us for guidance.",
      "Explora los servicios de salud de Guzman Medical Center en Santiago, República Dominicana, y encuentra información para coordinar tu atención.": "Explore health services at Guzman Medical Center in Santiago, Dominican Republic, and find information to arrange your care.",
      "Información sobre cirugía ortopédica y evaluación musculoesquelética en Guzman Medical Center, Santiago. Consulta por orientación según tu caso.": "Learn about orthopedic surgery and musculoskeletal assessments at Guzman Medical Center in Santiago. Contact us for guidance based on your situation.",
      "Información sobre estudios de sonografía en Guzman Medical Center, Santiago. Confirma la preparación necesaria al coordinar tu estudio.": "Learn about sonography studies at Guzman Medical Center in Santiago. Confirm any preparation instructions when arranging your test.",
      "Información sobre evaluación endoscópica digestiva en Guzman Medical Center, Santiago. Consulta por valoración médica e indicaciones previas.": "Learn about digestive endoscopy assessments at Guzman Medical Center in Santiago. Ask about medical evaluation and preparation instructions.",
      "Información sobre internamiento y atención continua en Guzman Medical Center, Santiago, cuando así lo determina el profesional de salud.": "Learn about inpatient and ongoing care at Guzman Medical Center in Santiago when recommended by a health professional.",
      "Infórmate sobre la prueba de Papanicolaou en Guzman Medical Center, Santiago, y consulta al equipo sobre preparación y seguimiento.": "Learn about Pap smear testing at Guzman Medical Center in Santiago and ask our team about preparation and follow-up.",
      "Infórmate sobre prevención y detección de cáncer uterino en Guzman Medical Center, Santiago. Consulta por evaluación y orientación.": "Learn about uterine cancer prevention and screening at Guzman Medical Center in Santiago. Contact us for assessment and guidance.",
      "Solicita información sobre consulta general y especializada en Guzman Medical Center, Santiago, para conversar sobre tus inquietudes de salud.": "Request information about general and specialty consultations at Guzman Medical Center in Santiago to discuss your health concerns.",
      "Mostrar imagen 1": "Show image 1",
      "Mostrar imagen 2": "Show image 2",
      "Mostrar imagen 3": "Show image 3",
      "Mostrar imagen 4": "Show image 4",
      "Mostrar imagen 5": "Show image 5",
      "Mostrar imagen 6": "Show image 6",
      "Mostrar imagen 7": "Show image 7",
      "Logo Guzman Medical Center": "Guzman Medical Center logo"
    });
    const languageStorageKey = "gmc-language";
    const originalTextNodes = [];
    const originalAttributes = [];
    const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (textWalker.nextNode()) {
      const node = textWalker.currentNode;
      if (node.nodeValue.trim() && node.parentElement && !node.parentElement.closest("script, style")) {
        originalTextNodes.push({ node, value: node.nodeValue });
      }
    }
    document.querySelectorAll("[alt], [aria-label], [aria-roledescription], [placeholder], [title], [content], [value]").forEach((element) => {
      ["alt", "aria-label", "aria-roledescription", "placeholder", "title", "content", "value"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) {
          originalAttributes.push({ element, attribute, value: element.getAttribute(attribute) });
        }
      });
    });
    const serviceRequestLinks = Array.from(
      document.querySelectorAll('a[href*="wa.me/18095766335?text="]')
    ).map((link) => {
      const requestText = new URL(link.href).searchParams.get("text");
      const match = requestText && requestText.match(
        /^Hola, quiero solicitar información sobre el servicio de (.+)\.$/
      );
      if (!match) throw new Error("Unrecognized service information link message.");
      return { link, serviceName: match[1] };
    });

    const languageButton = document.createElement("button");
    languageButton.className = "language-toggle";
    languageButton.type = "button";
    if (navLinks) navLinks.append(languageButton);

    const translate = (spanishText) =>
      document.documentElement.lang === "en"
        ? englishTranslations[spanishText] || spanishText
        : spanishText;
    window.gmcTranslate = translate;

    const setLanguage = (language) => {
      const isEnglish = language === "en";
      document.documentElement.lang = isEnglish ? "en" : "es";
      originalTextNodes.forEach(({ node, value }) => {
        const leadingSpace = value.match(/^\s*/)[0];
        const trailingSpace = value.match(/\s*$/)[0];
        const original = value.trim();
        const translated = isEnglish ? englishTranslations[original] || original : original;
        node.nodeValue = `${leadingSpace}${translated}${trailingSpace}`;
      });
      originalAttributes.forEach(({ element, attribute, value }) => {
        const translated = isEnglish ? englishTranslations[value] || value : value;
        element.setAttribute(attribute, translated);
      });
      serviceRequestLinks.forEach(({ link, serviceName }) => {
        const localizedService = isEnglish
          ? englishTranslations[serviceName] || serviceName
          : serviceName;
        const message = isEnglish
          ? `Hello, I would like to request information about the ${localizedService} service.`
          : `Hola, quiero solicitar información sobre el servicio de ${localizedService}.`;
        link.href = `https://wa.me/18095766335?text=${encodeURIComponent(message)}`;
      });
      const localeMeta = document.querySelector('meta[property="og:locale"]');
      if (localeMeta) localeMeta.content = isEnglish ? "en_US" : "es_DO";
      const title = document.querySelector("title");
      if (title) title.textContent = isEnglish ? englishTranslations[title.dataset.spanishTitle] || title.dataset.spanishTitle : title.dataset.spanishTitle;
      languageButton.textContent = isEnglish ? "Español" : "English";
      languageButton.setAttribute("aria-label", isEnglish ? "Switch language to Spanish" : "Cambiar idioma a inglés");
      if (menuToggle) {
        const menuIsOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-label", translate(menuIsOpen ? "Cerrar menú" : "Abrir menú"));
      }
      localStorage.setItem(languageStorageKey, isEnglish ? "en" : "es");
      document.dispatchEvent(new CustomEvent("gmc-languagechange"));
    };

    const pageTitle = document.querySelector("title");
    if (pageTitle) pageTitle.dataset.spanishTitle = pageTitle.textContent.trim();
    languageButton.addEventListener("click", () => {
      setLanguage(document.documentElement.lang === "en" ? "es" : "en");
    });
    setLanguage(localStorage.getItem(languageStorageKey) === "en" ? "en" : "es");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll([
      ".section-heading",
      ".identity-card",
      ".service-detail-grid > *",
      ".contact-grid > *",
      ".contact-item",
      ".footer-inner > *"
    ].join(", "));

    if (!reduceMotion && "IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

      revealElements.forEach((element, index) => {
        element.classList.add("reveal-on-scroll");
        element.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
        revealObserver.observe(element);
      });
      document.body.classList.add("motion-enabled");
    }

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", window.gmcTranslate(isOpen ? "Abrir menú" : "Cerrar menú"));
        navLinks.classList.toggle("is-open", !isOpen);
      });

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.setAttribute("aria-label", window.gmcTranslate("Abrir menú"));
        });
      });

      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !navLinks.classList.contains("is-open")) return;
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", window.gmcTranslate("Abrir menú"));
        menuToggle.focus();
      });
    }

    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const slides = Array.from(carousel.querySelectorAll(".hero-slide"));
      const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
      const interval = 3000;
      let timer;
      const showSlide = (index) => {
        const activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
          const isActive = slideIndex === activeIndex;
          slide.classList.toggle("is-active", isActive);
          slide.setAttribute("aria-hidden", String(!isActive));
        });
        dots.forEach((dot, dotIndex) => {
          const isActive = dotIndex === activeIndex;
          dot.classList.toggle("is-active", isActive);
          if (isActive) dot.setAttribute("aria-current", "true");
          else dot.removeAttribute("aria-current");
        });
      };
      const stopAutoplay = () => {
        window.clearInterval(timer);
        timer = undefined;
      };
      const startAutoplay = () => {
        if (timer || document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        timer = window.setInterval(() => {
          const activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
          showSlide(activeIndex + 1);
        }, interval);
      };
      const showManually = (index) => {
        showSlide(index);
        stopAutoplay();
        startAutoplay();
      };

      dots.forEach((dot, index) => dot.addEventListener("click", () => showManually(index)));
      carousel.addEventListener("mouseenter", stopAutoplay);
      carousel.addEventListener("mouseleave", startAutoplay);
      carousel.addEventListener("focusin", stopAutoplay);
      carousel.addEventListener("focusout", (event) => {
        if (!carousel.contains(event.relatedTarget)) startAutoplay();
      });
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stopAutoplay();
        else startAutoplay();
      });
      startAutoplay();
    });

    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const isEnglish = document.documentElement.lang === "en";
        const message = encodeURIComponent(
          isEnglish
            ? `Hello, I would like to contact Guzman Medical Center.\n\nName: ${form.get("nombre")}\nPhone: ${form.get("telefono") || "Not provided"}\nEmail: ${form.get("correo")}\nReason: ${form.get("motivo")}\nService of interest: ${form.get("servicio")}\n\nMessage:\n${form.get("mensaje")}`
            : `Hola, quiero comunicarme con Guzman Medical Center.\n\nNombre: ${form.get("nombre")}\nTeléfono: ${form.get("telefono") || "No indicado"}\nCorreo: ${form.get("correo")}\nMotivo: ${form.get("motivo")}\nServicio de interés: ${form.get("servicio")}\n\nMensaje:\n${form.get("mensaje")}`
        );
        window.location.href = `https://wa.me/18095766335?text=${message}`;
      });
    }

    const serviceSearch = document.querySelector("#service-search");
    const serviceSearchClear = document.querySelector("#service-search-clear");
    const serviceSearchStatus = document.querySelector("#service-search-status");
    const serviceCards = Array.from(document.querySelectorAll("#services-list .service-card"));
    if (serviceSearch && serviceSearchClear && serviceSearchStatus && serviceCards.length) {
      const normalizeText = (text) => text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("es")
        .trim();

      const getEditDistance = (left, right) => {
        const distances = Array.from(
          { length: left.length + 1 },
          () => Array(right.length + 1).fill(0)
        );
        for (let row = 0; row <= left.length; row += 1) distances[row][0] = row;
        for (let column = 0; column <= right.length; column += 1) distances[0][column] = column;

        for (let row = 1; row <= left.length; row += 1) {
          for (let column = 1; column <= right.length; column += 1) {
            const substitutionCost = left[row - 1] === right[column - 1] ? 0 : 1;
            distances[row][column] = Math.min(
              distances[row - 1][column] + 1,
              distances[row][column - 1] + 1,
              distances[row - 1][column - 1] + substitutionCost
            );
            if (
              row > 1 &&
              column > 1 &&
              left[row - 1] === right[column - 2] &&
              left[row - 2] === right[column - 1]
            ) {
              distances[row][column] = Math.min(
                distances[row][column],
                distances[row - 2][column - 2] + 1
              );
            }
          }
        }

        return distances[left.length][right.length];
      };

      const matchesSearchToken = (token, text, words) => {
        if (text.includes(token) || words.some((word) => word.includes(token))) return true;
        if (token.length < 4) return false;

        const allowedDistance = token.length >= 9 ? 2 : 1;
        return words.some((word) =>
          Math.abs(word.length - token.length) <= allowedDistance &&
          getEditDistance(token, word) <= allowedDistance
        );
      };

      const filterServices = () => {
        const query = normalizeText(serviceSearch.value);
        const queryTokens = query.split(/\s+/).filter(Boolean);
        let visibleCount = 0;
        serviceCards.forEach((card) => {
          const cardText = normalizeText(card.textContent || "");
          const cardWords = cardText.split(/[^a-z0-9]+/).filter(Boolean);
          const matches = queryTokens.every((token) =>
            matchesSearchToken(token, cardText, cardWords)
          );
          card.hidden = !matches;
          if (matches) visibleCount += 1;
        });

        serviceSearchClear.disabled = serviceSearch.value.length === 0;
        const isEnglish = document.documentElement.lang === "en";
        serviceSearchStatus.textContent = visibleCount === 0
          ? isEnglish
            ? "No matching services found. Try another search."
            : "No encontramos servicios que coincidan. Prueba con otra búsqueda."
          : isEnglish
            ? `Showing ${visibleCount} ${visibleCount === 1 ? "service" : "services"}.`
            : `Se muestran ${visibleCount} ${visibleCount === 1 ? "servicio" : "servicios"}.`;
      };

      serviceSearch.addEventListener("input", filterServices);
      document.addEventListener("gmc-languagechange", filterServices);
      serviceSearchClear.addEventListener("click", () => {
        serviceSearch.value = "";
        filterServices();
        serviceSearch.focus();
      });
    }

    const year = document.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();
