import { QuizQuestion, ProfileCategory, VocationalProfileResult } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Qué tipo de actividades disfrutas más en tus horas libres?",
    situation: "Imagina un fin de semana libre sin obligaciones académicas.",
    options: [
      {
        text: "Desarmar aparatos, armar piezas, reparar bicicletas, motos o manipular circuitos.",
        category: "tecnica_industrial"
      },
      {
        text: "Resolver desafíos matemáticos, investigar sobre minerales, volcanes, puentes o construcción.",
        category: "ingenieria_mineria"
      },
      {
        text: "Aprender sobre salud, primeros auxilios, anatomía o cómo cuidar enfermos y animales.",
        category: "salud_biologia"
      },
      {
        text: "Programar, crear sitios web, configurar redes wifi o probar nuevos programas y videojuegos.",
        category: "tecnologia_computo"
      }
    ]
  },
  {
    id: 2,
    question: "¿En cuál de estos entornos de trabajo te sentirías más motivado y productivo?",
    situation: "Piensa en el lugar donde pasarás tus jornadas laborales a futuro.",
    options: [
      {
        text: "En campamentos mineros de altura, yacimientos geológicos, obras civiles o canteras.",
        category: "ingenieria_mineria"
      },
      {
        text: "En un taller especializado de mantenimiento mecánico, planta industrial o línea de ensamblaje.",
        category: "tecnica_industrial"
      },
      {
        text: "En salas de emergencia, consultorios médicos, laboratorios clínicos o postas de salud rural.",
        category: "salud_biologia"
      },
      {
        text: "En una oficina corporativa, juzgado de justicia, entidad bancaria o embajada internacional.",
        category: "gestion_leyes"
      }
    ]
  },
  {
    id: 3,
    question: "¿Qué materia escolar o académica te ha resultado más fascinante?",
    situation: "Elige la que te generaba mayor curiosidad natural sin sentirla como una carga.",
    options: [
      {
        text: "Física y Química aplicada: Fuerzas, circuitos eléctricos, engranajes y reacciones químicas.",
        category: "tecnica_industrial"
      },
      {
        text: "Biología, Anatomía humana o Ciencias Naturales.",
        category: "salud_biologia"
      },
      {
        text: "Historia, Economía, Educación Cívica y debates de actualidad política.",
        category: "gestion_leyes"
      },
      {
        text: "Dibujo técnico, Geometría descriptiva, Arte o Diseño visual.",
        category: "diseno_artes"
      }
    ]
  },
  {
    id: 4,
    question: "Si tuvieras que solucionar un problema comunitario en el Valle del Huascarán, ¿cuál preferirías?",
    situation: "Nuestra región afronta diversos desafíos de desarrollo económico y social.",
    options: [
      {
        text: "Planificar la extracción responsable de minerales y estabilidad de relaves en las cordilleras.",
        category: "ingenieria_mineria"
      },
      {
        text: "Luchar contra la desnutrición infantil y mejorar la atención en los centros de salud de los distritos.",
        category: "salud_biologia"
      },
      {
        text: "Organizar y tecnificar cooperativas agrícolas, canales de riego y preservación de bosques nativos.",
        category: "agro_ambiental"
      },
      {
        text: "Defender legalmente a las comunidades y fiscalizar la correcta inversión del canon en obras públicas.",
        category: "gestion_leyes"
      }
    ]
  },
  {
    id: 5,
    question: "¿Cómo reaccionas ante la disciplina, el orden y las situaciones de contingencia?",
    situation: "Evalúa tu temperamento ante normas estrictas y acción táctica.",
    options: [
      {
        text: "Me apasiona la disciplina militar, el honor de portar un uniforme y la seguridad ciudadana.",
        category: "seguridad_defensa"
      },
      {
        text: "Prefiero el orden lógico del código informático y la arquitectura de servidores o redes.",
        category: "tecnologia_computo"
      },
      {
        text: "Mantengo la calma para atender a personas heridas o en crisis médica urgente.",
        category: "salud_biologia"
      },
      {
        text: "Me gusta la libertad creativa para plasmar bocetos, planos y modelos tridimensionales.",
        category: "diseno_artes"
      }
    ]
  },
  {
    id: 6,
    question: "¿Qué tipo de herramientas o instrumentos preferirías dominar profesionalmente?",
    situation: "La destreza técnica con instrumentos define gran parte del día a día laboral.",
    options: [
      {
        text: "Escáneres automotrices diésel, osciloscopios, tornos y soldadura industrial.",
        category: "tecnica_industrial"
      },
      {
        text: "Estación total topográfica, software de modelamiento geológico (Datamine/AutoCAD) y GPS minero.",
        category: "ingenieria_mineria"
      },
      {
        text: "Estetoscopios, tensiómetros, bisturís, ecógrafos o microscopios de laboratorio.",
        category: "salud_biologia"
      },
      {
        text: "Herramientas de edición digital, renderizado 3D (Revit, Photoshop, Blender) o maquetación.",
        category: "diseno_artes"
      }
    ]
  },
  {
    id: 7,
    question: "En un proyecto grupal, ¿cuál es el rol que asumes de manera natural?",
    situation: "Cuando se conforma un equipo de trabajo para un objetivo común.",
    options: [
      {
        text: "El negociador o portavoz: Convenzo al grupo, defiendo los acuerdos y administro los recursos.",
        category: "gestion_leyes"
      },
      {
        text: "El implementador tecnológico: Construyo las bases de datos, programo la plataforma o enlazo los sistemas.",
        category: "tecnologia_computo"
      },
      {
        text: "El operador práctico: Me encargo de la fabricación física, montaje de materiales y que las máquinas funcionen.",
        category: "tecnica_industrial"
      },
      {
        text: "El facilitador de bienestar: Me preocupo por la salud y estado emocional de cada miembro del equipo.",
        category: "salud_biologia"
      }
    ]
  },
  {
    id: 8,
    question: "¿Qué tipo de contenido te detienes a ver cuando navegas en internet o redes?",
    situation: "Aquellos videos o artículos que capturan tu atención espontáneamente.",
    options: [
      {
        text: "Grandes maquinarias mineras (palas gigantes, camiones CAT), explotación petrolera y túneles viales.",
        category: "ingenieria_mineria"
      },
      {
        text: "Casos médicos asombrosos, cirugías, avances en neurociencia y hábitos saludables de vida.",
        category: "salud_biologia"
      },
      {
        text: "Inteligencia artificial, ciberseguridad, lanzamientos de hardware y desarrollo de software.",
        category: "tecnologia_computo"
      },
      {
        text: "Operaciones de rescate en montaña, tácticas policiales, blindados y maniobras de las FFAA.",
        category: "seguridad_defensa"
      }
    ]
  },
  {
    id: 9,
    question: "¿Cuál de estos logros profesionales te generaría mayor satisfacción personal?",
    situation: "Imaginando tu graduación y tus primeros 5 años de trayectoria.",
    options: [
      {
        text: "Haber dominado el mantenimiento de flotas de transporte pesado y ganar un sueldo superior al promedio rápidamente.",
        category: "tecnica_industrial"
      },
      {
        text: "Salvar vidas en una sala de operaciones o diagnosticar a tiempo una enfermedad crítica.",
        category: "salud_biologia"
      },
      {
        text: "Descubrir un nuevo yacimiento minero o diseñar una infraestructura que resista terremotos.",
        category: "ingenieria_mineria"
      },
      {
        text: "Cerrar acuerdos comerciales de exportación de café y palta peruana hacia mercados internacionales.",
        category: "gestion_leyes"
      }
    ]
  },
  {
    id: 10,
    question: "¿Qué relación prefieres tener con el campo abierto y la naturaleza?",
    situation: "El Valle del Huascarán combina naturaleza, altura y actividades al aire libre.",
    options: [
      {
        text: "Gestionar cultivos agrícolas de alta productividad, crianza de animales y protección de cuencas de agua.",
        category: "agro_ambiental"
      },
      {
        text: "Explorar la cordillera en expediciones de reconocimiento geológico, muestreo de suelos y rocas.",
        category: "ingenieria_mineria"
      },
      {
        text: "Patrullar zonas de frontera, resguardar parques nacionales y participar en rescates de emergencia.",
        category: "seguridad_defensa"
      },
      {
        text: "Prefiero trabajar en interiores climatizados frente a computadoras avanzadas y servidores seguros.",
        category: "tecnologia_computo"
      }
    ]
  },
  {
    id: 11,
    question: "¿Cuál es tu perspectiva respecto al tiempo de formación y la inserción laboral?",
    situation: "Comparando la ruta técnica (3 años) con la universitaria (5 o más años).",
    options: [
      {
        text: "Quiero una carrera práctica de 3 años que me inserte de inmediato en el mercado con alta demanda salarial.",
        category: "tecnica_industrial"
      },
      {
        text: "Estoy dispuesto a estudiar 5 a 7 años intensamente para obtener un título profesional con jerarquía y especialización.",
        category: "salud_biologia"
      },
      {
        text: "Me interesa una carrera que me permita ascender en escalafón oficial del Estado con estabilidad asegurada.",
        category: "seguridad_defensa"
      },
      {
        text: "Busco una carrera tecnológica donde el aprendizaje sea continuo mediante proyectos y certificaciones.",
        category: "tecnologia_computo"
      }
    ]
  },
  {
    id: 12,
    question: "¿Cómo prefieres procesar y comunicar ideas complejas?",
    situation: "Tu forma más fluida de expresión.",
    options: [
      {
        text: "Mediante planos, dibujos, maquetas y representaciones gráficas espaciales.",
        category: "diseno_artes"
      },
      {
        text: "Con argumentos orales contundentes, artículos de opinión y debate de leyes.",
        category: "gestion_leyes"
      },
      {
        text: "Con fórmulas matemáticas, algoritmos lógicos y diagramas de flujo estructurados.",
        category: "tecnologia_computo"
      },
      {
        text: "Con diagnósticos claros, empatía personal y explicación humana para tranquilizar a la gente.",
        category: "salud_biologia"
      }
    ]
  },
  {
    id: 13,
    question: "Si te encontraras ante un motor averiado o una falla en un sistema mecánico, ¿qué harías?",
    situation: "Una máquina clave se detiene de imprevisto.",
    options: [
      {
        text: "Inspeccionar piezas, revisar bujías, inyectores, cableado y ensuciarme las manos hasta dejarlo operativo.",
        category: "tecnica_industrial"
      },
      {
        text: "Calcular el esfuerzo de fatiga de materiales y rediseñar la pieza para que no vuelva a fracturarse.",
        category: "ingenieria_mineria"
      },
      {
        text: "Conectar un software de telemetría o programar un sensor que alerte antes de que ocurra la falla.",
        category: "tecnologia_computo"
      },
      {
        text: "Evaluar el impacto en costos de la empresa y gestionar la compra de repuestos con proveedores.",
        category: "gestion_leyes"
      }
    ]
  },
  {
    id: 14,
    question: "¿Qué valor personal consideras tu mayor fortaleza?",
    situation: "El rasgo que tus amigos y familiares más reconocen en ti.",
    options: [
      {
        text: "La destreza manual y capacidad de hacer que las cosas materiales funcionen.",
        category: "tecnica_industrial"
      },
      {
        text: "La empatía, paciencia y compasión ante quienes sufren o necesitan ayuda.",
        category: "salud_biologia"
      },
      {
        text: "El rigor científico, la curiosidad de fondo y el pensamiento cuantitativo.",
        category: "ingenieria_mineria"
      },
      {
        text: "El sentido del deber patrio, la lealtad y el coraje para proteger a los demás.",
        category: "seguridad_defensa"
      }
    ]
  },
  {
    id: 15,
    question: "¿Cuál de estos testimonios de nuestros estudiantes del Colectivo resuena más contigo?",
    situation: "Escucha a tus futuros compañeros de educación superior.",
    options: [
      {
        text: "Klim Soriano (Ing. Minas UNASAM) & Wido Garay (Ing. Geológica UNI): 'Explorar los recursos de la cordillera forja el desarrollo económico del Perú'.",
        category: "ingenieria_mineria"
      },
      {
        text: "Dany Benito (Mecánica Diésel SENATI): 'En la carrera técnica aprendes haciendo; la maquinaria pesada en minas y transportes ofrece independencia económica inmediata'.",
        category: "tecnica_industrial"
      },
      {
        text: "Yomira Sena (Medicina Humana UCS) & Soledad Huaromo (Psicología UCV): 'La vocación de cuidar la vida y la salud mental es el servicio más noble que existe'.",
        category: "salud_biologia"
      },
      {
        text: "Sosimo Huerta (Negocios Internacionales UNMSM) & Milagros Garcia (Derecho UNASAM): 'Liderar empresas globales y defender la legalidad abre oportunidades para nuestra gente'.",
        category: "gestion_leyes"
      }
    ]
  }
];

