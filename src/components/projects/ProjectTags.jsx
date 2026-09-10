export const ProjectTags = ({ project }) => {
	const hasTechStack = project.techStack?.length > 0;

	if (!hasTechStack) return null;

	return (
		<div className="flex flex-wrap gap-2">
			{project.techStack.map((technology) => (
				<span
					key={technology}
					className="rounded-full bg-[#eee9e2] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[#756c62]"
				>
					{technology}
				</span>
			))}
		</div>
	);
};