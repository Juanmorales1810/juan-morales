
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "./theme-switch";
import { DevIcon } from "./icons";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-8 flex rounded-full overflow-hidden bg-violet-300 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50 h-12 text-sm pl-0 group z-50">
            <div className="nav__content grid">
                <Link href="/" className="w-12 grid place-items-center text-zinc-950 dark:text-zinc-50">
                    <DevIcon className="stroke-zinc-800 dark:stroke-white fill-none" />
                </Link>
                <ul className="list-none flex h-full items-center p-[0_1rem] m-0">
                    {siteConfig.navItems.map((item, i) => (
                        <li key={item.label + i} id={item.label} className={`text-center h-full flex items-center justify-center [--i:${i}] w-[var(--item)] [opacity:var(--expanded)] [transition:opacity_var(--transition)_calc(0.75s+(var(--i)*0.05s))]`}>
                            <Link href={item.href} className="text-zinc-950 dark:text-zinc-50 w-full h-full grid place-items-center whitespace-nowrap">
                                {item.label}
                            </Link>
                        </li>

                    ))}
                    <li className="text-center h-full flex items-center justify-center [--i:2] w-[var(--item)] [opacity:var(--expanded)] [transition:opacity_var(--transition)_calc(0.75s+(var(--i)*0.05s))]"><ThemeSwitch /></li>
                </ul>
                <a className="cook rounded-full flex gap-[0_0.5rem] items-center bg-violet-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-50 whitespace-nowrap z-50 cursor-pointer relative p-[0_var(--gap)] before:content-none before:absolute before:right-full before:w-12 before:[aspect-ratio:1] before:[scale:calc(1-var(--expanded))1] before:[transition:scale_var(--transition)] before:[transform-origin:100%_50%]">
                    <span>Trabajemos</span>
                    <svg className="w-4 h-4 stroke-[3px] rotate-90 [rotate:calc(var(--intent,0)*450deg)] [transition:rotate_var(--transition)] group-hover:[--intent:1] group-focus-visible:[--intent:1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>
        </nav>
    )
}
