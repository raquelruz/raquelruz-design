import { useInView } from "../../hooks/useInView";

export const ContactHero = () => {
    const [heroRef, isHeroVisible] = useInView({
        threshold: 0.15,
    });

    let reveal = "translate-y-8 opacity-0";
    let titleReveal = "translate-y-12 opacity-0";
    let numberReveal = "-translate-y-10 opacity-0";
    let lineReveal = "scale-x-0";

    if (isHeroVisible) {
        reveal = "translate-y-0 opacity-100";
        titleReveal = "translate-y-0 opacity-100";
        numberReveal = "translate-y-0 opacity-100";
        lineReveal = "scale-x-100";
    }

    return (
        <section
            ref={heroRef}
            className="relative overflow-hidden font-landing text-text"
        >
            <div className="relative mx-auto max-w-325 px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-36 lg:px-16">

                <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-9">
                        <div
                            className={`flex items-center gap-4 transition-all duration-700 ${reveal}`}
                        >
                            <span className="h-px w-10 bg-secondary/50" />

                            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-text-muted">
                                Contacto
                            </span>
                        </div>

                        <h1
                            className={`mt-8 font-title text-5xl font-light leading-[0.88] tracking-[-0.055em] transition-all duration-1100 ease-out md:text-8xl lg:text-[9rem] ${titleReveal}`}
                        >
                            ¿Creamos algo que
                            <br />
                            <span className="text-secondary">
                                merezca la pena?
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};