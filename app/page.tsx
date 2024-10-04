import { AuroraBackground } from "@/components/aurora-background";
import { GithubIcon, LinkedIn } from "@/components/icons";
import Experience from "@/components/experience";
import Proyects from "@/components/proyects";
import { Button } from "@nextui-org/button";
import Navbar from "@/components/navbar";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { Input, Textarea } from "@nextui-org/input";

export default function Home() {
	return (
		<section className="relative flex w-full flex-col items-center justify-center gap-4">

			<AuroraBackground>
				<header
					className="flex flex-col items-center justify-center gap-10 md:justify-around w-full max-w-5xl p-4"
				>
					<div
						className="flex flex-col items-center justify-center gap-10 z-20  w-full max-w-2xl h-auto md:flex-row"
					>
						<div className="w-1/2 relative md:w-1/3 group">
							<Image
								src="/Profile.webp"
								alt="Profile picture of the author"
								width={210}
								height={210}
								className="relative w-full z-30 object-cover rounded-full dark:saturate-50"
							/>
							<Image
								src="/Profile.webp"
								alt="Profile picture of the author"
								width={210}
								height={210}
								className="absolute z-20 top-0 left-0 blur-xl w-full object-cover rounded-full dark:saturate-50 group-hover:scale-105 group-hover:brightness-100 transition-all duration-300 ease-in-out"
							/>
						</div>
						<div className="w-full md:w-2/3">
							<div>
								<div
									className="flex text-4xl font-bold text-slate-700 dark:text-slate-200"
								>
									<p>Hola</p>
									<div
										className="animate-wiggle animate-infinite animate-ease-out animate-alternate-reverse origin-bottom-right"
									>
										👋
									</div>
								</div>
								<h1
									className="text-4xl font-bold bg-gradient-to-br from-violet-500 to-violet-900 dark:bg-gradient-to-tr dark:from-zinc-50 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent  drop-shadow-[0_0px_7px_rgba(255,255,255,0.55)] pb-4"
								>
									Soy Juan Morales.
								</h1>
								<p className="text-lg text-slate-700 dark:text-slate-100 font-semibold text-balance">
									Tengo mas de 3 años de experiencia.<br />Soy desarrollador
									Front-End y vivo en Argentina - San Juan. Especializado en
									desarrollo de web apps
								</p>
							</div>
							<div className="flex gap-4 mt-4">
								<Button variant="shadow" as={Link} href="https://www.linkedin.com/in/juan-exequiel-morales/" color="secondary" isExternal endContent={<LinkedIn />}>
									LinkedIn
								</Button>
								<Button variant="shadow" as={Link} href="https://github.com/Juanmorales1810" color="secondary" isExternal endContent={<GithubIcon size={28} />}>
									GitHub
								</Button>
							</div>
						</div>
					</div>
				</header>
			</AuroraBackground>
			<Navbar />

			<section className="flex gap-3 mt-16 px-2">
				<Experience />
			</section>
			<section className="mt-4">
				<div
					className="flex flex-col justify-center items-center group gap-4 w-full max-w-5xl md:gap-10 md:flex-row pb-6"
				>
					<div className="text-md text-black font-medium dark:text-white md:w-1/2">
						<p>
							Hola soy&nbsp;<strong className="text-violet-600 dark:text-violet-300"
							>Juan Morales&nbsp;</strong>y esta es mi biografía : Nací un 18 de Octubre de 1995 en la provincia
							de San Juan, Argentina, desde muy pequeño me llamó mucho las computadoras
							y en la adolescencia más lo que es la parte de software, desde ese momento
							me instruí en lo que es el diseño gráfico dando paso a mi curiosidad
							hacia la&nbsp;<strong className="text-violet-600 dark:text-violet-300"
							>programación de páginas web</strong>.
						</p>
						<br />
						<p>
							Ahí descubrí lo que es el html y el css, averiguando más me tope con&nbsp;
							<strong className="text-yellow-500 dark:text-yellow-400"
							>Javascript&nbsp;</strong>abriendo un nuevo mundo de posibilidades, aun sigo en la busca de conocimeito
							y trato dia a dia en aprender nuevas teconologias y el manejo de ultilidades
							para mejorar mis habilidades de desarrolador.
						</p>
					</div>
					<div className="relative transition-opacity py-2">
						<img
							src="/SobreMi.webp"
							alt="Yo en un barcito en San Juan"
							className="w-60 rounded-xl rotate-2 absolute blur-lg inset-0 z-0 opacity-0 group-hover:blur-xl group-hover:rotate-0 group-hover:opacity-100 transition-all duration-500"
						/>
						<img
							src="/SobreMi.webp"
							alt="Yo en un barcito en San Juan"
							className="w-60 rounded-xl shadow-lg rotate-2 relative z-20 group-hover:rotate-0 transition-all duration-500"
						/>
					</div>
				</div>
			</section>

			<section className="flex gap-3">
				<Proyects />
			</section>

			<section className="w-full max-w-5xl px-2">
				<div className="flex justify-center items-center w-full max-w-5xl">
					<div className="flex justify-center items-center w-1/2">
						<p>Trabajemos</p>
					</div>
					<div className="w-1/2">
						<form className="flex gap-2 flex-col justify-center items-center" action="">
							<Input type="text" size="sm" placeholder="Nombre y Apellido" />
							<Input type="email" size="sm" placeholder="Email" />
							<Textarea placeholder="Escribime un mensaje" />
							<Button className="w-28" variant="shadow" color="secondary">Enviar</Button>
						</form>
					</div>
				</div>
			</section>


		</section>
	);
}
