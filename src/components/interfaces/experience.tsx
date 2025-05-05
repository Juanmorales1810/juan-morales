const experiencia = [
    {
        fecha: "Junio 2024 - Actualidad",
        puesto: "Frontend Developer en San Juan Gobierno",
        descripcion:
            "Desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas como React, Next.js y React Native. Creación de interfaces de usuario interactivas y dinámicas, implementando estrategias de optimización de rendimiento para garantizar una experiencia de usuario fluida. Colaboración con diseñadores y desarrolladores de backend para garantizar la coherencia del diseño y la funcionalidad de la aplicación. Participación en reuniones de planificación y revisión de código para garantizar la calidad y la eficiencia del código fuente. También implementé que en mi departamento se haga el uso de GitHub como herramienta de control de versiones, lo que permitió una mejor colaboración y seguimiento de cambios en el código.",
    },
    {
        fecha: "Octubre 2022 - Actualidad",
        puesto: "Freelance Web Developer",
        descripcion:
            "Mi experiencia se extiende al desarrollo de aplicaciones web, donde utilizó frameworks modernos como Next.js y Astro.js para crear interfaces interactivas y dinámicas. Además, me especializo en la optimización del rendimiento, implementando estrategias como la carga diferida de recursos y la mejora del tiempo de carga para garantizar una experiencia de usuario fluida. No solo creo sitios web, sino que también ofrezco servicios de mantenimiento continuo, asegurando que las plataformas permanezcan actualizadas, seguras y eficientes.",
    },
    {
        fecha: "Septiembre 2021 - Octubre 2022",
        puesto: "Diseñador Gráfico",
        descripcion:
            "Elaboración de materiales institucionales, así como imágenes para la divulgación de nuevas empresas, aniversarios y avisos importantes. Revisión de documentos con cliente, definición y priorización del backlog junto con el equipo.",
    },
    {
        fecha: "Marzo 2019 - Septiembre 2021",
        puesto: "WordPress Developer",
        descripcion:
            "Hacia trabajos a empresas locales de manera autónoma usando Elementor, WooCommerce, HTML, CSS, JavaScript.",
    },
];
export default function Experience() {
    return (
        <section id="Experiencia" className="flex gap-3 mt-16 px-2 py-24">
            <ol className="relative border-s dark:border-blue-200 border-blue-950 w-full max-w-5xl">
                {experiencia.map((exp, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-violet-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-100 dark:bg-blue-100" />
                        <div className="absolute w-3 h-3 bg-violet-700 rounded-full mt-1.5 -start-1.5 border border-white blur-sm dark:border-blue-100 dark:bg-blue-100 dark:blur-md" />
                        <time className="mb-1 text-md font-normal leading-none text-gray-700 dark:text-gray-300">
                            {exp.fecha}
                        </time>
                        <h3 className="text-2xl font-semibold bg-gradient-to-br from-violet-500 to-violet-900 bg-clip-text text-transparent dark:from-violet-200 dark:to-violet-400">
                            {exp.puesto}
                        </h3>
                        <p className="mt-4 text-base font-semibold dark:font-normal text-gray-900 dark:text-gray-200 text-pretty">
                            {exp.descripcion}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
