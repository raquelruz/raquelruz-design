import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export const Footer = () => {
	return (
		<footer className="overflow-hidden bg-text text-background">
			<div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-14">
				{/* Bottom */}
				<div className="flex flex-col gap-8 py-7 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="font-title text-2xl font-light tracking-[-0.04em]">
							Raquel Ruiz
							<span className="text-secondary">.</span>
						</p>

						<p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-background/40">
							Full Stack Developer
						</p>
					</div>

					<div className="flex items-center gap-7">
						<a
							href="https://github.com/raquelruz"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="group flex items-center gap-2 text-background/50 transition-colors duration-300 hover:text-secondary"
						>
							<FaGithub
								size={16}
								className="transition-transform duration-300 group-hover:-translate-y-0.5"
							/>
							<span className="text-[9px] uppercase tracking-[0.18em]">GitHub</span>
						</a>

						<a
							href="https://www.linkedin.com/in/raquel-ruiz-lopez"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="group flex items-center gap-2 text-background/50 transition-colors duration-300 hover:text-secondary"
						>
							<FaLinkedin
								size={16}
								className="transition-transform duration-300 group-hover:-translate-y-0.5"
							/>
							<span className="text-[9px] uppercase tracking-[0.18em]">LinkedIn</span>
						</a>
					</div>

					<div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.18em] text-background/35">
						<span>© {new Date().getFullYear()}</span>
						<span className="h-px w-8 bg-secondary/60" />
						<span>Hecho con ♥</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
