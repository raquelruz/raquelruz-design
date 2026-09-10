import { useParams } from "react-router-dom";
import { PROJECTS } from "../data/projectsData";
import { ProjectDetailHero } from "../components/project-detail/ProjectDetailHero"
import { ProjectDetailGallery } from "../components/project-detail/ProjectDetailGallery";
import { ProjectDetailOverview } from "../components/project-detail/ProjectDetailOverview";
import { ProjectDetailStory } from "../components/project-detail/ProjectDetailStory";
import { ProjectDetailFeatures } from "../components/project-detail/ProjectDetailFeatures";
import { ProjectDetailTechStack } from "../components/project-detail/ProjectDetailTechStack";
import { ProjectDetailResult } from "../components/project-detail/ProjectDetailResult";
import { ProjectDetailNextProject } from "../components/project-detail/ProjectDetailNextProject";
import { Footer } from "../components/Footer";

export const ProjectDetailPage = () => {
    const { slug } = useParams();

    const projectIndex = PROJECTS.findIndex(
        (item) => item.slug === slug
    );

    const project = PROJECTS[projectIndex];

    return (
        <main className="overflow-hidden">
            <div className="pt-12">
                <ProjectDetailHero
                    project={project}
                    projectIndex={projectIndex}
                />
            </div>

            <ProjectDetailGallery project={project} />

            <ProjectDetailOverview project={project} />

            <ProjectDetailStory project={project} />

            <ProjectDetailFeatures project={project} />

            <ProjectDetailTechStack project={project} />

            <ProjectDetailResult project={project} />

            <ProjectDetailNextProject project={project} />

            <Footer />
        </main>
    );
};