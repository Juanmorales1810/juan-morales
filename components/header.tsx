import { Arrow, GithubIcon, LinkedIn } from "./icons";


export default function header() {
    return (
        <header
            className="flex flex-col items-center justify-center gap-10 md:justify-around w-full max-w-5xl h-[100dvh] p-4"
        >
            <div
                className="flex flex-col items-center justify-center gap-10 z-20 md:mt-52 w-full max-w-2xl h-auto md:flex-row"
            >
                <div className="w-1/2 relative md:w-1/3 group">
                    <img
                        src="/Profile.webp"
                        alt="Profile picture of the author"
                        className="relative w-full z-30 object-cover rounded-full dark:saturate-50"
                    />
                    <img
                        src="/Profile.webp"
                        alt="Profile picture of the author"
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
                            className="text-4xl font-bold bg-gradient-to-br from-violet-500 to-violet-900 bg-clip-text text-transparent dark:from-zinc-300 dark:to-zinc-400 drop-shadow-[0_0px_7px_rgba(255,255,255,0.55)] pb-4"
                        >
                            Soy Juan Morales.
                        </h1>
                        <p className="text-lg text-slate-700 dark:text-slate-100 font-bold">
                            Tengo mas de 3 años de experencia. Soy desarrollador
                            Fron-End y vivo en Argentina - San Juan. Especializado en
                            dessarrolo de web apps
                        </p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://www.linkedin.com/in/juan-exequiel-morales/"
                            target="_blank"
                            className="flex justify-center items-center gap-1 px-2 py-1 text-lg border-[1px] border-slate-600 rounded-xl text-slate-700 dark:text-slate-100 dark:border-slate-300"
                        >
                            LinkedIn
                            <LinkedIn />
                        </a>
                        <a
                            href="https://github.com/Juanmorales1810"
                            target="_blank"
                            className="flex justify-center items-center gap-1 px-2 py-1 text-lg border-[1px] border-slate-600 rounded-xl text-slate-700 dark:text-slate-100 dark:border-slate-300"
                        >
                            GitHub
                            <GithubIcon />
                        </a>
                    </div>
                </div>
            </div>

            <div className="animate-bounce animate-infinite">
                <Arrow />
            </div>
        </header>
    )
}