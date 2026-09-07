import woodlineCover from "../assets/images/projects/woodline/woodline-responsive.png";

export const PROJECTS = [
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
]