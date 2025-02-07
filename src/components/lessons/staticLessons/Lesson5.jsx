import LessonTittle from "../LessonsTittle";
import LesssonCard from "../LessonCard";
import LessonsJumper from "../LessonsJumper";

export default function Lesson5({ lessonId }) {
    return (
        <div className="w-full h-fit sm:p-5">

            <LessonTittle tittle={"Introducción a los Intervalos Musicales"} lessonId={lessonId} />

            <p className="mt-2 mx-auto w-fit text-base text-gray-500 italic font-light text-center">
                "La música es el arte de las relaciones entre sonidos. Los intervalos son el alma de estas conexiones."
                <br />- Anónimo
            </p>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué son los Intervalos?
                </h2>
                <p className="mt-2 text-base">
                    Los intervalos son la distancia entre dos notas musicales. 
                    Pueden ser ascendentes, cuando vamos de una nota más grave a una más aguda, 
                    o descendentes, cuando hacemos el recorrido inverso. 
                </p>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Clasificación de los Intervalos
                </h2>
                <p className="mt-2 text-base">
                    Los intervalos se clasifican según dos criterios principales:
                </p>
                <ul className="list-disc ml-5 mt-2">
                    <li><strong>Por número:</strong> Indica la cantidad de notas entre las dos, incluyendo ambas.</li>
                    <li><strong>Por calidad:</strong> Define el carácter del intervalo, como mayor, menor, justo, aumentado o disminuido.</li>
                </ul>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Importancia de los Intervalos
                </h2>
                <p className="mt-2 text-base">
                    Entender los intervalos es fundamental para la composición, la interpretación, 
                    y el análisis musical. Nos permiten construir escalas, acordes y melodías, 
                    conectando las notas de manera armónica y expresiva.
                </p>
            </LesssonCard>

            <LessonsJumper id={5} test={false} />
        </div>
    );
};
