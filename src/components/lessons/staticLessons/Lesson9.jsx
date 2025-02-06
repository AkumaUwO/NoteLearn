import LessonTittle from "../LessonsTittle";
import LesssonCard from "../LessonCard";
import LessonsJumper from "../LessonsJumper";
import Interv5 from "@/components/test/piano/Interv5";

export default function Lesson9({ lessonId }) {
    return (
        <div className="w-full h-fit p-5">

            <LessonTittle tittle={"La Fuerza de los Intervalos de Quinta"} lessonId={lessonId} />

            <p className="mt-2 mx-auto w-fit text-base text-gray-500 italic font-light text-center">
                "El intervalo de quinta: la piedra angular de la armonía y el motor del movimiento musical."
                <br />- Anónimo
            </p>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es un Intervalo de Quinta?
                </h2>
                <p className="mt-2 text-base">
                    Un intervalo de quinta es la distancia entre una nota y otra que se encuentra 
                    a cinco notas de distancia en una escala, contando ambas. Este intervalo es conocido 
                    por su estabilidad y potencia armónica.
                </p>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Tipos de Intervalos de Quinta
                </h2>
                <p className="mt-2 text-base">
                    Los intervalos de quinta se clasifican en tres tipos principales:
                </p>
                <ul className="list-disc ml-5 mt-2">
                    <li><strong>Quinta Justa (P5):</strong> Tiene una distancia de tres tonos y un semitono, como Do a Sol.</li>
                    <li><strong>Quinta Aumentada (#5):</strong> Tiene una distancia de cuatro tonos completos, como Sol a Re#.</li>
                    <li><strong>Quinta Disminuida (°5):</strong> Tiene una distancia de dos tonos y dos semitonos, como Si a Fa.</li>
                </ul>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Ejemplos Prácticos
                </h2>
                <p className="mt-2 text-base">
                    <strong>Quinta Justa:</strong> Do-Sol, Re-La  
                    <br />
                    <strong>Quinta Aumentada:</strong> Sol-Re#  
                    <br />
                    <strong>Quinta Disminuida:</strong> Si-Fa  
                    <br />
                    Los intervalos de quinta son fundamentales en la construcción de acordes y escalas, 
                    y su resonancia fuerte y completa los convierte en uno de los favoritos en la música.
                </p>
            </LesssonCard>

            <Interv5 />

            <LessonsJumper id={9} test={true} />
        </div>
    );
};
