import LessonTittle from "../LessonsTittle";
import LesssonCard from "../LessonCard";
import LessonsJumper from "../LessonsJumper";
import Interv3 from "@/components/test/piano/Interv3";

export default function Lesson7({ lessonId }) {
    return (
        <div className="w-full h-fit p-5">

            <LessonTittle tittle={"Explorando los Intervalos de Tercera"} lessonId={lessonId} />

            <p className="mt-2 mx-auto w-fit text-base text-gray-500 italic font-light text-center">
                "Los intervalos de tercera son el corazón de la armonía; son los pilares de los acordes que forman nuestras canciones favoritas."
                <br />- Anónimo
            </p>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es un Intervalo de Tercera?
                </h2>
                <p className="mt-2 text-base">
                    Un intervalo de tercera es la distancia entre una nota y otra que se encuentra 
                    a tres notas de distancia en una escala, contando ambas notas. 
                    Es un intervalo clave para construir acordes mayores y menores.
                </p>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Tipos de Intervalos de Tercera
                </h2>
                <p className="mt-2 text-base">
                    Los intervalos de tercera se clasifican en dos tipos principales:
                </p>
                <ul className="list-disc ml-5 mt-2">
                    <li><strong>Tercera Mayor (M3):</strong> Tiene una distancia de dos tonos completos entre las notas, como Do a Mi.</li>
                    <li><strong>Tercera Menor (m3):</strong> Tiene una distancia de un tono y un semitono, como La a Do.</li>
                </ul>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Ejemplos Prácticos
                </h2>
                <p className="mt-2 text-base">
                    <strong>Tercera Menor:</strong> La-Do, Mi-Sol  
                    <br />
                    <strong>Tercera Mayor:</strong> Do-Mi, Fa-La  
                    <br />
                    Estos intervalos son la base para construir acordes mayores y menores, fundamentales en la música occidental.  
                </p>
            </LesssonCard>

            <Interv3 />

            <LessonsJumper id={7} test={false} />
        </div>
    );
};
