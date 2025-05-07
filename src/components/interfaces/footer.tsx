import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { GithubIcon, LinkedIn } from "../icons";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="relative z-10 py-12">
            <div className="container mx-auto px-4">
                <footer>
                    <div className="grid grid-cols-4 justify-between gap-10 lg:grid-cols-6 lg:text-left">
                        <div className="col-span-4 flex w-full flex-col gap-6 lg:col-span-2">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <Link href="/">
                                    <img
                                        src="/favicon.svg"
                                        alt="logo"
                                        title="DevLogo"
                                        className="h-8"
                                    />
                                </Link>
                                <h2 className="text-xl font-semibold">
                                    Juan Morales
                                </h2>
                            </div>
                            <p className="text-muted-foreground text-balance">
                                Desarrollador Frontend con más de 3 años de
                                experiencia en el desarrollo de aplicaciones web
                                y móviles. Me apasiona crear experiencias
                                digitales únicas y funcionales.
                            </p>
                            <ul className="flex items-center space-x-6">
                                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                                    <a href="#">
                                        <Instagram className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                                    <a href="#">
                                        <Facebook className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                                    <a href="#">
                                        <GithubIcon className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                                    <a href="#">
                                        <LinkedIn className="size-6" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="col-span-2 md:col-span-1">
                            <h3 className="mb-5 font-medium">Product</h3>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Overview</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Pricing</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Marketplace</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Features</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Integrations</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Marketing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="mb-5 font-medium">Company</h3>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                <li className="font-medium hover:text-primary">
                                    <a href="#">About</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Team</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Blog</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Careers</a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-4 md:col-span-2">
                            <h3 className="mb-5 font-medium">Newsletter</h3>
                            <div className="grid gap-1.5">
                                <div className="flex w-full items-center space-x-2">
                                    <input
                                        type="email"
                                        data-slot="input"
                                        className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                                        placeholder="Email"
                                    />
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
                                        type="submit"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <p className="mt-1 text-xs font-medium text-muted-foreground">
                                By submitting, you agree to our
                                <a
                                    href="#"
                                    className="ml-1 text-primary hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </p>
                        </div> */}
                    </div>
                    <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
                        <p>
                            <span className="mr-1 font-bold text-primary">
                                Juan Morales
                            </span>
                            © All rights reserved.
                        </p>
                        <p>
                            Hecho con ❤️ por{" "}
                            <Link
                                href="https://github.com/Juanmorales1810"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary"
                            >
                                Juan Morales
                            </Link>
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
}
