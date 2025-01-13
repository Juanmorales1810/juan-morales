import { AuroraBackground } from '../aurora-background'
import { GithubIcon, LinkedIn } from '../icons'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
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
                            <Button variant="shadow" as={Link} href="https://www.linkedin.com/in/juan-exequiel-morales/" color="secondary" endContent={<LinkedIn />}>
                                LinkedIn
                            </Button>
                            <Button variant="shadow" as={Link} href="https://github.com/Juanmorales1810" color="secondary" endContent={<GithubIcon size={28} />}>
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </AuroraBackground>
    )
}
