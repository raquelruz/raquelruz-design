import woodlineCover from "../assets/images/projects/woodline/woodline-responsive.png";
import woodlineProducts from "../assets/images/projects/woodline/woodline-products.png";
import woodlineCheckout from "../assets/images/projects/woodline/woodline-checkout.png";
import woodlineCategories from "../assets/images/projects/woodline/woodline-categories.png";
import nomadConnectCover from "../assets/images/projects/nomadconnect/nomadconnect-preview.png";
import nomadConnectHero from "../assets/images/projects/nomadconnect/nomadconnect-hero.png";
import nomadConnectSearch from "../assets/images/projects/nomadconnect/nomadconnect-search.png";
import nomadConnectProfile from "../assets/images/projects/nomadconnect/nomadconnect-profile.png";
import bookfixCover from "../assets/images/projects/bookfix/bookfix.png";
import oficinaAR from "../assets/images/projects/oficina-ar/oficina-agente-rehab.png";

export const PROJECTS = [
	{
		id: "nomadconnect",
		title: "NomadConnect",
		subtitle: "Plataforma de viajes (en desarrollo)",
		year: 2026,
		type: "development",
		featuredHome: true,
		showInGalery: true,

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
			gallery: [nomadConnectHero, nomadConnectSearch, nomadConnectProfile],
		},
	},

	{
		id: "woodline-living",
		title: "Woodline Living",
		subtitle: "Web corporativa (práctica)",
		year: 2025,
		type: "practice",
		featuredHome: true,
		showInGalery: true,

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
		},
	},

	{
		id: "uniforme-azul",
		title: "Uniforme Azul",
		subtitle: "Plataforma de preparación de oposiciones",
		year: 2024,
		type: "development",
		featuredHome: false,
		showInGalery: false,

		description:
			"Desarrollo de una plataforma web completa para la preparación de oposiciones al acceso a la Policía Nacional, trabajando principalmente en el frontend con React y TypeScript y colaborando en la integración con un backend desarrollado con Node.js, Express.js y MongoDB. El proyecto combinaba una interfaz orientada al estudio con una arquitectura preparada para gestionar contenido, usuarios y diferentes funcionalidades de la plataforma.",

		story: [
			"Uniforme Azul fue uno de los proyectos principales en los que trabajé como Full Stack Developer en Rocket418. Se trataba de una plataforma digital enfocada en la preparación de oposiciones para el acceso a la Policía Nacional, con una aplicación web utilizada por personas que necesitaban organizar y consultar su contenido de estudio de forma online.",

			"Mi trabajo estuvo especialmente centrado en el desarrollo frontend, utilizando React, JavaScript, TypeScript, HTML y CSS para construir y mantener diferentes interfaces de la plataforma. También trabajé en la integración con APIs REST y en la comunicación entre frontend y backend, colaborando con las partes desarrolladas con Node.js, Express.js y MongoDB.",

			"Además del desarrollo de funcionalidades, participé en un flujo de trabajo colaborativo utilizando Git y GitHub, siguiendo una metodología ágil y trabajando con ramas, revisiones e integración continua. También tuve contacto con procesos de testing, CI/CD y despliegue, adquiriendo experiencia en el ciclo completo de desarrollo de una aplicación web en producción.",
		],

		objective:
			"Participar en el desarrollo y evolución de una plataforma web real, trabajando principalmente en frontend y colaborando en las distintas capas del producto para adquirir experiencia en desarrollo full stack, integración de APIs, trabajo colaborativo y despliegue.",

		services: ["Desarrollo Web", "Desarrollo Full Stack"],

		techStack: ["React", "TypeScript", "JavaScript", "Node.js", "Express.js", "MongoDB"],

		keyFeatures: [
			"Desarrollo de interfaces con React y TypeScript",
			"Integración y consumo de APIs REST",
			"Comunicación entre frontend y backend",
			"Trabajo con Node.js, Express.js y MongoDB",
			"Testing, CI/CD y despliegues",
		],

		role: "Full Stack Developer — Rocket418",

		result: "Plataforma real en producción, desarrollada dentro de un entorno profesional y utilizada como herramienta de preparación para oposiciones.",

		externalLink: "https://uniformeazul.com/",

		slug: "uniforme-azul",

		assets: {},
	},

	{
		id: "rotuwear",
		title: "Rotuwear",
		subtitle: "Diseño digital y contenido de marca",
		year: "2021 ─ 2023",
		type: "design",
		featuredHome: false,
		showInGalery: false,

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

		assets: {},
	},

	{
		id: "bookfix",
		title: "Bookfix",
		subtitle: "Biblioteca digital (práctica)",
		year: 2023,
		type: "practice",
		featuredHome: false,
		showInGalery: true,

		description:
			"Proyecto de práctica desarrollado con JavaScript para crear una biblioteca digital interactiva conectada a la API de Google Books, con búsqueda, filtros y gestión de una biblioteca personal.",

		story: [
			"Bookfix fue uno de mis primeros proyectos de práctica con JavaScript, desarrollado antes de comenzar a trabajar con React. El objetivo era construir una experiencia de biblioteca digital funcional utilizando JavaScript vanilla.",
			"La aplicación se conecta con la API de Google Books para buscar y explorar libros, mostrando información dinámica según las búsquedas y categorías seleccionadas.",
			"Además, incorpora una biblioteca personal con favoritos y libros leídos, permitiendo trabajar diferentes interacciones y estados de la interfaz sin utilizar frameworks.",
		],

		objective:
			"Practicar JavaScript construyendo una aplicación interactiva conectada a una API externa, trabajando con datos, búsquedas, filtros, eventos y actualización dinámica de la interfaz.",

		services: ["UI / UX Design", "Desarrollo Web"],

		techStack: ["JavaScript", "Google Books API", "HTML", "CSS"],

		keyFeatures: [
			"Búsqueda de libros mediante Google Books API",
			"Filtros y búsqueda avanzada",
			"Sistema de favoritos y libros leídos",
			"Biblioteca personal interactiva",
		],

		role: "Diseño y desarrollo",

		result: "Demo funcional desarrollada con JavaScript vanilla e integrada con Google Books API, como proyecto previo al aprendizaje de React.",

		externalLink: "https://bookfix.netlify.app/",

		slug: "bookfix",

		assets: {
			coverImage: bookfixCover,
			thumbnail: "/images/projects/bookfix/thumbnail.png",
		},
	},

	{
		id: "oficina-agente-rehabilitador",
		title: "Oficina Agente Rehabilitador",
		subtitle: "Web corporativa y captación de leads",
		year: 2023,
		type: "design",
		featuredHome: false,
		showInGalery: true,

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
			coverImage: oficinaAR,
			thumbnail: "/images/projects/bookfix/thumbnail.png",
		},
	},
];
