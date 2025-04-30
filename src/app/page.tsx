import Experience from "@/components/interfaces/experience";
import Proyects from "@/components/interfaces/proyects";
import Contact from "@/components/interfaces/contact";
import Cta from "@/components/interfaces/cta";
import Bio from "@/components/interfaces/bio";
import {
    Navbar,
    NavbarButton,
    NavbarLogo,
    NavBody,
    NavItems,
} from "@/components/resizable-navbar";
import { ModeToggle } from "@/components/toggle-mode";
import Hero from "@/components/interfaces/hero";

export default function Home() {
    return (
        <main className="relative flex w-full flex-col items-center justify-center gap-4">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems
                        items={[
                            { name: "Inicio", link: "#" },
                            { name: "Experiencia", link: "#experience" },
                            { name: "Bio", link: "#bio" },
                            { name: "Proyectos", link: "#projects" },
                            { name: "Contacto", link: "#contact" },
                        ]}
                    />
                    <div className="flex items-center gap-4">
                        <NavbarButton variant="primary">Contacto</NavbarButton>
                        <ModeToggle />
                    </div>
                </NavBody>
            </Navbar>
            <Hero />
            <Experience />
            <Bio />
            <Proyects />
            {/* <Button as={Link} href="/portfolio" className="mt-4 w-40 h-12" color="secondary">Ver más proyectos</Button> */}
            <Cta />
            <Contact />
        </main>
    );
}
