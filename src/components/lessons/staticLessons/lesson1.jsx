export default function Lesson1() {
    return (
        <div className="w-full h-fit p-5">
            <div className="border rounded-xl border-2 shadow-lg px-4 py-2 bg-transparent">

                <h1 className="text-3xl font-extrabold text-fuchsia-600 mb-6 text-center">
                    Introducción a la Música
                </h1>
                
                <p className="mt-2 text-base text-gray-400 italic font-light">
                    "La Música es el arte de los sonidos. Se lee y se escribe 
                    con tanta facilidad como se leen y se escriben las palabras 
                    que pronunciamos" - Danhauser, Teoría de la Música.
                </p>

                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es la Música?
                </h2>
                <p className="mt-2 text-base text-white">
                    La música es un arte expresivo que utiliza el sonido 
                    como medio de comunicación. Se basa en la organización 
                    de sonidos y silencios a través del tiempo, lo que le
                     permite evocar emociones, contar historias, e incluso 
                     transmitir información. La música se estructura en 
                     elementos fundamentales como ritmo, melodía, armonía, 
                     timbre, y tonalidad, que interactúan entre sí para 
                     crear obras musicales de diferentes estilos y géneros.
                    <br /><br />
                    A nivel técnico, los sonidos se producen a través 
                    de vibraciones en el aire, las cuales son percibidas
                     por el oído humano. Estas vibraciones se pueden 
                     clasificar en distintas frecuencias, que determinan 
                     el tono (grave o agudo), y en amplitudes, que 
                     determinan el volumen. La organización de 
                     estos sonidos en patrones específicos,
                      siguiendo las reglas del ritmo y 
                      la armonía, forma la base de la 
                      composición musical y de toda la Teoria Musical.
                </p>

                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es la Teoría Musical?
                </h2>
                <p className="mt-2 text-base text-white">
                    La teoría musical es el estudio de los fundamentos 
                    y principios que subyacen en la creación y análisis 
                    de la música. Abarca una serie de conceptos que permiten 
                    comprender cómo se estructuran los sonidos, las notas
                     y los acordes para formar composiciones musicales coherentes. 
                     Algunos de los principales componentes de la teoría musical 
                     incluyen las Notas y escalas, El Ritmo, La Armonia, Intervalos,
                     Tonalidad y un largo etcetera, Hay muchos componentes los cuales 
                     abarcaremos luego.
                </p>

                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Cómo Escribimos Musicalmente?
                </h2>
                <p className="mt-2 text-base text-white">
                    La escritura musical se realiza mediante un sistema de notación
                     que permite representar visualmente las notas, ritmos 
                     y otros elementos musicales. Este sistema utiliza un pentagrama, 
                     que es una serie de cinco líneas horizontales
                      donde se colocan las notas. El lugar en el que se coloca 
                      cada nota indica su altura, mientras que su figura 
                      (redonda, blanca, negra, etc.) indica su duración.
                    <br /><br />
                    <img 
                        src="/images/Leccion1/pentagrama.jpg" 
                        alt="Pentagrama musical" 
                        className="w-[60%] h-auto mt-4 mx-auto rounded-md shadow-md" 
                    />
                    <br /><br />
                    La notación musical ha evolucionado a lo largo del tiempo, 
                    pero sigue siendo una herramienta fundamental
                     para la transmisión de música de generación en generación.
                      Además de las notas, el pentagrama incluye otros símbolos 
                      como las claves, que indican la altura de las notas, 
                      las alteraciones (sostenidos y bemoles) que modifican la altura de las notas,
                       y los signos de articulación que indican cómo deben ejecutarse las notas.
                    <br /><br />
                    <img 
                        src="/images/Leccion1/figurasyclaves.jpg" 
                        alt="Pentagrama musical" 
                        className="w-[60%] h-auto mt-4 mx-auto rounded-md shadow-md" 
                    />
                    <br /><br />
                    Al igual que el texto escrito, la música se puede leer y escribir, 
                    permitiendo que los músicos reproduzcan una obra exactamente
                     como fue pensada por el compositor, sin importar el lugar
                     o el tiempo en que se realice la interpretación.
                </p>
                    <img 
                        src="/images/Leccion1/piratasdelcaribe.jpg" 
                        alt="Pentagrama musical" 
                        className="w-[60%] h-auto mt-4 mx-auto rounded-md shadow-md" 
                    />
                <br /><br />

            </div>
        </div>
    );
};
