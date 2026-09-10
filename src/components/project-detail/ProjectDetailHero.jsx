import { Link } from "react-router-dom";

import { HiArrowLeft, HiArrowDown } from "react-icons/hi2";

import { useInView } from "../../hooks/useInView";

const TYPE_LABELS = {
    development: "Desarrollo",
    design: "Diseño",
    practice: "Práctica",
};

export const ProjectDetailHero = ({ project, projectIndex }) => {
    const { title, subtitle, year, type } = project;

    const typeLabel = TYPE_LABELS[type] || type;
    const projectNumber = String(projectIndex + 1).padStart(2, "0");

    const [heroRef, isHeroVisible] = useInView({
        threshold: 0.1,
    });

    let reveal = "opacity-0";

    if (isHeroVisible) {
        reveal = "opacity-100";
    }

    let titleReveal = "translate-y-[110%]";

    if (isHeroVisible) {
        titleReveal = "translate-y-0";
    }

    return (
        <section className="relative min-h-[92vh] overflow-hidden text-[#292725]">
            <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 lg:px-16">
                <Link
                    to="/projects"
                    className="group flex items-center gap-3"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#292725]/15 transition-all duration-300 group-hover:-translate-x-1 group-hover:border-[#292725]/40 group-hover:bg-[#292725] group-hover:text-white">
                        <HiArrowLeft size={13} />
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#292725]/50 transition-colors duration-300 group-hover:text-[#292725]">
                        Volver a proyectos
                    </span>
                </Link>

                <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em]">
                    <span className="text-[#292725]/30">
                        Proyecto
                    </span>

                    <span className="text-[#292725]/15">/</span>

                    <span className="text-secondary">
                        {projectNumber}
                    </span>
                </div>
            </header>

            <div
                ref={heroRef}
                className="relative z-10 mx-auto flex min-h-[82vh] max-w-375 flex-col justify-center px-6 pb-20 pt-20 md:px-10 lg:px-16"
            >
                <div
                    className={`mb-10 flex items-center gap-4 transition-opacity delay-100 duration-700 ${reveal}`}
                >
                    <span className="h-px w-16 bg-secondary" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
                        {typeLabel}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#292725]/20" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#292725]/40">
                        {year}
                    </span>
                </div>

                <div className="relative overflow-hidden">
                    <h1
                        className={`font-title text-[clamp(4.5rem,11vw,11rem)] font-light leading-[0.78] tracking-[-0.065em] transition-transform duration-1200 ease-[cubic-bezier(0.77,0,0.18,1)] ${titleReveal}`}
                    >
                        {title}
                    </h1>
                </div>

                <div className="grid gap-10 md:mt-20 md:grid-cols-12 md:gap-6">
                    <div
                        className={`md:col-span-6  transition-all delay-500 duration-1000 ${
                            isHeroVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        <p className="font-title text-xl font-light leading-normal text-[#292725]/65 md:text-2xl">
                            {subtitle}
                        </p>
                    </div>

                    <div
                        className={`md:col-span-4 md:col-start-9 transition-all delay-700 duration-1000 ${
                            isHeroVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        <div className="border-t border-[#292725]/15 pt-4">
                            <div className="flex items-start justify-between">
                                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#292725]/35">
                                    Proyecto
                                </span>

                                <span className="font-title text-5xl font-light leading-none text-[#292725]/80">
                                    {projectNumber}
                                </span>
                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-[#292725]/10 pt-4">
                                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#292725]/35">
                                    Categoría
                                </span>

                                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#292725]/60">
                                    {typeLabel}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`absolute bottom-8 left-6 flex items-center gap-3 transition-opacity delay-900 duration-700 md:left-10 lg:left-16 ${
                        isHeroVisible
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                >
                    <HiArrowDown
                        size={13}
                        className="animate-bounce text-secondary"
                    />

                    <span className="font-mono text-md uppercase tracking-[0.2em] text-[#292725]/35">
                        Explorar proyecto
                    </span>
                </div>
            </div>

            <div
                className={`pointer-events-none absolute -bottom-16 -right-4 select-none font-title text-[clamp(18rem,32vw,32rem)] font-light leading-none -tracking-widest text-[#292725]/[0.035] transition-all duration-1800 ease-out ${
                    isHeroVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-20 opacity-0"
                }`}
            >
                {projectNumber}
            </div>

            <div className="absolute bottom-0 left-0 h-px w-full bg-[#292725]/10">
                <div
                    className={`h-full bg-secondary transition-all delay-500 duration-1500 ${
                        isHeroVisible
                            ? "w-[22%]"
                            : "w-0"
                    }`}
                />
            </div>
        </section>
    );
};