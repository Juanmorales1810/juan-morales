import React from "react";
import { WhatsAppIcon } from "../icons";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Cta() {
    return (
        <section className="py-32">
            <div className="max-w-full overflow-hidden pt-10 md:pt-16 lg:pt-20">
                <div className="container px-4 relative flex flex-col group md:px-0 md:flex-row md:space-x-12">
                    <div className="mb-[18rem] md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
                        <h3 className="mb-3 text-4xl font-semibold bg-gradient-to-br from-violet-300 via-violet-600 to-violet-200 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-50 bg-clip-text text-transparent md:mb-4 md:text-5xl lg:mb-6">
                            Desde la idea hasta el producto final
                        </h3>
                        <p className="mb-8 text-zinc-700 dark:text-zinc-300 lg:text-lg">
                            Contactame para poder hacer realidad tu idea, desde
                            el diseño hasta el producto final. No importa si es
                            una idea pequeña o grande, siempre estoy dispuesto a
                            ayudarte.
                        </p>
                        <Button asChild className="my-3 " color="secondary">
                            <a
                                href="https://wa.me/542646216944"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-sm font-medium tracking-tight text-zinc-700 dark:text-zinc-300">
                                    Hablame al WhatsApp
                                </span>
                                <span className="sr-only">WhatsApp</span>
                                <WhatsAppIcon className="fill-white" />
                            </a>
                        </Button>
                    </div>
                    <div className="absolute bottom-0 right-1/2 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full">
                        <div className="relative aspect-[8/5] h-full min-h-[16rem] w-full">
                            <div className="absolute right-0 top-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[24%] translate-y-[24%] -rotate-[30deg] justify-center overflow-clip rounded-3xl shadow-lg shadow-foreground/20 md:max-xl:-translate-x-[8%] md:max-xl:translate-y-[16%] xl:group-hover:-translate-x-[70%] xl:group-hover:translate-y-0 xl:group-hover:-rotate-12 xl:transition-transform xl:ease-in-out">
                                <Image
                                    className="rounded-3xl w-full aspect-[3/5] object-cover"
                                    src="/images/cta/image1.png"
                                    alt="cta"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="absolute right-0 top-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[16%] translate-y-[8%] -rotate-[15deg] justify-center overflow-clip rounded-3xl shadow-xl shadow-foreground/20 md:max-xl:-translate-x-[6%] md:max-xl:translate-y-[6%] xl:group-hover:-translate-x-[40%] xl:group-hover:translate-y-0 xl:group-hover:-rotate-6 xl:transition-transform xl:ease-in-out">
                                <Image
                                    className="rounded-3xl w-full aspect-[3/5] object-cover"
                                    src="/images/cta/image2.png"
                                    alt="cta"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="absolute right-0 top-0 z-40 flex aspect-[3/5] w-3/5 bg-accent items-center justify-center overflow-clip rounded-3xl shadow-2xl shadow-foreground/20">
                                <Image
                                    className="rounded-3xl aspect-[3/5] object-cover bg-right"
                                    src="/images/cta/image3.png"
                                    alt="cta"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
