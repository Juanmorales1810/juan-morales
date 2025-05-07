import React from "react";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookUser, SquarePen, Code, Laptop } from "lucide-react";

export default function SobreMi() {
    return (
        <section className="py-12 w-full" id="bio">
            <div className="border-y">
                <div className="container mx-auto flex flex-col gap-6 border-x px-4 py-4 max-lg:border-x lg:py-8">
                    <Badge
                        variant="outline"
                        className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
                    >
                        <BookUser className="size-4" />
                        <span>Biografía</span>
                    </Badge>
                    <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
                        Hola, soy Juan Morales
                    </h2>
                    <p className="max-w-[700px] tracking-[-0.32px] text-muted-foreground">
                        Nací un 18 de Octubre de 1995 en la provincia de San
                        Juan, Argentina. Mi pasión por la tecnología me ha
                        llevado a convertirme en un desarrollador web
                        comprometido con el aprendizaje continuo.
                    </p>
                </div>
            </div>{" "}
            <div className="container mx-auto border-x px-0">
                <Tabs
                    defaultValue="inicio"
                    className="flex flex-col items-stretch gap-0 divide-y rounded-none lg:flex-row lg:divide-x lg:divide-y-0"
                >
                    <TabsList className="text-muted-foreground items-center justify-center flex h-auto w-full flex-col rounded-none border-b bg-transparent p-0 lg:w-1/3 lg:border-r lg:border-b-0">
                        <TabTrigger
                            value="inicio"
                            icon={<SquarePen className="size-4" />}
                            title="Mi Inicio"
                            description="Desde muy pequeño, me llamaron mucho la atención las computadoras y en la adolescencia me interesé más por la parte de software."
                        />
                        <TabTrigger
                            value="diseno"
                            icon={<Laptop className="size-4" />}
                            title="Diseño Gráfico"
                            description="Me instruí en el diseño gráfico, lo que eventualmente dio paso a mi curiosidad hacia la programación de páginas web."
                        />
                        <TabTrigger
                            value="desarrollo"
                            icon={<Code className="size-4" />}
                            title="Desarrollo Web"
                            description="Descubrí HTML y CSS, y averiguando más me topé con Javascript, abriendo un nuevo mundo de posibilidades en el desarrollo web."
                        />
                    </TabsList>

                    <div className="relative flex-1">
                        <div className="h-[600px] sm:h-[500px] lg:h-[400px]">
                            {" "}
                            <TabsContent
                                value="inicio"
                                className="flex-1 outline-none absolute inset-0 m-0 rounded-none p-6 transition-all duration-500 data-[state=inactive]:pointer-events-none data-[state=inactive]:opacity-0 lg:p-12"
                            >
                                <div className="flex h-full items-center justify-between gap-4 flex-col md:flex-row">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-semibold mb-3">
                                            Mi Historia
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground mb-4">
                                            Nací un 18 de Octubre de 1995 en la
                                            provincia de San Juan, Argentina.
                                            Desde muy pequeño, mostré una gran
                                            curiosidad por las computadoras, lo
                                            que marcó el inicio de mi camino en
                                            el mundo tecnológico.
                                        </p>
                                        <p className="text-sm md:text-base text-muted-foreground">
                                            Durante mi adolescencia, esta
                                            curiosidad se transformó en un
                                            interés más profundo por el software
                                            y sus posibilidades. Lo que comenzó
                                            como un hobby, pronto se convirtió
                                            en una pasión que definiría mi
                                            trayectoria profesional.
                                        </p>
                                    </div>
                                    <img
                                        src="/SobreMi.webp"
                                        alt="Juan Morales"
                                        width="300"
                                        height="300"
                                        className="w-auto h-3/4 max-h-[250px] object-contain rounded-lg shadow-md"
                                    />
                                </div>
                            </TabsContent>{" "}
                            <TabsContent
                                value="diseno"
                                className="flex-1 outline-none absolute inset-0 m-0 rounded-none p-6 transition-all duration-500 data-[state=inactive]:pointer-events-none data-[state=inactive]:opacity-0 lg:p-12"
                            >
                                <div className="flex h-full items-center justify-between gap-4 flex-col md:flex-row">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-semibold mb-3">
                                            Mi Formación en Diseño
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground mb-4">
                                            Me instruí primero en el campo del
                                            diseño gráfico, donde aprendí
                                            principios fundamentales de
                                            composición, color y usabilidad.
                                            Esta formación me proporcionó una
                                            sólida base visual que resultaría
                                            invaluable más adelante.
                                        </p>
                                        <p className="text-sm md:text-base text-muted-foreground">
                                            El diseño gráfico encendió en mí la
                                            chispa de la creatividad digital,
                                            que eventualmente me llevó a
                                            preguntarme: "¿Cómo puedo hacer que
                                            estos diseños cobren vida en la
                                            web?" Así comenzó mi curiosidad por
                                            la programación web.
                                        </p>
                                    </div>
                                    <img
                                        src="/images/proyects/grafico1.webp"
                                        alt="Diseño Gráfico"
                                        width="300"
                                        height="300"
                                        className="w-auto h-3/4 max-h-[250px] object-contain rounded-lg shadow-md"
                                    />
                                </div>
                            </TabsContent>{" "}
                            <TabsContent
                                value="desarrollo"
                                className="flex-1 outline-none absolute inset-0 m-0 rounded-none p-6 transition-all duration-500 data-[state=inactive]:pointer-events-none data-[state=inactive]:opacity-0 lg:p-12"
                            >
                                <div className="flex h-full items-center justify-between gap-4 flex-col md:flex-row">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-xl font-semibold mb-3">
                                            Mi Viaje en el Desarrollo Web
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground mb-4">
                                            Mi primer encuentro con el
                                            desarrollo web fue a través de HTML
                                            y CSS, las tecnologías fundamentales
                                            que dan estructura y estilo a la
                                            web. Pronto me di cuenta de que esto
                                            era solo el principio de un amplio
                                            universo de posibilidades.
                                        </p>
                                        <p className="text-sm md:text-base text-muted-foreground">
                                            Cuando me encontré con JavaScript,
                                            se abrió ante mí un nuevo mundo de
                                            interactividad y dinamismo. Desde
                                            entonces, he continuado expandiendo
                                            mis conocimientos en frameworks
                                            modernos como React y Next.js,
                                            siempre buscando mejorar mis
                                            habilidades y mantenerme actualizado
                                            con las últimas tendencias
                                            tecnológicas.
                                        </p>
                                    </div>
                                    <img
                                        src="/images/proyects/next.webp"
                                        alt="Desarrollo Web"
                                        width="300"
                                        height="300"
                                        className="w-auto h-3/4 max-h-[250px] object-contain rounded-lg shadow-md"
                                    />
                                </div>
                            </TabsContent>
                        </div>
                    </div>
                </Tabs>
            </div>{" "}
            <div className="w-full py-2 border-y lg:h-[112px]">
                <div className="container mx-auto h-full w-full border-x flex items-center justify-center">
                    <p className="text-center text-sm text-muted-foreground max-w-2xl px-4">
                        Sigo en la búsqueda constante de conocimiento y trato
                        día a día de aprender nuevas tecnologías y herramientas
                        para mejorar mis habilidades como desarrollador.
                    </p>
                </div>
            </div>
        </section>
    );
}

// Custom TabTrigger component to maintain the same structure and styling
interface TabTriggerProps {
    value: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

function TabTrigger({ value, icon, title, description }: TabTriggerProps) {
    return (
        <TabsTrigger
            value={value}
            className="group relative flex w-full rounded-none px-4 py-4 text-start whitespace-normal data-[state=active]:shadow-none lg:px-6 lg:py-5 border-b last:border-b-0 lg:last:border-b"
        >
            <div className="absolute bottom-[-1px] left-0 z-10 h-[2px] w-0 bg-gradient-to-r from-blue-600 via-sky-300 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2"></div>
            <div className="flex w-full flex-col">
                <div className="flex items-center gap-1.5">
                    {icon}
                    <h3 className="text-lg tracking-[-0.36px]">{title}</h3>
                </div>
                <p className="mt-2.5 text-sm tracking-[-0.32px] text-muted-foreground lg:text-base">
                    {description}
                </p>
            </div>
        </TabsTrigger>
    );
}
