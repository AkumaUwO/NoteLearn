import LessonTittle from "../LessonsTittle";
import LesssonCard from "../LessonCard";
import LessonsJumper from "../LessonsJumper";

export default function Lesson4({ lessonId }) {
    return (
        <div className="w-full h-fit p-5">

            <LessonTittle tittle={"Descifrando la Música: Introducción al Cifrado"} lessonId={lessonId} />

            <p className="mt-2 mx-auto w-fit text-base text-gray-500 italic font-light text-center">
                "El cifrado es el lenguaje universal que transforma la música en conocimiento accesible."
                <br />- Anónimo
            </p>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es el Cifrado Musical?
                </h2>
                <p className="mt-2 text-base">
                    El cifrado musical es un sistema que utiliza letras y símbolos para representar acordes. 
                    Es una herramienta esencial para leer, escribir y tocar música en distintos estilos, 
                    especialmente en el jazz, el pop y el rock.
                </p>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Cómo Leer el Cifrado?
                </h2>
                <p className="mt-2 text-base">
                    Cada letra representa una nota base (C para Do, D para Re, etc.), 
                    mientras que los símbolos como ♯ (sostenido) o ♭ (bemol) modifican el tono. 
                    Los números y letras adicionales indican el tipo de acorde, como Cmaj7 o Dm7.
                </p>

                <img
                    src="/images/Leccion2/notasycifrado.jpg"
                    alt="Ubicación de la nota DO"
                    className="w-[60%] h-auto mt-4 mx-auto rounded-md shadow-md"
                />
                <img
                    src="/images/Leccion2/cifrado.jpg"
                    alt="Ubicación de la nota DO"
                    className="w-[60%] h-auto mt-4 mx-auto rounded-md shadow-md"
                />

            </LesssonCard>

            <LessonsJumper id={2} test={false} />
        </div>
    );
};
