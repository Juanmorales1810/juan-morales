export default function Bio() {
    return (
        <section id="Bio" className="py-24 px-4">
            <div className="flex flex-col justify-center items-center group gap-4 w-full max-w-5xl md:gap-10 md:flex-row pb-6">
                <div className="text-md text-black font-medium dark:text-white md:w-1/2">
                    <p>
                        Hola soy&nbsp;
                        <strong className="text-violet-600 dark:text-violet-300">
                            Juan Morales&nbsp;
                        </strong>
                        y esta es mi biografía : Nací un 18 de Octubre de 1995
                        en la provincia de San Juan, Argentina, desde muy
                        pequeño me llamó mucho las computadoras y en la
                        adolescencia más lo que es la parte de software, desde
                        ese momento me instruí en lo que es el diseño gráfico
                        dando paso a mi curiosidad hacia la&nbsp;
                        <strong className="text-violet-600 dark:text-violet-300">
                            programación de páginas web
                        </strong>
                        .
                    </p>
                    <br />
                    <p>
                        Ahí descubrí lo que es el html y el css, averiguando más
                        me tope con&nbsp;
                        <strong className="text-yellow-700 dark:text-yellow-400">
                            Javascript&nbsp;
                        </strong>
                        abriendo un nuevo mundo de posibilidades, aun sigo en la
                        busca de conocimeito y trato dia a dia en aprender
                        nuevas teconologias y el manejo de ultilidades para
                        mejorar mis habilidades de desarrolador.
                    </p>
                </div>
                <div className="relative transition-opacity py-2">
                    <img
                        src="/SobreMi.webp"
                        alt="Yo en un barcito en San Juan"
                        className="w-60 rounded-xl rotate-2 absolute blur-lg inset-0 z-0 opacity-0 group-hover:blur-xl group-hover:rotate-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    <img
                        src="/SobreMi.webp"
                        alt="Yo en un barcito en San Juan"
                        className="w-60 rounded-xl shadow-lg rotate-2 relative z-20 group-hover:rotate-0 transition-all duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
