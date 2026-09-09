import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { HiCodeBracket, HiPaintBrush, HiRocketLaunch } from "react-icons/hi2";

export const technologies = [
	{
		name: "React",
		icon: FaReact,
		category: "Frontend",
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
		category: "Language",
	},
	{
		name: "Node.js",
		icon: FaNodeJs,
		category: "Backend",
	},
	{
		name: "Express",
		icon: SiExpress,
		category: "Backend",
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
		category: "Database",
	},
	{
		name: "Tailwind",
		icon: SiTailwindcss,
		category: "Styling",
	},
	{
		name: "Git",
		icon: FaGitAlt,
		category: "Tools",
	},
];

export const services = [
	{
		number: "01",
		icon: HiCodeBracket,
		title: "Desarrollo",
		description: "Construyo aplicaciones web modernas, rápidas y responsive utilizando tecnologías actuales.",
		tags: ["React", "Node.js", "TypeScript"],
	},
	{
		number: "02",
		icon: HiPaintBrush,
		title: "UI / UX",
		description: "Diseño interfaces donde la estética, la usabilidad y la personalidad trabajan juntas.",
		tags: ["UI Design", "UX", "Responsive"],
	},
	{
		number: "03",
		icon: HiRocketLaunch,
		title: "Productos digitales",
		description:
			"Transformo ideas en productos completos, desde el concepto inicial hasta una experiencia funcional.",
		tags: ["Concept", "Design", "Development"],
	},
];

export const journey = [
	{
		year: "2019",
		title: "Diseño & creatividad",
		description:
			"Comencé mi camino profesional en el mundo del diseño, trabajando con identidad visual, contenido digital y proyectos web.",
	},
	{
		year: "2023",
		title: "Descubrí el código",
		description:
			"Empecé a transformar mis diseños en experiencias reales y descubrí que programar era la herramienta que necesitaba para llevar mis ideas más lejos.",
	},
	{
		year: "2025",
		title: "Full Stack",
		description:
			"Amplié mis conocimientos hacia el backend, las APIs, las bases de datos y la arquitectura de aplicaciones completas.",
	},
	{
		year: "Ahora",
		title: "Construyendo lo que sigue",
		description:
			"Actualmente sigo creciendo como desarrolladora mientras creo productos digitales, experimento con nuevas ideas y sigo aprendiendo cada día.",
	},
];
