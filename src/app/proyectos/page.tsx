import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon } from "@/components/icons";

interface BlogPost {
    id: string;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    linkRepo?: string;
    linkDemo?: string;
}

export default function Page() {
    return (
        <section className="py-32">
            <div className="container mx-auto px-2">
                <h1 className="mb-12 max-w-lg font-sans text-5xl font-extrabold tracking-tight text-foreground drop-shadow-[0_0px_7px_rgba(255,255,255,0.55)] md:text-7xl">
                    Proyectos
                    <br />
                    Recientes
                </h1>
                <div className="flex flex-col space-y-2.5 gap-12 md:space-y-0 md:gap-8 lg:gap-16">
                    {defaultPosts.map((post) => (
                        <div
                            key={post.id}
                            className="flex flex-col items-center gap-4 md:gap-16 md:flex-row"
                        >
                            <div className="flex h-80 w-full items-center justify-center overflow-hidden rounded-3xl bg-muted md:w-140">
                                <img
                                    src={post.imageUrl || "/placeholder.svg"}
                                    className="h-full w-full object-cover"
                                    alt={post.imageAlt}
                                />
                            </div>
                            <Card className="flex flex-col gap-6 border-none shadow-none px-2.5 bg-accent md:w-1/2 lg:w-2/3">
                                <CardContent className="p-0">
                                    <div className="mb-5 flex flex-col h-fit  items-start border-b py-10 md:flex-row md:mb-0 lg:gap-32 md:border-t">
                                        <div className="flex h-full w-full flex-col items-start justify-between pr-8">
                                            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                                                {post.title}
                                            </h2>
                                            <p className="mt-2 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                                                {post.date}
                                            </p>
                                        </div>
                                        <div className="flex h-full w-full flex-col items-start justify-between gap-6">
                                            <p className="text-lg leading-relaxed font-normal tracking-tight text-muted-foreground md:text-xl">
                                                {post.description}
                                            </p>
                                            <div className="flex gap-2">
                                                {post.linkRepo && (
                                                    <Button
                                                        variant="outline"
                                                        className="px-0 text-primary transition-all ease-in-out hover:gap-6 hover:text-accent-foreground"
                                                        asChild
                                                    >
                                                        <a
                                                            href={post.linkRepo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Repositorio
                                                            <GithubIcon className="ml-2" />
                                                        </a>
                                                    </Button>
                                                )}
                                                {post.linkDemo && (
                                                    <Button
                                                        variant="outline"
                                                        className="px-0 text-primary transition-all ease-in-out hover:gap-6 hover:text-accent-foreground"
                                                        asChild
                                                    >
                                                        <a
                                                            href={post.linkDemo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Demo
                                                            <ArrowRight className="ml-4" />
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Default blog posts data
const defaultPosts: BlogPost[] = [
    {
        id: "1",
        title: "Pichirika",
        date: "28 de Abril 2025",
        description:
            "Un portal web para la adopción y cuidado de animales es una plataforma virtual que facilita la conexión entre mascotas necesitadas de hogar y personas interesadas en brindarles amor y cuidados.",
        imageUrl: "/images/portfolio/110_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/pichirika",
        linkDemo: "https://www.pichirika.com/",
    },
    {
        id: "2",
        title: "Trenza Comunicaciones",
        date: "15 de Marzo 2025",
        description:
            "Bienvenido al repositorio del proyecto Trenza Comunicaciones. Este proyecto está diseñado para proporcionar una plataforma moderna y eficiente utilizando Next.js y otras tecnologías web avanzadas.",
        imageUrl: "/images/portfolio/838_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/trenza-comunicaciones",
        linkDemo: "https://trenza-comunicaciones.vercel.app/",
    },
    {
        id: "3",
        title: "El Riconcito",
        date: "5 de Marzo 2025",
        description:
            "Se hizo una landing page para un emprendimiento llamdo El Riconcito ubicado en Coquimbo, Chile. Esta pagina Se hizo usando Astro y React para algunos componente",
        imageUrl: "/images/portfolio/675_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/el-rinconcito",
        linkDemo: "https://el-rinconcito.vercel.app/",
    },
    {
        id: "4",
        title: "Dominga Dominguez",
        date: "24 de Febrero 2025",
        description:
            "Se hizo una landing page para el restaurante Dominga Dominguez ubicado en la Serena, Chile. Esta pagina Se hizo usando Astro y React para algunos componente",
        imageUrl: "/images/portfolio/983_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/dominga-dominguez",
        linkDemo: "https://dominga-dominguez.vercel.app/",
    },
    {
        id: "5",
        title: "Destape La Serena",
        date: "12 de Febrero 2025",
        description:
            "Se hizo una landing page para un emprendimiento llamdo Destape La Serena ubicado en La Serena, Chile. Esta pagina Se hizo usando Astro y React para algunos componente",
        imageUrl: "/images/portfolio/580_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/destapes-la-serena",
        linkDemo: "https://destapes-la-serena-ten.vercel.app/",
    },
    {
        id: "6",
        title: "Proviser Chile",
        date: "10 de Febrero 2025",
        description:
            "Se hizo una landing page para un emprendimiento llamdo Proviser Chile ubicado en La Serena, Chile. Esta pagina Se hizo usando Astro y React para algunos componente",
        imageUrl: "/images/portfolio/181_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/proviser",
        linkDemo: "https://proviser-cyan.vercel.app/",
    },
    {
        id: "7",
        title: "H-S",
        date: "2 de Febrero 2025",
        description:
            "El proyecto H-S está diseñado para gestionar y mejorar las prácticas de higiene y seguridad en el entorno laboral. Utilizando tecnologías modernas, esta plataforma facilita la supervisión, el seguimiento y la implementación de medidas de seguridad.",
        imageUrl: "/images/portfolio/890_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/H-S",
        linkDemo: "https://h-s-proyect.vercel.app/admin/resumen/estadisticas",
    },
    {
        id: "8",
        title: "Trenza Matrimonios",
        date: "29 de Enero 2025",
        description:
            "Trensa Studio es una plataforma que ofrece servicios de fotografía y video de bodas en La Serena y Santiago, capturando momentos especiales con profesionalismo y creatividad.",
        imageUrl: "/images/portfolio/681_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/trensa-studio",
        linkDemo: "https://trensa-studio.vercel.app/",
    },
    {
        id: "9",
        title: "Sabor y Encanto",
        date: "18 de Enero 2025",
        description:
            "Bienvenido al repositorio de Sabor y Encanto, una aplicación construida con Next.js 13 y NextUI v2. Este proyecto está diseñado para ofrecer una experiencia de usuario moderna y atractiva utilizando componentes estilizados y funcionalidades avanzadas.",
        imageUrl: "/images/portfolio/689_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/sabor-y-encanto",
        linkDemo: "https://sabor-y-encanto.vercel.app/",
    },
    {
        id: "10",
        title: "Fishy Air",
        date: "4 de Enero 2025",
        description:
            "Fishy Air se enfoca en proporcionar una experiencia única a través de productos aromáticos de alta calidad. Nuestra página web ofrece información detallada sobre los beneficios de nuestros productos, testimonios de clientes, y una sección sobre nosotros para conocer más acerca de nuestra misión y visión.",
        imageUrl: "/images/portfolio/291_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/fishy-air",
        linkDemo: "https://fishy-air.vercel.app/",
    },
    {
        id: "11",
        title: "Jireh English Academy",
        date: "23 de Diciembre 2024",
        description:
            "La página Jireh English Academy se enfoca en ofrecer cursos de inglés personalizados en La Serena, especialmente dirigidos a minería, negocios y viajes. El objetivo es mejorar la fluidez de los estudiantes con clases impartidas por un profesor de inglés nativo.",
        imageUrl: "/images/portfolio/80_1x_shots_so.webp",
        imageAlt: "Code on screen",
        linkRepo: "https://github.com/Juanmorales1810/jireh-english",
        linkDemo: "https://jireh-english.vercel.app/",
    },
];
