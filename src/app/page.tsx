import Experience from "@/components/interfaces/experience";
import Proyects from "@/components/interfaces/proyects";
import Contact from "@/components/interfaces/contact";
import Hero from "@/components/interfaces/hero";
import Cta from "@/components/interfaces/cta";
import Bio from "@/components/interfaces/bio";

export default function Home() {
    return (
        <main className="relative flex w-full flex-col items-center justify-center gap-4">
            <Hero />
            <Experience />
            <Bio />
            <Proyects />
            <Cta />
            <Contact />
        </main>
    );
}
