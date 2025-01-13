"use client";

import { MongoDB, Nextjs, Tailwind, TypeScript } from "../icons";
import { motion, useAnimation, Variants } from "framer-motion";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import Link from "next/link";

interface ScrollAnimationProps {
    control: any;
    startOffset: number;
    endOffset: number;
}

const useScrollAnimation = ({ control, startOffset, endOffset, }: ScrollAnimationProps) => {
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            const start = startOffset;
            const end = endOffset;

            if (scrollY >= start && scrollY <= end) {
                control.start("onscreen");
            } else {
                control.start("offscreen");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control, startOffset, endOffset]);
};

const variants: Variants = {
    initial: {
        x: "50%",
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    left: {
        x: "100%",
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    right: {
        x: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
};

const variant: Variants = {
    initial: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    offscreen: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.3,
        },
    },
};

export default function AboutScroll() {
    const [windowHeight, setWindowHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 0);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        // Escuchar el evento de cambio de tamaño
        window.addEventListener('resize', handleResize);

        // Limpiar el evento cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const control1 = useAnimation();
    const control2 = useAnimation();
    const control3 = useAnimation();
    const control4 = useAnimation();

    // Usa los hooks fuera de condicionales
    useScrollAnimation({ control: control2, startOffset: 800 + windowHeight, endOffset: 800 + windowHeight * 2 });
    useScrollAnimation({ control: control3, startOffset: 801 + windowHeight * 2, endOffset: 800 + windowHeight * 3 });
    useScrollAnimation({ control: control4, startOffset: 801 + windowHeight * 3, endOffset: (400 - (windowHeight / 6)) + windowHeight * 4 });

    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;

            if (scrollY <= 800 + windowHeight * 2) {
                control1.start("right");
            }
            if (scrollY > 801 + windowHeight * 2) {
                control1.start("left");
            }
            if (scrollY > 801 + windowHeight * 3) {
                control1.start("right");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control1, windowHeight]);

    return (
        <section className="flex flex-col w-full max-w-6xl px-4">
            <motion.div
                className="sticky lg:flex justify-center items-center top-[50%] w-1/2 h-full z-20 hidden"
                variants={variants}
                initial="right"
                animate={control1}
            >
                <motion.div
                    variants={variant}
                    initial="right"
                    animate={control2}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="proyects/resto-app.webp"
                        />
                    </figure>
                    <figure className="absolute -top-[80px] -left-[140px] w-40 h-40">
                        <Image
                            isBlurred
                            width={160}
                            alt="NextUI hero Image"
                            src="proyects/grafico1.webp"
                        />
                    </figure>
                    <figure className="absolute top-[240px] left-[300px] w-48 h-48">
                        <Image
                            isBlurred
                            width={192}
                            alt="NextUI hero Image"
                            src="proyects/grafico2.webp"
                        />
                    </figure>
                </motion.div>
                <motion.div
                    variants={variant}
                    initial="offscreen"
                    animate={control3}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="proyects/pichirika.webp"
                        />
                    </figure>
                    <figure className="absolute -top-[80px] left-[300px] w-48 h-48">
                        <Image
                            isBlurred
                            width={192}
                            alt="NextUI hero Image"
                            src="proyects/thumb-up.webp"
                        />
                    </figure>
                    <figure className="absolute top-[200px] -left-[100px] w-40 h-40">
                        <Image
                            isBlurred
                            width={160}
                            alt="NextUI hero Image"
                            src="proyects/camera.webp"
                        />
                    </figure>
                </motion.div>
                <motion.div
                    variants={variant}
                    initial="offscreen"
                    animate={control4}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="proyects/caribbean.webp"
                        />
                    </figure>
                    <figure className="absolute top-[200px] left-[300px] w-48 h-48">
                        <Image
                            isBlurred
                            width={192}
                            alt="NextUI hero Image"
                            src="proyects/next.webp"
                        />
                    </figure>
                    <figure className="absolute top-[190px] left-[120px] w-40 h-40">
                        <Image
                            isBlurred
                            width={160}
                            alt="NextUI hero Image"
                            src="proyects/play.webp"
                        />
                    </figure>
                    <figure className="absolute top-[180px] -left-[90px] w-40 h-40">
                        <Image
                            isBlurred
                            width={160}
                            alt="NextUI hero Image"
                            src="proyects/back.webp"
                        />
                    </figure>
                </motion.div>
            </motion.div>

            <div className="relative flex flex-col justify-center items-center w-full h-full min-h-[calc(100vh-116px)] lg:flex-row">
                <div className="flex justify-center items-center md:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="proyects/resto-app.webp"
                        />
                    </figure>

                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="proyects/back1.svg"
                        className="hidden lg:block"
                    />
                </div>
                <div className="flex flex-col justify-center items-start text-center lg:text-left p-4 lg:w-1/2">
                    <h3
                        className=
                        "py-2 text-6xl font-bold bg-gradient-to-br from-violet-300 via-violet-600 to-violet-200 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-50 bg-clip-text text-transparent dark:drop-shadow-[0_0px_4px_rgba(255,255,255,0.55)]"
                    >
                        Resto-App
                    </h3>
                    <p
                        className=
                        "mt-4 text-lg text-start font-normal text-pretty lg:text-xl text-zinc-900 dark:text-white"

                    >
                        Resto-App es una web app para los restaurantes que cuenta con una landing page y con un gestor de pedidos. La landing page es una web estática que muestra información sobre el restaurante, la carta y la ubicación. El gestor de pedidos es una web dinámica que permite a los clientes realizar pedidos y a los empleados gestionarlos. También cuenta con un panel de administración para gestionar los productos, categorías, pedidos y empleados.
                    </p>
                    <div className="mt-4 flex gap-2">
                        <Chip size="sm" variant="shadow"
                            classNames={
                                {
                                    base: "bg-zinc-950 text-white",
                                }
                            }
                            endContent={<Nextjs />}
                        >
                            Next.js
                        </Chip>
                        <Chip size="sm" variant="shadow" color="success"
                            classNames={
                                {
                                    base: "bg-green-700 text-white",
                                }
                            }
                            endContent={<MongoDB />}
                        >
                            MongoDB
                        </Chip>
                        <Chip size="sm" variant="shadow" color="primary"
                            classNames={
                                {
                                    base: "bg-blue-500 text-white",
                                }
                            }
                            endContent={<TypeScript />}
                        >
                            TypeScript
                        </Chip>
                        <Chip size="sm" variant="shadow" color="primary"
                            classNames={
                                {
                                    base: "bg-blue-800 text-white",
                                }
                            }
                            endContent={<Tailwind />}
                        >
                            Tailwind CSS
                        </Chip>

                    </div>
                    <Button as={Link} href="https://github.com/Juanmorales1810/resto-app" target="_blank" className="mt-4" color="secondary">Ver más</Button>
                </div>
            </div>
            <div className="relative flex flex-col-reverse justify-center items-center w-full h-full min-h-[calc(100vh-116px)] z-10 lg:flex-row">
                <div className="flex flex-col justify-center items-end text-end lg:text-right p-4 lg:w-1/2">
                    <h3
                        className=
                        "py-2 text-6xl font-bold bg-gradient-to-br from-violet-300 via-violet-600 to-violet-200 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-50 bg-clip-text text-transparent dark:drop-shadow-[0_0px_4px_rgba(255,255,255,0.55)]"
                    >
                        PichiriKa
                    </h3>
                    <p
                        className=
                        "mt-4 text-lg font-normal text-pretty lg:text-xl text-zinc-900 dark:text-white"
                    >
                        Es un portal web para la adopción y cuidado de animales es una plataforma virtual que facilita la conexión entre mascotas necesitadas de hogar y personas interesadas en brindarles amor y cuidados.
                    </p>
                    <div className="mt-4 flex gap-2">
                        <Chip size="sm" variant="shadow"
                            classNames={
                                {
                                    base: "bg-zinc-950 text-white",
                                }
                            }
                            endContent={<Nextjs />}
                        >
                            Next.js
                        </Chip>
                        <Chip size="sm" variant="shadow" color="success"
                            classNames={
                                {
                                    base: "bg-green-700 text-white",
                                }
                            }
                            endContent={<MongoDB />}
                        >
                            MongoDB
                        </Chip>
                        <Chip size="sm" variant="shadow" color="primary"
                            classNames={
                                {
                                    base: "bg-blue-500 text-white",
                                }
                            }
                            endContent={<TypeScript />}
                        >
                            TypeScript
                        </Chip>
                        <Chip size="sm" variant="shadow" color="primary"
                            classNames={
                                {
                                    base: "bg-blue-800 text-white",
                                }
                            }
                            endContent={<Tailwind />}
                        >
                            Tailwind CSS
                        </Chip>

                    </div>
                    <Button as={Link} href="https://github.com/Juanmorales1810/pichirika" target="_blank" className="mt-4" color="secondary">Ver más</Button>
                </div>
                <div className="flex justify-center items-center lg:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="proyects/pichirika.webp"
                        />
                    </figure>
                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="proyects/back2.svg"
                        className="hidden lg:block"
                    />
                </div>
            </div>
            <div className="relative flex flex-col justify-center items-center w-full h-full min-h-[calc(100vh-116px)] lg:flex-row">
                <div className="flex justify-center items-center lg:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="proyects/caribbean.webp"
                        />
                    </figure>
                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="proyects/back3.svg"
                        className="hidden lg:block"
                    />
                </div>
                <div className="flex flex-col justify-center items-start text-start lg:text-left p-4 lg:w-1/2">
                    <h3
                        className=
                        "py-2 text-6xl font-bold bg-gradient-to-br from-violet-300 via-violet-600 to-violet-200 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-50 bg-clip-text text-transparent dark:drop-shadow-[0_0px_4px_rgba(255,255,255,0.55)]"
                    >
                        Caribbean Ind
                    </h3>
                    <p
                        className=
                        "mt-4 text-lg font-normal text-pretty lg:text-xl text-zinc-900 dark:text-white"
                    >
                        Es una web para la venta de artículos de indumentaria, calzado y accesorios. La web cuenta con un carrito de compras, un panel de administración para gestionar los productos, categorías y pedidos.
                    </p>
                    <div className="mt-4 flex gap-2">
                        <Chip size="sm" variant="shadow"
                            classNames={
                                {
                                    base: "bg-zinc-950 text-white",
                                }
                            }
                            endContent={<Nextjs />}
                        >
                            Next.js
                        </Chip>
                        <Chip size="sm" variant="shadow" color="success"
                            classNames={
                                {
                                    base: "bg-green-700 text-white",
                                }
                            }
                            endContent={<MongoDB />}
                        >
                            MongoDB
                        </Chip>
                        <Chip size="sm" variant="shadow" color="primary"
                            classNames={
                                {
                                    base: "bg-blue-500 text-white",
                                }
                            }
                            endContent={<TypeScript />}
                        >
                            TypeScript
                        </Chip>
                        <Chip size="sm" variant="shadow" color="primary"
                            classNames={
                                {
                                    base: "bg-blue-800 text-white",
                                }
                            }
                            endContent={<Tailwind />}
                        >
                            Tailwind CSS
                        </Chip>

                    </div>
                    <Button as={Link} href="https://www.caribbeanind.com/" target="_blank" className="mt-4" color="secondary">Ver más</Button>
                </div>
            </div>
        </section>
    );
}