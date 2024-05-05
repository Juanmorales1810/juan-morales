"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { Image } from "@nextui-org/image";
import { useEffect } from "react";

interface ScrollAnimationProps {
    control: any;
    start: number;
    end: number;
}

const useScrollAnimation = ({ control, start, end }: ScrollAnimationProps) => {
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;

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
    }, [control, start, end]);
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

export default function Proyects() {
    const control1 = useAnimation();
    const control2 = useAnimation();
    const control3 = useAnimation();
    const control4 = useAnimation();

    useScrollAnimation({ control: control2, start: 1200, end: 1850 });
    useScrollAnimation({ control: control3, start: 1851, end: 2650 });
    useScrollAnimation({ control: control4, start: 2651, end: 3200 });
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            console.log(scrollY);


            if (scrollY <= 1850) {
                control1.start("right");
            }
            if (scrollY > 1851) {
                control1.start("left");
            }
            if (scrollY > 2651) {
                control1.start("right");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control1]);

    return (
        <section className="w-full max-w-6xl px-4">
            <motion.div
                className="sticky lg:flex justify-center items-center top-[450px] w-1/2 h-full z-20 hidden"
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
                            src="proyects/realidad.jpg"
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
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"

                    >
                        Comenzamos evaluando tus objetivos y preferencias.
                        Juntos, diseñamos un plan personalizado que refleje
                        nuestra experiencia comprobada en videos de
                        entrenamiento de última generación.
                    </p>
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
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"
                    >
                        Exploramos nuestra rica trayectoria de éxitos,
                        inspirándote con historias reales. Te sumergirás en
                        sesiones de entrenamiento que capturan la esencia de la
                        fama, equilibrando la ambición con la realidad.
                    </p>
                </div>
                <div className="flex justify-center items-center lg:w-1/2">
                    <figure className="lg:hidden">
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="proyects/realidad.jpg"
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
                        "mt-4 text-xl font-normal lg:text-2xl text-zinc-900 dark:text-white"
                    >
                        Experimenta la grandeza a través de nuestros videos
                        exclusivos. Mantenemos una conexión cercana, brindando
                        apoyo realista y ajustes personalizados. Así, te guiamos
                        hacia el estrellato en tus propias metas de maratón.
                    </p>
                </div>
            </div>
        </section>
    );
}