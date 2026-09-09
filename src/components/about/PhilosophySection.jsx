import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const PhilosophySection = () => {
    return (
        <section className="bg-[#292725] px-6 py-24 text-white md:px-10 md:py-32 lg:px-16 lg:py-40">
            <div className="mx-auto max-w-7xl">
                <div
                    data-reveal
                    className="reveal flex items-center gap-4"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                        05
                    </span>

                    <span className="h-px w-8 bg-white/15" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                        Mi filosofía
                    </span>
                </div>

                <div
                    data-reveal
                    className="reveal reveal-delay-100 mt-20 md:mt-28"
                >
                    <span className="font-serif text-6xl font-light leading-none text-[#B2622D] md:text-8xl">
                        “
                    </span>

                    <blockquote className="mt-4 max-w-6xl text-[clamp(3rem,7vw,7rem)] font-light leading-[0.9] tracking-[-0.055em] text-white">
                        El código hace que una idea{" "}
                        <span className="italic text-[#B2622D]">
                            funcione.
                        </span>
                        <br />
                        El diseño hace que quieras{" "}
                        <span className="italic text-[#B2622D]">
                            utilizarla.
                        </span>
                    </blockquote>
                </div>

                <div className="mt-20 border-t border-white/10 pt-8 md:mt-28">
                    <div
                        data-reveal
                        className="reveal reveal-delay-200 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
                    >
                        <div>
                            <p className="text-sm leading-relaxed text-white/40 md:text-base">
                                Me interesa crear productos que tengan sentido
                                tanto desde el punto de vista técnico como
                                desde la experiencia de quien los utiliza.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="group inline-flex w-fit items-center gap-5 text-sm text-white"
                        >
                            <span className="border-b border-white/30 pb-2 transition-colors duration-300 group-hover:border-[#B2622D]">
                                ¿Creamos algo?
                            </span>

                            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#B2622D] group-hover:bg-[#B2622D]">
                                <HiArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </span>
                        </Link>
                    </div>
                </div>

                <div
                    data-reveal
                    className="reveal reveal-delay-300 mt-24 flex items-center justify-between border-t border-white/10 pt-5"
                >
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                        Raquel Ruiz
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                        Full Stack Developer
                    </span>
                </div>
            </div>
        </section>
    );
};