import Experiencia from "@/components/interfaces/experiencia";
import Proyects from "@/components/interfaces/proyects";
import Contact from "@/components/interfaces/contact";
import Hero from "@/components/interfaces/hero";
import Cta from "@/components/interfaces/cta";
import SobreMi from "@/components/interfaces/sobre-mi";

export default function Home() {
    return (
        <main className="relative flex w-full flex-col items-center justify-center gap-4">
            <Hero />
            <Experiencia />
            <SobreMi />
            <Proyects />
            <Cta />
            <Contact />
        </main>
    );
}
