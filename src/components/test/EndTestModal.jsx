"use client"

import { useContext } from "react";
import Link from "next/link";

import { UserContex } from "@/contexts/UserContext";
import GenericButton from "../ui/utility/GenericButton";

export default function EndTestModal({
    testId,
    testTittle,
    answers,
    trigger,
    win,
    restart,
    maxAnswers
}) {

    const { userScores, saveOrUpdateScore } = useContext(UserContex);

    if (!trigger) return

    const goodAnswers = answers.filter(answer => answer === true);

    const points = goodAnswers.length * 10;

    const oldPoints = userScores.find((score) => {
        if (score.lessonNumber[0] == testId) {
            return score.score[0]
        };
    });

    const barWidth = `${goodAnswers.length * 10}%`;

    const scoreHandeler = async () => {
        saveOrUpdateScore(testId, points);
    };

    return (
        <div>
            <div className="fixed inset-0 bg-black opacity-50 z-10" />

            <div
                className={`w-full sm:w-2/3 h-fit m-auto ${goodAnswers.length > 6 ? "bg-green-50" : goodAnswers.length > 3 ? "bg-yellow-50" : "bg-red-50"} p-5 rounded-2xl shadow-lg inset-0 fixed z-50`}
            >

                <div className="text-center">
                    <div className="flex items-center justify-center mb-5">

                        <div className="flex items-center bg-gradient-to-r from-fuchsia-500 to-purple-600 p-2 rounded-full">

                            <h2 className="text-white text-lg font-bold mx-3">
                                Prueba:
                            </h2>

                            <div className="w-12 h-12 bg-white text-lg rounded-full flex items-center justify-center font-bold text-fuchsia-700">
                                {testId - 2}
                            </div>

                        </div>

                        <h1 className="ml-5 my-3 text-3xl font-extrabold text-fuchsia-600 text-center">
                            {testTittle[testId]}
                        </h1>

                    </div>

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
                    <div>
                        <p className="font-semibold">Preguntas Respondidas</p>
                        <p className="font-semibold w-fit mx-auto">{answers.length}/{maxAnswers}</p>
                    </div>

                    <div>
                        <p className="font-semibold">Preguntas Correctas</p>
                        <p className="font-semibold w-fit mx-auto">{goodAnswers.length}/{answers.length} </p>
                    </div>
                </div>


                <div className="text-center font-bold mt-5 flex justify-evenly">
                    <div>
                        <h2>Puntuación:</h2>
                        <div className="w-full flex justify-center">
                            <div className="flex items-center w-fit bg-gradient-to-r from-fuchsia-500 to-purple-600 p-2 rounded-full mx-auto">
                                <div className="w-10 h-10 bg-white text-lg rounded-full flex items-center justify-center font-bold text-fuchsia-700">
                                    {points}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Tu mejor Puntuación:</h2>
                        <div className="w-full flex justify-center">
                            <div className="flex items-center w-fit bg-gradient-to-r from-fuchsia-500 to-purple-600 p-2 rounded-full mx-auto">
                                <div className="w-10 h-10 bg-white text-lg rounded-full flex items-center justify-center font-bold text-fuchsia-700">
                                    {oldPoints ? oldPoints.score[0] : points}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <Link href={`/lessons-menu/lessons-page/${testId + 1}`} onClick={scoreHandeler}>
                        <GenericButton text={"Siguiente Lección"} styles={"px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"} />
                    </Link>
                </div>

                <div className="text-center mt-5">
                    <GenericButton
                        text={"Reintentar"}
                        buttonFunction={() => {
                            scoreHandeler();
                            restart();
                        }}
                        styles={"px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"} />
                </div>

                <div className="text-center mt-5">
                    <Link href={"/lessons-menu"}>
                        <GenericButton text={"Volver al Menú de Lecciones"} styles={"px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"} onClick={scoreHandeler} />
                    </Link>
                </div>
            </div>
        </div>
    );
};