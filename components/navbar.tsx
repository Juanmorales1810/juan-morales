
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "./theme-switch";

export default function Navbar() {
    return (
        <nav className="sticky top-8 flex rounded-full overflow-hidden bg-violet-300 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50 h-12 text-sm pl-0 group z-50">
            <div className="nav__content grid">
                <Link href="/" className="w-12 grid place-items-center text-zinc-950 dark:text-zinc-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clipRule="evenodd" />
                    </svg>
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
                    <span><span>Let's&nbsp;</span>Work</span>
                    <svg className="w-4 h-4 stroke-[3px] rotate-90 [rotate:calc(var(--intent,0)*360deg)] [transition:rotate_var(--transition)] group-hover:[--intent:1] group-focus-visible:[--intent:1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>
        </nav>
    )
}