export const VOCATIONAL_PROFILES: Record<ProfileCategory, VocationalProfileResult> = {
  ingenieria_mineria: {
    category: 'ingenieria_mineria',
    title: 'Ingeniería, Geología y Ciencias de la Tierra',
    headline: 'Perfil Estratégico para el Desarrollo Minero e Infraestructura del País',
    description: 'Posees una mentalidad analítica, orientada al cálculo, diseño de estructuras, comprensión de la geología y la optimización de los grandes recursos naturales que abundan en Áncash y en todo el territorio peruano.',
    skills: ['Cálculo matemático avanzado', 'Modelamiento geológico y estructural', 'Gestión ambiental y de recursos', 'Toma de decisiones en faena'],
    recommendedUniversity: {
      name: 'INGENIERÍA MINERA, METALURGIA Y PETRÓLEO / GEOLOGÍA',
      avgYoung: 'S/ 4 118',
      avgAdult: 'S/ 10 454',
      rangeYoung: 'S/ 1,729 - S/ 7,409',
      keyUniversities: ['UNASAM (Huaraz)', 'UNI (Lima)', 'UNMSM (Lima)'],
      description: 'Profesión de alto impacto estratégico. En Áncash, las principales compañías mineras (como Antamina) contratan ingenieros para planificar voladuras, túneles, geomecánica y metalurgia extractiva.'
    },
    recommendedTechnical: {
      name: 'TÉCNICO EN MINERÍA, METALURGIA Y PETRÓLEO',
      avgYoung: 'S/ 6 871',
      avgAdult: 'S/ 9 953',
      rangeYoung: 'S/ 1,892 - S/ 12,900',
      keyInstitutes: ['TECSUP', 'SENATI', 'Cetemin'],
      description: '¡La carrera técnica N° 1 mejor pagada del Perú! Con solo 3 años de formación dual, los técnicos en operaciones mineras y plantas de procesamiento alcanzan remuneraciones extraordinarias desde jóvenes.'
    },
    allyContacts: [
      { name: 'Soriano Gonzalez Klim Jhamir', career: 'Ingeniería de Minas', institution: 'UNASAM' },
      { name: 'Garay Salazar Wido Gabriel', career: 'Ingeniería Geológica', institution: 'UNI' }
    ]
  },

  tecnica_industrial: {
    category: 'tecnica_industrial',
    title: 'Mecánica Aplicada, Electricidad e Industria Pesada',
    headline: 'Maestría Operativa y Dominio de Maquinaria Industrial',
    description: 'Tu talento se manifiesta en el entendimiento de los sistemas electromecánicos, la destreza manual y la pasión por resolver fallas en motores, maquinaria pesada y plantas industriales donde el país no puede detenerse.',
    skills: ['Diagnóstico electromecánico', 'Lectura de planos industriales', 'Mantenimiento preventivo de maquinaria pesada', 'Automatización y seguridad en planta'],
    recommendedUniversity: {
      name: 'INGENIERÍA MECÁNICA / INGENIERÍA INDUSTRIAL',
      avgYoung: 'S/ 4 041',
      avgAdult: 'S/ 9 716',
      rangeYoung: 'S/ 1,740 - S/ 6,885',
      keyUniversities: ['UNI (Lima)', 'UNASAM (Huaraz)', 'UNMSM'],
      description: 'Diseño de plantas industriales, supervisión de mantenimiento de flotas a gran escala y optimización de cadenas de manufactura y distribución logística.'
    },
    recommendedTechnical: {
      name: 'MECÁNICA AUTOMOTRIZ DIÉSEL / TÉCNICO ELECTRICISTA',
      avgYoung: 'S/ 3 849',
      avgAdult: 'S/ 6 321',
      rangeYoung: 'S/ 1,848 - S/ 5,830',
      keyInstitutes: ['SENATI Huaraz / Chimbote', 'TECSUP'],
      description: 'Carreras con altísima demanda inmediata en transporte de carga interprovincial, flotas mineras y subestaciones eléctricas. Rápido retorno de inversión y posibilidad de montar taller propio.'
    },
    allyContacts: [
      { name: 'Benito Benito Dany Janynyn', career: 'Mecánica de Automotores Diésel', institution: 'SENATI' }
    ]
  },

  salud_biologia: {
    category: 'salud_biologia',
    title: 'Ciencias de la Salud y Cuidado de la Vida',
    headline: 'Vocación Humana, Ciencia Médica e Impacto Comunitario',
    description: 'Tu perfil destaca por la empatía, el rigor biológico y el compromiso ético con el bienestar físico y mental de las personas. La atención en salud es una necesidad prioritaria en cada rincón del Perú.',
    skills: ['Diagnóstico clínico', 'Atención y escucha empática', 'Primeros auxilios y bioética', 'Investigación médica continua'],
    recommendedUniversity: {
      name: 'MEDICINA HUMANA / ENFERMERÍA / PSICOLOGÍA',
      avgYoung: 'S/ 7 192',
      avgAdult: 'S/ 8 472',
      rangeYoung: 'S/ 3,205 - S/ 10,043',
      keyUniversities: ['UCS (Científica del Sur)', 'UNMSM (San Fernando)', 'UNASAM'],
      description: 'La carrera universitaria con mayor ingreso inicial formal en el Perú (S/ 7,192). Permite ejercer en hospitales del MINSA, EsSalud, clínicas privadas y realizar residencias médicas especializadas.'
    },
    recommendedTechnical: {
      name: 'ENFERMERÍA TÉCNICA / LABORATORIO CLÍNICO',
      avgYoung: 'S/ 2 315',
      avgAdult: 'S/ 3 192',
      rangeYoung: 'S/ 1,211 - S/ 3,701',
      keyInstitutes: ['Instituto de Educación Superior de Huaraz', 'Carrión', 'Arzobispo Loayza'],
      description: 'Pieza fundamental en el triaje, administración de tratamientos, toma de muestras y cuidado intensivo de pacientes en centros de salud y postas médicas de la sierra ancashina.'
    },
    allyContacts: [
      { name: 'Sena Flores Yomira Sheylet', career: 'Medicina Humana', institution: 'Científica del Sur' },
      { name: 'Huaromo Huacanca Soledad Rosalinda', career: 'Psicología', institution: 'UCV' }
    ]
  },

  tecnologia_computo: {
    category: 'tecnologia_computo',
    title: 'Ingeniería de Software, Sistemas y Computación',
    headline: 'Creador Digital para la Era de la Inteligencia Artificial',
    description: 'Tu mente razona a través de algoritmos, arquitectura de datos, conectividad y soluciones digitales capaces de ser desplegadas globalmente desde cualquier lugar con conexión a internet.',
    skills: ['Programación y bases de datos', 'Ciberseguridad y redes', 'Desarrollo web y móvil', 'Pensamiento algorítmico'],
    recommendedUniversity: {
      name: 'INGENIERÍA DE SISTEMAS Y CÓMPUTO',
      avgYoung: 'S/ 4 333',
      avgAdult: 'S/ 8 085',
      rangeYoung: 'S/ 1,700 - S/ 7,563',
      keyUniversities: ['UNI (Lima)', 'UNMSM', 'UNASAM'],
      description: 'Liderazgo en proyectos de software, arquitectura en la nube e integración de inteligencia artificial para el sector bancario, minero, gubernamental y startups tecnológicas internacionales.'
    },
    recommendedTechnical: {
      name: 'CIENCIAS DE LA COMPUTACIÓN / DESARROLLO DE SOFTWARE',
      avgYoung: 'S/ 3 272',
      avgAdult: 'S/ 4 526',
      rangeYoung: 'S/ 1,313 - S/ 6,200',
      keyInstitutes: ['SENATI', 'Cibertec', 'TECSUP'],
      description: 'Dominio de código práctico, bases de datos y soporte en redes. Excelente empleabilidad remota con posibilidad de trabajar para clientes extranjeros en dólares.'
    },
    allyContacts: [
      { name: 'Soriano Gonzalez Klim Jhamir', career: 'Ingeniería (UNASAM)', institution: 'UNASAM' }
    ]
  },

  gestion_leyes: {
    category: 'gestion_leyes',
    title: 'Derecho, Negocios Internacionales y Economía',
    headline: 'Liderazgo Jurídico, Comercial y Gestión del Estado',
    description: 'Te distingues por tu habilidad de persuasión, pensamiento crítico, comprensión de las leyes, el comercio exterior y la correcta administración de recursos públicos y privados.',
    skills: ['Argumentación legal y oratoria', 'Comercio exterior y finanzas', 'Resolución de conflictos sociales', 'Gestión de proyectos y presupuestos'],
    recommendedUniversity: {
      name: 'DERECHO Y CIENCIAS POLÍTICAS / NEGOCIOS INTERNACIONALES',
      avgYoung: 'S/ 4 169',
      avgAdult: 'S/ 8 635',
      rangeYoung: 'S/ 1,756 - S/ 6,955',
      keyUniversities: ['UNMSM (Lima)', 'UNASAM (Huaraz)', 'UCV'],
      description: 'Defensa jurídica en el Poder Judicial, asesoría a empresas mineras y corporaciones, diplomacia y dirección de políticas públicas para el desarrollo regional.'
    },
    recommendedTechnical: {
      name: 'ADMINISTRACIÓN DE EMPRESAS / NEGOCIOS INTERNACIONALES',
      avgYoung: 'S/ 2 455',
      avgAdult: 'S/ 5 231',
      rangeYoung: 'S/ 1,313 - S/ 3,783',
      keyInstitutes: ['ADEX', 'SENATI', 'Zegel IPAE'],
      description: 'Coordinación operativa de importaciones y exportaciones portuarias, logística aduanera y control administrativo de micro y medianas empresas.'
    },
    allyContacts: [
      { name: 'Huerta Mendez Sosimo Gaudencio', career: 'Negocios Internacionales', institution: 'UNMSM' },
      { name: 'Garcia Espinoza Milagros Gimena', career: 'Derecho y Ciencias Políticas', institution: 'UNASAM' }
    ]
  },

  seguridad_defensa: {
    category: 'seguridad_defensa',
    title: 'Fuerzas Armadas, Policía Nacional y Seguridad de Estado',
    headline: 'Servicio a la Patria, Disciplina Táctica y Honor Institucional',
    description: 'Te mueve un profundo sentido de vocación por el orden, la soberanía nacional, el rescate en alta montaña y la protección ciudadana con altos estándares de conducta y disciplina.',
    skills: ['Liderazgo bajo presión', 'Preparación física y táctica', 'Operaciones de rescate y auxilio', 'Ética y disciplina institucional'],
    recommendedUniversity: {
      name: 'OFICIALES DE LAS FUERZAS ARMADAS / POLICÍA NACIONAL',
      avgYoung: 'S/ 3 986',
      avgAdult: 'S/ 7 703',
      rangeYoung: 'S/ 3,413 - S/ 4,620',
      keyUniversities: ['Escuela Militar de Chorrillos', 'Escuela de Oficiales de la PNP', 'Escuela Naval'],
      description: 'Carrera militar profesional con grado universitario de Bachiller en Ciencias Militares/Policiales, vivienda, salud integral, escalafón garantizado y opción de agregadurías en el extranjero.'
    },
    recommendedTechnical: {
      name: 'SUBOFICIALES DE LA POLICÍA NACIONAL / FUERZAS ARMADAS',
      avgYoung: 'S/ 3 890',
      avgAdult: 'S/ 4 532',
      rangeYoung: 'S/ 3,413 - S/ 4,396',
      keyInstitutes: ['Escuela de Suboficiales PNP Yungay / Puente Piedra', 'CITEN', 'ETE'],
      description: 'Ingreso inmediato a la planilla del Estado con sueldo desde el primer día de egreso (S/ 3,890 promedio), seguro familiar y ascenso progresivo.'
    },
    allyContacts: [
      { name: 'Franclin Shocush', career: 'Miembro activo de las Fuerzas Armadas', institution: 'FFAA' }
    ]
  },

  diseno_artes: {
    category: 'diseno_artes',
    title: 'Arquitectura, Urbanismo y Diseño Creativo',
    headline: 'Visión Espacial, Creatividad Visual y Hábitat Humano',
    description: 'Percibes el mundo a través de las formas, la estética, la funcionalidad de los espacios y la narrativa visual, transformando ideas en proyectos tangibles que inspiran a la sociedad.',
    skills: ['Diseño y representación espacial', 'Manejo de software BIM y 3D', 'Composición estética y conceptual', 'Planificación urbana sostenible'],
    recommendedUniversity: {
      name: 'ARQUITECTURA Y URBANISMO',
      avgYoung: 'S/ 3 076',
      avgAdult: 'S/ 6 603',
      rangeYoung: 'S/ 1,303 - S/ 5,020',
      keyUniversities: ['UNI (Lima)', 'UNASAM (Huaraz)', 'UCV'],
      description: 'Creación de planos para complejos habitacionales, hoteles turísticos en la Cordillera Blanca y regeneración urbana de nuestras ciudades andinas.'
    },
    recommendedTechnical: {
      name: 'DISEÑO / EDIFICACIONES Y PLANOS',
      avgYoung: 'S/ 2 766',
      avgAdult: 'S/ 5 673',
      rangeYoung: 'S/ 1,380 - S/ 4,800',
      keyInstitutes: ['Toulouse Lautrec', 'SENCICO', 'SENATI'],
      description: 'Topografía digital, dibujo asistido por computadora (CAD/Revit) y diseño publicitario para agencias y contratistas de obras.'
    },
    allyContacts: [
      { name: 'Garay Salazar Wido Gabriel', career: 'Ingeniería Geológica / Proyectos', institution: 'UNI' }
    ]
  },

  agro_ambiental: {
    category: 'agro_ambiental',
    title: 'Ciencias Agrarias, Ecología y Medio Ambiente',
    headline: 'Soberanía Alimentaria, Gestión de Cuencas y Sostenibilidad',
    description: 'Comprendes el valor invaluable del campo, el suelo andino, los glaciares del Huascarán y la producción agrícola tecnificada que alimenta a miles de familias.',
    skills: ['Manejo integrado de cultivos', 'Tecnificación de riego en sierra', 'Conservación de recursos hídricos', 'Agroexportación de calidad'],
    recommendedUniversity: {
      name: 'AGRONEGOCIOS / ECOLOGÍA Y MEDIO AMBIENTE',
      avgYoung: 'S/ 3 421',
      avgAdult: 'S/ 7 556',
      rangeYoung: 'S/ 1,500 - S/ 6,007',
      keyUniversities: ['UNASAM (Facultad de Ciencias Agrarias)', 'Universidad Nacional Agraria La Molina (UNALM)'],
      description: 'Liderar proyectos de exportación de palta hass, arándanos y flores en el Callejón de Huaylas, además de consultorías ambientales para el cierre de minas.'
    },
    recommendedTechnical: {
      name: 'AGROPECUARIA / TÉCNICO EN INDUSTRIAS ALIMENTARIAS',
      avgYoung: 'S/ 2 421',
      avgAdult: 'S/ 3 806',
      rangeYoung: 'S/ 1,500 - S/ 3,272',
      keyInstitutes: ['SENATI', 'Institutos Superiores Tecnológicos de Áncash'],
      description: 'Control de calidad en plantas procesadoras de alimentos, crianza de animales menores y tecnificación de parcelas agrícolas familiares.'
    },
    allyContacts: [
      { name: 'Soriano Gonzalez Klim Jhamir', career: 'Ingeniería', institution: 'UNASAM' }
    ]
  }
};
