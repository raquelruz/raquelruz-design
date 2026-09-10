import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({
	links = [
		{ name: "Inicio", href: "/" },
		{ name: "Servicios", href: "/services" },
		{ name: "Proyectos", href: "/projects" },
		{ name: "Sobre mí", href: "/about" },
		{ name: "Contacto", href: "/contact" },,
	],
	logoText = "RaquelRuz Design",
	logoIcon = "RRD",
	onLinkClick,
	className = "",
}) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	const closeMobileMenu = () => setIsMobileMenuOpen(false);
	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

	const handleLinkClick = (linkName, href) => {
		closeMobileMenu();
		onLinkClick?.(linkName, href);
	};

	const middleIndex = Math.ceil(links.length / 2);
	const leftLinks = links.slice(0, middleIndex);
	const rightLinks = links.slice(middleIndex);

	return (
		<nav className={`w-full flex justify-center mt-5 font-landing ${className}`}>
			<div className="flex items-center gap-6 bg-background px-6 py-3 rounded-full shadow-lg">
				<div className="hidden md:flex gap-2">
					{leftLinks.map((link) => {
						const isActive = location.pathname === link.href;

						return (
							<Link
								key={link.href}
								to={link.href}
								onClick={() => handleLinkClick(link.name, link.href)}
								className={`px-4 py-2 text-sm rounded-full transition ${
									isActive ? "bg-secondary text-white" : "text-text hover:text-secondary"
								}`}
							>
								{link.name}
							</Link>
						);
					})}
				</div>

				{/* LOGO */}
				<Link to="/" className="flex items-center gap-2 px-4">
					<div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
						{logoIcon}
					</div>
					<span className="text-text font-semibold tracking-wide">{logoText}</span>
				</Link>

				{/* RIGHT LINKS */}
				<div className="hidden md:flex gap-2">
					{rightLinks.map((link) => {
						const isActive = location.pathname === link.href;

						return (
							<Link
								key={link.href}
								to={link.href}
								onClick={() => handleLinkClick(link.name, link.href)}
								className={`px-4 py-2 text-sm rounded-full transition ${
									isActive ? "bg-secondary text-white" : "text-text hover:text-secondary"
								}`}
							>
								{link.name}
							</Link>
						);
					})}
				</div>

				{/* MOBILE BUTTON */}
				<button onClick={toggleMobileMenu} className="md:hidden text-text" aria-label="Toggle menu">
					<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
						/>
					</svg>
				</button>
			</div>

			{/* MOBILE MENU */}
			{isMobileMenuOpen && (
				<div className="absolute top-24 bg-background rounded-2xl px-10 py-3 space-y-2 md:hidden shadow-lg">
					{links.map((link) => {
						const isActive = location.pathname === link.href;

						return (
							<Link
								key={link.href}
								to={link.href}
								onClick={() => handleLinkClick(link.name, link.href)}
								className={`block px-4 py-2 rounded-full text-sm transition ${
									isActive ? "bg-secondary text-white" : "text-text hover:text-secondary"
								}`}
							>
								{link.name}
							</Link>
						);
					})}
				</div>
			)}
		</nav>
	);
};
