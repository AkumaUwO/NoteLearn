import LessonTittle from "../LessonsTittle";
import LesssonCard from "../LessonCard";
import LessonsJumper from "../LessonsJumper";
import Interv7 from "@/components/test/piano/Interv7";
import Interv7M from "@/components/test/piano/Interv7M";

export default function Lesson11({ lessonId }) {
    return (
        <div className="w-full h-fit p-5">

            <LessonTittle tittle={"Explorando los Intervalos de Séptima"} lessonId={lessonId} />

            <p className="mt-2 mx-auto w-fit text-base text-gray-500 italic font-light text-center">
                "La séptima añade tensión, color y emoción, preparando el camino hacia la resolución."
                <br />- Anónimo
            </p>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es un Intervalo de Séptima?
                </h2>
                <p className="mt-2 text-base">
                    Un intervalo de séptima es la distancia entre dos notas que están separadas por siete posiciones en una escala. 
                    Este intervalo suele evocar sensaciones de tensión o expectativa, dependiendo de su tipo.
                </p>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Tipos de Intervalos de Séptima
                </h2>
                <p className="mt-2 text-base">
                    Los intervalos de séptima tienen dos tipos principales:
                </p>
                <ul className="list-disc ml-5 mt-2">
                    <li><strong>Séptima Mayor (M7):</strong> Tiene una distancia de cinco tonos y un semitono, como Do a Si. 
                    Este intervalo suena brillante y a menudo se usa en contextos armónicos de jazz y música clásica.</li>
                    <li><strong>Séptima Menor (m7):</strong> Tiene una distancia de cinco tonos completos, como Do a Si♭. 
                    Es un intervalo más cálido y relajado, común en acordes dominantes y melodías expresivas.</li>
                </ul>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Ejemplos Prácticos
                </h2>
                <p className="mt-2 text-base">
                    <strong>Séptima Mayor:</strong> Do-Si, Fa-Mi  
                    <br />
                    <strong>Séptima Menor:</strong> Do-Si♭, Sol-Fa  
                    <br />
                    Las séptimas son esenciales para crear acordes complejos y transiciones armónicas ricas, especialmente en el jazz y la música contemporánea.
                </p>
            </LesssonCard>
            <LesssonCard>
            <p className="mt-2 text-center">
                    <strong>Séptima Mayor</strong>
            </p>
            </LesssonCard>

            <Interv7M />

            <LesssonCard>
            <p className="mt-2 text-center">
                    <strong>Séptima Menor</strong>
            </p>
            </LesssonCard>

            <Interv7 />

            <LessonsJumper id={11} test={false} />
        </div>
    );
};
