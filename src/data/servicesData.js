import webDevelopmentCover from "../assets/images/services/web-development.png";
import uiUxDesign from "../assets/images/services/uiux-design.png";
import landingPage from "../assets/images/services/landing-page.png";
import branding from "../assets/images/services/branding.png";

export const SERVICES = [
	{
		title: "UI / UX Design",
		image: uiUxDesign,
		description:
			"Diseño de interfaces claras y funcionales, pensadas para que el usuario entienda, navegue y actúe sin fricción.",
		items: [
			"Arquitectura de la información",
			"Wireframes y prototipos",
			"Sistema visual y componentes",
		],
	},
	{
		title: "Desarrollo Web",
		image: webDevelopmentCover,
		description:
			"Desarrollo web a medida, con código limpio y escalable, alineado con el diseño y los objetivos del proyecto.",
		items: [
			"Web responsive",
			"Componentes reutilizables",
			"Optimización básica de rendimiento y SEO",
		],
	},
	{
		title: "Landing Pages",
		image: landingPage,
		description:
			"Páginas diseñadas para guiar al usuario a una acción concreta: contactar, registrarse o vender.",
		items: [
			"Estructura orientada a conversión",
			"Copy base y jerarquía visual",
			"CTA claro y estratégico",
		],
	},
	{
		title: "Branding Digital",
		image: branding,
		description:
			"Construcción de una identidad visual coherente que conecte tu marca en todos los puntos digitales.",
		items: [
			"Identidad visual y logotipo",
			"Paleta de colores y tipografía",
			"Aplicación en entornos digitales",
		],
	},
];