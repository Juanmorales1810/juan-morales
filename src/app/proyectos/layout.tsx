import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Proyectos",
        template: `%s - ${"Proyectos"}`,
    },
    description:
        "Proyetos realizados por mi a lo largo de mi carrera como desarrollador web.",
    keywords: "proyectos, desarrollador web, portafolio",
};
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="relative flex w-full flex-col items-center justify-center gap-4">
            {children}
        </main>
    );
}
