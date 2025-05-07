import {
    Building2,
    Earth,
    LayoutPanelTop,
    MousePointerClick,
    Rocket,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const experiencia = [
    {
        fecha: "Junio 2024 - Actualidad",
        puesto: "Frontend Developer en San Juan Gobierno",
        descripcion:
            "Desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas como React, Next.js y React Native. Creación de interfaces de usuario interactivas y dinámicas, implementando estrategias de optimización de rendimiento para garantizar una experiencia de usuario fluida. Colaboración con diseñadores y desarrolladores de backend para garantizar la coherencia del diseño y la funcionalidad de la aplicación. Participación en reuniones de planificación y revisión de código para garantizar la calidad y la eficiencia del código fuente. También implementé que en mi departamento se haga el uso de GitHub como herramienta de control de versiones, lo que permitió una mejor colaboración y seguimiento de cambios en el código.",

        imagen: "/images/experiencia/san-juan-gob.png",
        icon: <Building2 className="size-4 shrink-0" />,
    },
    {
        fecha: "Octubre 2022 - Actualidad",
        puesto: "Freelance Web Developer",
        descripcion:
            "Mi experiencia se extiende al desarrollo de aplicaciones web, donde utilizó frameworks modernos como Next.js y Astro.js para crear interfaces interactivas y dinámicas. Además, me especializo en la optimización del rendimiento, implementando estrategias como la carga diferida de recursos y la mejora del tiempo de carga para garantizar una experiencia de usuario fluida. No solo creo sitios web, sino que también ofrezco servicios de mantenimiento continuo, asegurando que las plataformas permanezcan actualizadas, seguras y eficientes.",
        imagen: "/images/experiencia/trenza.png",
        icon: <Earth className="size-4 shrink-0" />,
    },
    {
        fecha: "Septiembre 2021 - Octubre 2022",
        puesto: "Diseñador Gráfico",
        descripcion:
            "Elaboración de materiales institucionales, así como imágenes para la divulgación de nuevas empresas, aniversarios y avisos importantes. Revisión de documentos con cliente, definición y priorización del backlog junto con el equipo.",
        imagen: "/images/experiencia/diseño-grafico.png",
        icon: <MousePointerClick className="size-4 shrink-0" />,
    },
    {
        fecha: "Marzo 2019 - Septiembre 2021",
        puesto: "WordPress Developer",
        descripcion:
            "Hacia trabajos a empresas locales de manera autónoma usando Elementor, WooCommerce, HTML, CSS, JavaScript.",
        imagen: "/images/experiencia/wordpress.png",
        icon: <LayoutPanelTop className="size-4 shrink-0" />,
    },
];

export default function Experiencia() {
    return (
        <section className="py-32 w-full">
            <div className="border-y">
                <div className="container mx-auto flex flex-col gap-6 border-x py-4 px-2 max-lg:border-x lg:py-8 lg:px-12">
                    <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border py-0.5 whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
                    >
                        <Rocket className="size-4 shrink-0" />
                        <span>Experiencia</span>
                    </span>
                    <h2 className="text-3xl leading-tight tracking-tight text-wrap md:text-4xl lg:text-6xl">
                        Mi trayectoria profesional
                        <span className="text-gradient bg-gradient-to-br from-violet-500 to-violet-900 bg-clip-text text-transparent dark:from-violet-200 dark:to-violet-400">
                            {" "}
                            en el desarrollo web
                        </span>
                    </h2>
                    <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
                        He tenido la oportunidad de trabajar en una variedad de
                        proyectos, desde aplicaciones web hasta soluciones
                        móviles, siempre buscando la excelencia y la innovación.
                        Mi enfoque se centra en crear experiencias de usuario
                        fluidas y eficientes, utilizando las últimas tecnologías
                        y mejores prácticas en el desarrollo.
                    </p>
                </div>
            </div>
            <div className="container mx-auto overflow-hidden border-x pb-0 lg:pt-20 [&>*:last-child]:pb-20 [&>div>div:first-child]:!pt-20">
                {experiencia.map((exp, index) => (
                    <div className="relative flex" key={index}>
                        <div
                            className={`flex w-full justify-center px-1 py-10 text-end md:gap-6 lg:gap-10 ${
                                index % 2 === 0
                                    ? "lg:flex-row-reverse lg:text-start"
                                    : ""
                            } `}
                        >
                            <div className="flex-1 max-lg:hidden">
                                <small>{exp.fecha}</small>
                                <h3 className="text-2xl tracking-[-0.96px]">
                                    {exp.puesto}
                                </h3>
                                <p
                                    className={`mt-2.5 max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground ${
                                        index % 2 === 0 ? "" : "ml-auto"
                                    }`}
                                >
                                    {exp.descripcion}
                                </p>
                            </div>
                            <div className="z-10 size-fit -translate-y-5 bg-background rounded-full p-4  max-lg:-translate-x-4">
                                <div className="rounded-[10px] border bg-card p-[5px] shadow-md">
                                    <div className="size-fit rounded-md border bg-muted p-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]">
                                        {exp.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 max-lg:-translate-x-4">
                                <div className="text-start lg:pointer-events-none lg:hidden">
                                    <small>{exp.fecha}</small>
                                    <h3 className="text-2xl tracking-[-0.96px]">
                                        {exp.puesto}
                                    </h3>
                                    <p className="mt-2.5 mb-10 max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground">
                                        {exp.descripcion}
                                    </p>
                                </div>
                                <div className="hidden items-start justify-start md:flex">
                                    <div
                                        className={`${
                                            index % 2 === 0 ? "lg:ml-auto" : ""
                                        }`}
                                    >
                                        <div className="px-6 lg:px-10">
                                            <div
                                                className="w-full border-2 border-dashed h-6 lg:h-10"
                                                style={{
                                                    backgroundImage:
                                                        "url(\"data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cccccc' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
                                                }}
                                            ></div>
                                        </div>
                                        <div className="relative grid grid-cols-[auto_1fr_auto] items-stretch">
                                            <div
                                                className="border-2 border-dashed h-full w-6 lg:w-10"
                                                style={{
                                                    backgroundImage:
                                                        "url(\"data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cccccc' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
                                                }}
                                            ></div>
                                            <Image
                                                src={exp.imagen}
                                                loading="lazy"
                                                width="400"
                                                height="500"
                                                alt={exp.puesto}
                                                title={exp.puesto}
                                                className="object-contain"
                                            />
                                            <div
                                                className="h-full border-2 border-dashed w-6 lg:w-10"
                                                style={{
                                                    backgroundImage:
                                                        "url(\"data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cccccc' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
                                                }}
                                            ></div>
                                        </div>
                                        <div className="px-6 lg:px-10">
                                            <div
                                                className="w-full border-2 border-dashed h-6 lg:h-10"
                                                style={{
                                                    backgroundImage:
                                                        "url(\"data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cccccc' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-[-2] h-full w-[3px] translate-x-5 rounded-full lg:left-1/2 lg:-translate-x-1/2 bg-foreground/10">
                            <div className="h-4 w-[3px] -translate-y-full bg-gradient-to-b from-transparent to-foreground/10"></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
                <div className="container mx-auto h-full w-full border-x"></div>
            </div>
        </section>
    );
}
