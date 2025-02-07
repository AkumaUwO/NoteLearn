import LessonTittle from "../LessonsTittle";
import LesssonCard from "../LessonCard";
import LessonsJumper from "../LessonsJumper";
import Interv2 from "@/components/test/piano/Interv2";

export default function Lesson6({ lessonId }) {
    return (
        <div className="w-full h-fit sm:p-5">

            <LessonTittle tittle={"Explorando los Intervalos de Segunda"} lessonId={lessonId} />

            <p className="mt-2 mx-auto w-fit text-base text-gray-500 italic font-light text-center">
                "Cada intervalo de segunda es un pequeño paso, pero en la música, incluso los pasos pequeños crean grandes historias."
                <br />- Anónimo
            </p>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es un Intervalo de Segunda?
                </h2>
                <p className="mt-2 text-base">
                    Un intervalo de segunda es la distancia entre dos notas consecutivas en una escala. 
                    Es el intervalo más pequeño dentro del sistema musical occidental, aparte de los unísonos.
                </p>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Tipos de Intervalos de Segunda
                </h2>
                <p className="mt-2 text-base">
                    Los intervalos de segunda se clasifican en dos tipos principales:
                </p>
                <ul className="list-disc ml-5 mt-2">
                    <li><strong>Segunda Mayor (M2):</strong> Tiene una distancia de un tono completo entre las notas, como Do a Re.</li>
                    <li><strong>Segunda Menor (m2):</strong> Tiene una distancia de un semitono entre las notas, como Mi a Fa.</li>
                </ul>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Ejemplos Prácticos
                </h2>
                <p className="mt-2 text-base">
                    <strong>Segunda Menor:</strong> Mi-Fa, Si-Do  
                    <br />
                    <strong>Segunda Mayor:</strong> Do-Re, Fa-Sol  
                    <br />
                    Estos intervalos son fundamentales en la construcción de escalas y melodías.  
                </p>

                
            </LesssonCard>

            <Interv2 />        

            <LessonsJumper id={6} test={true} />
        </div>
    );
};
