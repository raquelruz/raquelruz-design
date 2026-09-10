import { AboutHero } from "../components/about/AboutHero";
import { AboutStory } from "../components/about/AboutStory";
import { AboutServices } from "../components/about/AboutServices";
import { AboutTechStack } from "../components/about/AboutTechStack";
import { JourneySection } from "../components/about/JourneySection";
import { PhilosophySection } from "../components/about/PhilosophySection";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Footer } from "../components/Footer";

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

            <div>
                <Footer />
            </div>
        </main>
    );
};