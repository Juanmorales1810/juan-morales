"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import {
    Expo,
    JavaScript,
    NextjsIcon,
    Python,
    ReactIcon,
    TailwindCSS,
    TypeScriptIcon,
} from "./icons";
import { SVGProps } from "react";

interface Providers {
    logo: string | ((props: SVGProps<SVGSVGElement>) => React.JSX.Element);
}

const proveedores: Providers[] = [
    {
        logo: Expo,
    },
    {
        logo: ReactIcon,
    },
    {
        logo: NextjsIcon,
    },
    {
        logo: Python,
    },
    {
        logo: JavaScript,
    },
    {
        logo: TypeScriptIcon,
    },
    {
        logo: TailwindCSS,
    },
];

export default function Skills() {
    return (
        <div className="w-full h-auto hidden lg:block">
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[
                    AutoScroll({
                        playOnInit: true,
                        stopOnInteraction: false,
                        speed: 1,
                    }),
                ]}
                className="relative"
            >
                <CarouselContent className="">
                    {proveedores.map((providers, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/2 lg:basis-1/4"
                        >
                            <TestimonialCard providers={providers} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
function TestimonialCard({ providers }: { providers: Providers }) {
    return (
        <article className="h-full flex justify-center items-center bg-transparent border-0 hover:bg-zinc-400/15 hover:border-zinc-50/20 transition-colors rounded-xl">
            <div className="p-4 text-black">
                <providers.logo
                    width={60}
                    height={60}
                    className="drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]"
                />
            </div>
        </article>
    );
}
