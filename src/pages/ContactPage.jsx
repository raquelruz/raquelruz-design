import { ContactHero } from "../components/contact/ContactHero";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactDirect } from "../components/contact/ContactDirect";

export const ContactPage = () => {
    return (
        <main className="overflow-hidden">
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactDirect />
        </main>
    );
};