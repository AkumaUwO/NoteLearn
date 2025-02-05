import Link from "next/link";
import GenericButton from "../ui/utility/GenericButton";

export default function EndTestModal({ testId, answers, trigger, win, restart }) {

    if (!trigger) return

    const goodAnswers = answers.filter(answer => answer === true);

    const points = goodAnswers.length * 10;

    const barWidth = `${goodAnswers.length * 10}%`;

    return (
        <div>
            <div className="fixed inset-0 bg-black opacity-50 z-10" />

            <div
                className={`w-2/3 h-fit m-auto ${goodAnswers.length > 6 ? "bg-green-50" : goodAnswers.length > 3 ? "bg-yellow-50" : "bg-red-50"} p-5 rounded-2xl shadow-lg inset-0 fixed z-50`}
            >

                <div className="text-center">
                    <h1 className="text-xl font-bold text-fuchsia-600">
                        Resultados:
                    </h1>

                    <div
                        className={`my-3 h-2 mx-auto rounded-full transition-all duration-1000 ${goodAnswers.length > 6 ? "bg-green-500" : goodAnswers.length > 3 ? "bg-yellow-500" : "bg-red-500"}`}
                        style={{ width: barWidth }}
                    />

                    {win ?
                        <h2 className="font-semibold">
                            Prueba completada
                        </h2>
                        :
                        <h2 className="font-semibold">
                            Fin del Tiempo
                        </h2>
                    }
                </div>

                <div className="flex justify-evenly">
                    <p className="font-semibold">{answers.length}/10 Preguntas Respondidas</p>

                    <p className="font-semibold">{goodAnswers.length}/{answers.length} Preguntas Correctas</p>
                </div>


                <div className="text-center font-bold mt-5">
                    <h2>Puntuación:</h2>
                    <div className="w-full flex justify-center">
                        <div className="w-10 h-10 px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-lg font-bold rounded-full flex items-center justify-center">
                            {points}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <Link href={`/lessons-menu/lessons-page/${testId + 1}`}>
                        <GenericButton text={"Siguiente Lección"} styles={"px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"} />
                    </Link>
                </div>

                <div className="text-center mt-5">
                    <GenericButton text={"Reintentar"} buttonFunction={restart} styles={"px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"} />
                </div>

                <div className="text-center mt-5">
                    <Link href={"/lessons-menu"}>
                        <GenericButton text={"Volver al Menú de Lecciones"} styles={"px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};