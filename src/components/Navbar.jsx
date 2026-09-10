import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({
    links = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/services" },
        { name: "Proyectos", href: "/projects" },
        { name: "Sobre mí", href: "/about" },
        { name: "Contacto", href: "/contact" },
    ],
    logoText = "RaquelRuz Design",
    logoIcon = "RRD",
    onLinkClick,
    className = "",
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleLinkClick = (linkName, href) => {
        closeMobileMenu();

        if (onLinkClick) {
            onLinkClick(linkName, href);
        }
    };

    const middleIndex = Math.ceil(links.length / 2);

    const leftLinks = links.slice(0, middleIndex);
    const rightLinks = links.slice(middleIndex);

    return (
        <nav
            className={`relative z-50 flex w-full justify-center px-4 pt-5 font-landing ${className}`}
        >
            <div className="relative w-full max-w-5xl">
                <div className="flex min-h-16 items-center justify-between gap-4 rounded-full bg-background px-4 py-2 shadow-lg md:px-6">

                    <div className="hidden flex-1 items-center justify-end gap-2 md:flex">
                        {leftLinks.map((link) => {
                            const isActive =
                                location.pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() =>
                                        handleLinkClick(
                                            link.name,
                                            link.href
                                        )
                                    }
                                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                                        isActive
                                            ? "bg-secondary text-white"
                                            : "text-text hover:text-secondary"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className="flex shrink-0 items-center gap-2 px-2 md:px-4"
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                            {logoIcon}
                        </div>

                        <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-text md:text-base">
                            {logoText}
                        </span>
                    </Link>

                    <div className="hidden flex-1 items-center justify-start gap-2 md:flex">
                        {rightLinks.map((link) => {
                            const isActive =
                                location.pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() =>
                                        handleLinkClick(
                                            link.name,
                                            link.href
                                        )
                                    }
                                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                                        isActive
                                            ? "bg-secondary text-white"
                                            : "text-text hover:text-secondary"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-text transition hover:bg-secondary/10 md:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isMobileMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="absolute left-0 right-0 top-19 rounded-3xl bg-background p-4 shadow-xl md:hidden">
                        <div className="flex flex-col gap-1">
                            {links.map((link) => {
                                const isActive =
                                    location.pathname === link.href;

                                return (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        onClick={() =>
                                            handleLinkClick(
                                                link.name,
                                                link.href
                                            )
                                        }
                                        className={`block rounded-2xl px-5 py-3 text-sm transition ${
                                            isActive
                                                ? "bg-secondary text-white"
                                                : "text-text hover:bg-secondary/10 hover:text-secondary"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};