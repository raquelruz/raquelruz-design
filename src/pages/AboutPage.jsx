import { AboutHero } from "../components/about/AboutHero";
import { AboutStory } from "../components/about/AboutStory";
import { AboutServices } from "../components/About/AboutServices";
import { AboutTechStack } from "../components/About/AboutTechStack";
import { JourneySection } from "../components/about/JourneySection";
import { PhilosophySection } from "../components/About/PhilosophySection";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const AboutPage = () => {
    const sectionRef = useScrollReveal();

    return (
        <main
            ref={sectionRef}
            className="overflow-hidden bg-[#f7f5f1] text-[#292725]"
        >
            <AboutHero />

            <AboutStory />

            <AboutServices />

            <AboutTechStack />

            <JourneySection />

            <PhilosophySection />
        </main>
    );
};