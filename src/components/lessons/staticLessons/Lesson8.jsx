import LessonTittle from "../LessonsTittle";
import LesssonCard from "../LessonCard";
import LessonsJumper from "../LessonsJumper";
import Interv4 from "@/components/test/piano/Interv4";

export default function Lesson8({ lessonId }) {
    return (
        <div className="w-full h-fit p-5">

            <LessonTittle tittle={"Descubriendo los Intervalos de Cuarta"} lessonId={lessonId} />

            <p className="mt-2 mx-auto w-fit text-base text-gray-500 italic font-light text-center">
                "La cuarta justa, sólida y equilibrada, es el puente entre el sonido y la armonía."
                <br />- Anónimo
            </p>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es un Intervalo de Cuarta?
                </h2>
                <p className="mt-2 text-base">
                    Un intervalo de cuarta es la distancia entre una nota y otra que se encuentra a 
                    cuatro notas de distancia en una escala, contando ambas. Este intervalo es muy común 
                    en la música y tiene un sonido estable y fuerte.
                </p>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Tipos de Intervalos de Cuarta
                </h2>
                <p className="mt-2 text-base">
                    Los intervalos de cuarta se clasifican principalmente en dos tipos:
                </p>
                <ul className="list-disc ml-5 mt-2">
                    <li><strong>Cuarta Justa (P4):</strong> Tiene una distancia de dos tonos y un semitono, como Do a Fa.</li>
                    <li><strong>Cuarta Aumentada (#4):</strong> Tiene una distancia de tres tonos completos, como Fa a Si.</li>
                </ul>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Ejemplos Prácticos
                </h2>
                <p className="mt-2 text-base">
                    <strong>Cuarta Justa:</strong> Do-Fa, Sol-Do  
                    <br />
                    <strong>Cuarta Aumentada:</strong> Fa-Si  
                    <br />
                    Los intervalos de cuarta son esenciales en la formación de acordes suspendidos y 
                    en el desarrollo de melodías que buscan equilibrio y tensión.
                </p>
            </LesssonCard>

            <Interv4 />

            <LessonsJumper id={8} test={true} />
        </div>
    );
};
