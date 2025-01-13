
import Experience from "@/components/interfaces/experience";
import Proyects from "@/components/interfaces/proyects";
import Contact from "@/components/interfaces/contact";
import Header from "@/components/interfaces/header";
import Bio from "@/components/interfaces/bio";
import { Button } from "@nextui-org/button";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
	return (
		<section className="relative flex w-full flex-col items-center justify-center gap-4">
			<Header />
			<Navbar />
			<Experience />
			<Bio />
			<Proyects />
			<Button as={Link} href="/portfolio" className="mt-4 w-40 h-12" color="secondary">Ver más proyectos</Button>
			<Contact />
		</section>
	);
}
