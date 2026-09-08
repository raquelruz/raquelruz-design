import woodlineCover from "../assets/images/projects/woodline/woodline-responsive.png";
import nomadConnectCover from "../assets/images/projects/nomadconnect/nomadconnect-preview.png";

export const PROJECTS = [
	{
		id: "nomadconnect",
		title: "NomadConnect",
		subtitle: "Plataforma de viajes (en desarrollo)",
		year: 2026,
		type: "development",

		description:
			"Aplicación full stack de planificación y comunidad de viajes: itinerarios, tareas, notificaciones y permisos de miembros. Actualmente en fase de pruebas cerradas con un grupo reducido de testers.",

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

		description:
			"Proyecto de práctica: diseño y desarrollo de una web corporativa para una marca ficticia de muebles de diseño en madera, con foco en estructura, coherencia visual y experiencia de usuario.",

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

		assets: {
			coverImage: woodlineCover,
			thumbnail: "/images/projects/woodline/thumbnail.png",
		},
	},

	{
		id: "rotuwear",
		title: "Rotuwear",
		subtitle: "Diseño digital y contenido de marca",
		year: 2021,

		description:
			"Web y redes sociales de Rotuwear creada desde cero: diseño, arquitectura y desarrollo completos en WordPress, incluyendo el sistema de pago con Stripe. Estrategia completa en redes sociales. Imágenes de branding personalizadas.",

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
];
