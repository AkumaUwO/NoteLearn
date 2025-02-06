import LessonTittle from "../LessonsTittle";
import LesssonCard from "../LessonCard";
import LessonsJumper from "../LessonsJumper";
import Interv6 from "@/components/test/piano/Interv6";
import Furelise from "@/components/test/piano/FürElise";

export default function Lesson10({ lessonId }) {
    return (
        <div className="w-full h-fit p-5">

            <LessonTittle tittle={"Explorando los Intervalos de Sexta"} lessonId={lessonId} />

            <p className="mt-2 mx-auto w-fit text-base text-gray-500 italic font-light text-center">
                "La sexta es el vínculo entre la armonía y la melodía, trayendo un toque de dulzura a la música."
                <br />- Anónimo
            </p>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es un Intervalo de Sexta?
                </h2>
                <p className="mt-2 text-base">
                    Un intervalo de sexta es la distancia entre dos notas que se encuentran a seis posiciones de distancia en una escala. 
                    Es un intervalo que suena muy armónico y se utiliza frecuentemente en melodías y armonías.
                </p>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Tipos de Intervalos de Sexta
                </h2>
                <p className="mt-2 text-base">
                    Los intervalos de sexta se dividen en dos tipos principales:
                </p>
                <ul className="list-disc ml-5 mt-2">
                    <li><strong>Sexta Mayor (M6):</strong> Tiene una distancia de cuatro tonos y un semitono, como Do a La.</li>
                    <li><strong>Sexta Menor (m6):</strong> Tiene una distancia de tres tonos y un semitono, como Do a La♭.</li>
                </ul>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Ejemplos Prácticos
                </h2>
                <p className="mt-2 text-base">
                    <strong>Sexta Mayor:</strong> Do-La, Re-Si  
                    <br />
                    <strong>Sexta Menor:</strong> Do-La♭, Fa-Re♭  
                    <br />
                    Los intervalos de sexta son comunes en la música clásica y popular, 
                    y son esenciales para la creación de armonías y melodías agradables.
                </p>
            </LesssonCard>

            <Interv6 />

            <LessonsJumper id={10} test={true} />
        </div>
    );
};
