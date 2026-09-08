import woodlineCover from "../assets/images/projects/woodline/woodline-responsive.png";
import nomadConnectCover from "../assets/images/projects/nomadconnect/nomadconnect-preview.png";

export const PROJECTS = [
	{
		id: "nomadconnect",
		title: "NomadConnect",
		subtitle: "Plataforma de viajes (en desarrollo)",
		year: 2026,
		type: "development",
		featuredHome: true,

		description:
			"Aplicación full stack de planificación y comunidad de viajes: itinerarios, tareas, notificaciones y permisos de miembros. Actualmente en fase de pruebas cerradas con un grupo reducido de testers.",

		story: [
			"NomadConnect nace de la idea de construir en solitario un producto completo — frontend, backend y autenticación — aplicando buenas prácticas de arquitectura y seguridad de principio a fin.",
			"La app cubre todo el ciclo de planificación de un viaje: itinerarios y actividades, tareas compartidas entre el grupo, notificaciones y likes, y un sistema de permisos por miembro que decide quién puede ver o editar cada viaje. La autenticación se gestiona con JWT.",
			"El proyecto está actualmente en pruebas cerradas con un grupo reducido de testers, con la versión v0.1.0 ya publicada e incluyendo el sistema de bloqueo de usuarios y permisos de viaje.",
		],

		objective:
			"Construir en solitario un producto completo (frontend + backend + auth) aplicando buenas prácticas de arquitectura y seguridad.",

		services: ["UI / UX Design", "Desarrollo Web"],

		techStack: ["React", "Node.js", "Express", "MongoDB"],

		keyFeatures: [
			"Planificador de itinerarios y actividades",
			"Sistema de notificaciones y likes",
			"Permisos por miembro de viaje",
			"Autenticación con JWT",
		],

		role: "Diseño y desarrollo full stack",

		result: "En pruebas cerradas — v0.1.0 publicada con sistema de bloqueo de usuarios y permisos de viaje.",

		externalLink: "https://mynomadconnect.vercel.app/",

		slug: "nomadconnect",

		assets: {
			coverImage: nomadConnectCover,
			thumbnail: "/images/projects/nomadconnect/nomadconnect-preview.png",
		},
	},

	{
		id: "woodline-living",
		title: "Woodline Living",
		subtitle: "Web corporativa (práctica)",
		year: 2025,
		type: "practice",
		featuredHome: true,

		description:
			"Proyecto de práctica: diseño y desarrollo de una web corporativa para una marca ficticia de muebles de diseño en madera, con foco en estructura, coherencia visual y experiencia de usuario.",

		story: [
			"Woodline Living es un proyecto de práctica pensado para una marca ficticia de muebles de diseño en madera, con el objetivo de trabajar diseño UI, arquitectura de información y desarrollo full stack sobre funcionalidades reales, no solo una maqueta visual.",
			"Incluye un dashboard para gestionar contenido, soporte multi-idioma con i18next y una base de componentes reutilizables pensada para poder ampliar secciones sin rehacer la estructura.",
			"El resultado es una demo funcional que combina dashboard, internacionalización y TypeScript, pensada para mostrar criterio visual junto con ejecución técnica.",
		],

		objective:
			"Practicar diseño UI, arquitectura de información y desarrollo full stack con funcionalidades reales (dashboard + multi-idioma).",

		services: ["UI / UX Design", "Desarrollo Web", "Branding Digital"],

		techStack: ["React", "TypeScript", "Tailwind CSS", "i18next"],

		keyFeatures: [
			"Dashboard para gestionar contenido",
			"Multi-idioma con i18next",
			"Componentes reutilizables",
			"Base escalable para ampliar secciones",
		],

		role: "Diseño y desarrollo",

		result: "Demo funcional para mostrar criterio visual, estructura y ejecución técnica (dashboard + i18n + TypeScript).",

		externalLink: "https://woodlineliving.netlify.app/",

		slug: "woodline-living",

		assets: {
			coverImage: woodlineCover,
			thumbnail: "/images/projects/woodline/thumbnail.png",
		},
	},

	{
		id: "uniforme-azul",
		title: "Uniforme Azul",
		subtitle: "Plataforma de preparación de oposiciones",
		year: 2023,
		type: "development",
		featuredHome: true,

		description:
			"Desarrollo full stack de Uniforme Azul, una plataforma orientada a la preparación de personas opositoras para el acceso a la Policía Nacional, como parte de mi trabajo en Rocket418.",

		story: [
			"Como Full Stack Developer en Rocket418, participé en el desarrollo de Uniforme Azul, una plataforma de preparación de oposiciones para el acceso a la Policía Nacional, construida con React, Node.js y TypeScript.",
			"Me encargué principalmentedel frontend — interfaces con React, JavaScript, HTML y CSS — y colaboré con el equipo de backend, con Express.js y MongoDB, incluyendo la integración de APIs REST.",
			"Trabajé dentro de un flujo colaborativo con Git y GitHub, siguiendo metodologías ágiles, y participé en integración continua, testing y despliegues (CI/CD).",
		],

		services: ["Desarrollo Web", "Desarrollo Full Stack"],

		techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],

		keyFeatures: [
			"Interfaces frontend con React, JavaScript, HTML y CSS",
			"Backend con Express.js y MongoDB",
			"Diseño e integración de APIs REST",
			"CI/CD, testing y despliegues",
		],

		role: "Full Stack Developer — Rocket418",

		result: "Plataforma en producción.",

		externalLink: "https://uniformeazul.com/",

		slug: "uniforme-azul",

		assets: {
			coverImage: "/images/projects/uniforme-azul/cover.png",
			thumbnail: "/images/projects/uniforme-azul/thumbnail.png",
		},
	},

	{
		id: "rotuwear",
		title: "Rotuwear",
		subtitle: "Diseño digital y contenido de marca",
		year: "2021 ─ 2023",
		type: "design",
		featuredHome: false,

		description:
			"Web y redes sociales de Rotuwear creada desde cero: diseño, arquitectura y desarrollo completos en WordPress, incluyendo el sistema de pago con Stripe. Estrategia completa en redes sociales. Imágenes de branding personalizadas.",

		story: [
			"Rotuwear se construyó desde cero: diseño, arquitectura y desarrollo completos en WordPress, incluyendo la integración del sistema de pago con Stripe.",
			"El trabajo fue más allá de la web — incluyó la estrategia completa en redes sociales de la marca y las imágenes de branding personalizadas usadas en todos sus canales.",
			"La web sigue publicada y en uso a día de hoy.",
		],

		services: ["Branding Digital", "UI / UX Design"],

		techStack: ["WordPress", "Canva", "CorelDraw", "Stripe"],

		role: "Designer & Digital Creator",

		result: "Web funcional y publicada, sigue en uso a día de hoy.",

		slug: "rotuwear",

		assets: {
			coverImage: "/images/projects/rotuwear/cover.png",
			thumbnail: "/images/projects/rotuwear/thumbnail.png",
		},
	},

	{
		id: "oficina-agente-rehabilitador",
		title: "Oficina Agente Rehabilitador",
		subtitle: "Web corporativa y captación de leads",
		year: 2023,
		type: "design",
		featuredHome: false,

		description:
			"Web corporativa para Oficina Agente Rehabilitador, empresa especializada en la gestión integral de proyectos de rehabilitación de edificios con fondos europeos. Diseño y desarrollo completos en WordPress, incluyendo formularios de captación de leads para comunidades de propietarios.",

		story: [
			"Oficina Agente Rehabilitador se construyó desde cero en WordPress con Elementor, con el objetivo de comunicar con claridad un servicio técnico y burocrático — la gestión de subvenciones y fondos europeos para rehabilitación de edificios — a un público no especializado: comunidades de propietarios y administradores de fincas.",
			"La web incluye páginas de servicios, subvenciones y preguntas frecuentes, además de varios formularios de contacto (WPForms) pensados para captar leads segmentados: comunidades de propietarios interesadas en subvenciones, arquitectos que quieran colaborar, y clientes ya en gestión.",
		],

		services: ["Diseño Web", "UI / UX Design"],

		techStack: ["WordPress", "Elementor", "WPForms"],

		role: "Designer & Digital Creator",

		result: "Web funcional y publicada, sigue en uso a día de hoy.",

		externalLink: "https://oficinaagenterehabilitador.es/",

		slug: "oficina-agente-rehabilitador",

		assets: {
			coverImage: "/images/projects/oficina-agente-rehabilitador/cover.png",
			thumbnail: "/images/projects/oficina-agente-rehabilitador/thumbnail.png",
		},
	},
];
