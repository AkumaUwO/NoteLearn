
import Link from "next/link";
import { LESSON_ARRAY } from "@/utils/lessons&testsUtils";

export default function ScoresTable({ scores }) {
    if (!scores) return;

    return (
        <div className="mx-auto mt-5 w-full border rounded-xl border-2 shadow-lg px-4 py-2 bg-transparent">
            <h2 className="text-fuchsia-700 text-lg font-bold mx-3">
                Tus Puntuaciones:
            </h2>

            <table className="table-auto w-full border-collapse mt-4 overflow-hidden shadow-inner shadow-fuchsia-400 sm:rounded-[20px]">
                <thead>
                    <tr className="bg-fuchsia-200">
                        <th className="text-lg text-fuchsia-900  font-bold py-1.5 px-4">

                        </th>
                        <th className="text-lg text-fuchsia-900  font-bold py-1.5 px-4 ">
                            Nombre de la Lección:
                        </th>
                        <th className="text-lg text-fuchsia-900  font-bold py-1.5 px-4">
                            Puntuación:
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <th className="font-normal py-1.5 px-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-lg text-white rounded-full flex items-center justify-center font-bold text-fuchsia-700">
                                    {score.lessonNumber[0]}
                                </div>
                            </th>
                            <th className="font-normal py-1.5 px-4">
                                <Link href={`/lessons-menu/lessons-page/${score.lessonNumber[0]}`}><strong>{LESSON_ARRAY[score.lessonNumber[0] - 1].text}</strong></Link>
                            </th>
                            <th className="font-normal py-1.5 px-4">
                                <div className="flex items-center w-fit bg-gradient-to-r from-fuchsia-500 to-purple-600 p-2 rounded-full mx-auto">
                                    <div className="w-10 h-10 bg-white text-lg rounded-full flex items-center justify-center font-bold text-fuchsia-700">
                                        {score.score[0]}
                                    </div>
                                </div>
                            </th>

                        </tr>
                    ))}

                </tbody>

            </table>
        </div >
    );
};