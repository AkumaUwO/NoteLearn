import LesssonCard from "../LessonCard";
import LessonsJumper from "../LessonsJumper";
import LessonTittle from "../LessonsTittle";
import SustainPiano from "@/components/test/piano/SustainPiano";

export default function Lesson4({ lessonId }) {
    return (
        <div className="w-full h-fit sm:p-5">

            <LessonTittle tittle={"Lección de Piano: Alteraciones (Sostenidos y Bemoles)"} lessonId={lessonId} />

            <p className="mt-2 mx-auto w-fit text-base text-gray-500 italic font-light text-center">
                "La música es la clave para el alma. Las alteraciones nos permiten 
                explorar nuevos mundos sonoros."
                <br />- Anónimo
            </p>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué son las Alteraciones?
                </h2>
                <p className="mt-2 text-base">
                    Las alteraciones son símbolos que modifican el tono de las 
                    notas musicales. Existen tres tipos principales:
                    el sostenido, el bemol y el becuadro. Estas alteraciones nos 
                    permiten tocar notas fuera de la escala natural,
                    ampliando las posibilidades musicales en composiciones y en la
                    interpretación de piezas.
                </p>
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Sostenidos (♯)
                </h2>
                <p className="mt-2 text-base">
                    El sostenido (♯) aumenta el tono de la nota en medio tono. 
                    Si por ejemplo tocamos la nota DO, al agregarle
                    el sostenido, se convierte en DO sostenido (C♯), que está 
                    medio tono por encima de DO. Es una alteración
                    que hace que el sonido de la nota sea más agudo.
                </p>
                <br />
                <img
                    src="/images/Leccion4/sostenidos.png"
                    alt="Sostenido"
                    className="w-full sm:w-[60%]h-auto mt-4 mx-auto rounded-md shadow-md"
                />
                <br />
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Bemoles (♭)
                </h2>
                <p className="mt-2 text-base">
                    El bemol (♭) disminuye el tono de la nota en medio tono. 
                    Por ejemplo, la nota RE cuando se le agrega
                    el bemol se convierte en RE bemol (D♭), que está medio 
                    tono por debajo de RE. Es una alteración que
                    hace que el sonido de la nota sea más grave.
                </p>
                <br />
                <img
                    src="/images/Leccion4/bemoles.png"
                    alt="Bemol"
                    className="w-full sm:w-[60%]h-auto mt-4 mx-auto rounded-md shadow-md"
                />
                <br />
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    El Becuadro (♮)
                </h2>
                <p className="mt-2 text-base">
                    El becuadro (♮) se utiliza para anular una alteración previa, 
                    volviendo a la nota a su estado natural.
                    Si se había tocado un DO sostenido (C♯), al aplicar el 
                    becuadro, volvemos al DO natural (C).
                </p>
                <br />
                <img
                    src="/images/Leccion4/becuadro.jpg"
                    alt="Becuadro"
                    className="w-full sm:w-[60%]h-auto mt-4 mx-auto rounded-md shadow-md"
                />
                <br />
            </LesssonCard>

            <LesssonCard>
                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Ejemplos de Alteraciones en el Piano
                </h2>
                <p className="mt-2 text-base">
                    A continuación, verás cómo las alteraciones afectan las notas en el piano:
                </p>

                <ul className="my-2 flex justify-evenly">
                    <li className="w-12 h-12 bg-fuchsia-600 text-white text-lg rounded-full flex items-center justify-center">
                        <strong>C♯</strong></li>

                    <li className="w-12 h-12 bg-fuchsia-600 text-white text-lg rounded-full flex items-center justify-center">
                        <strong>D#</strong></li>

                    <li className="w-12 h-12 bg-fuchsia-600 text-white text-lg rounded-full flex items-center justify-center">
                        <strong>F♯</strong></li>

                    <li className="w-12 h-12 bg-fuchsia-600 text-white text-lg rounded-full flex items-center justify-center">
                        <strong>G#</strong></li>

                    <li className="w-12 h-12 bg-fuchsia-600 text-white text-lg rounded-full flex items-center justify-center">
                        <strong>A♯</strong></li>
                </ul>

                <p className="text-center">
                    Estas alteraciones permiten 
                    modificar las notas dentro de 
                    la escala para ajustarse a 
                    distintas tonalidades. 
                    <br /><strong>Para tocarlas en el 
                        piano, debes presionar las 
                        teclas negras correspondientes.</strong>
                </p>
                <br /><br />
            </LesssonCard>

            <SustainPiano />

            <LessonsJumper id={4} test={true} />
            
        </div>
    );
};
