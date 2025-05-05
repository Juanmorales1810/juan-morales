import Experience from "@/components/interfaces/experience";
import Proyects from "@/components/interfaces/proyects";
import Contact from "@/components/interfaces/contact";
import Hero from "@/components/interfaces/hero";
import Cta from "@/components/interfaces/cta";
import Bio from "@/components/interfaces/bio";
import Experiencia from "@/components/interfaces/experiencia";

export default function Home() {
    return (
        <main className="relative flex w-full flex-col items-center justify-center gap-4">
            <Hero />
            {/* <Experiencia /> */}
            <Experience />
            <Bio />
            <Proyects />
            <Cta />
            <Contact />
        </main>
    );
}
