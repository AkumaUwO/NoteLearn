"use client"

import { useContext } from "react";
import Link from "next/link";

import { UserContex } from "@/contexts/UserContext";

export default function LessonsJumper({ id, test }) {

    const { saveOrUpdateScore } = useContext(UserContex);

    const createScoreTrigger = async () => {
        await saveOrUpdateScore(id, 10);
    };

    return (
        <div>
            <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-lg rounded-full flex items-center justify-center mx-auto mt-5 sm:hidden">
                {id}
            </div>
            <div className="my-5 mx-auto w-fit h-fit flex items-center">

                {id > 1 ?
                    <div className={`${test ? "w-[250px] flex justify-end" : ""}`}>
                        <Link
                            className={"mx-2 flex items-center"}
                            href={`/lessons-menu/lessons-page/${id - 1}`}
                        >
                            <i className="ri-arrow-left-s-line text-2xl font-bold text-fuchsia-800"></i>
                            <p className="font-bold underline decoration-2 decoration-fuchsia-500">
                                Anterior Lección
                            </p>
                        </Link>
                    </div>
                    :
                    <div className="w-[120px] mx-2"></div>
                }

                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-lg rounded-full flex items-center justify-center hidden sm:inline-flex">
                    {id}
                </div>

                {test ?
                    <Link
                        className="mx-2"
                        href={`/lessons-menu/test-page/${id}`}
                    >
                        <div className="flex items-center p-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl ">
                            <p className="text-white sm:text-lg font-bold mx-3">
                                Prueba lo Aprendido
                            </p>
                            <div className="w-8 h-8 bg-white text-lg rounded-full flex items-center justify-center font-bold">
                                <i className="ri-arrow-right-s-fill text-lg text-fuchsia-600"></i>
                            </div>
                        </div>
                    </Link>
                    :
                    <Link
                        className="mx-2 flex items-center"
                        href={`/lessons-menu/lessons-page/${id + 1}`}
                        onClick={createScoreTrigger}
                    >
                        <p className="font-bold underline decoration-2 decoration-fuchsia-500">Siguiente Lección</p>
                        <i className="ri-arrow-right-s-line text-2xl font-bold text-fuchsia-800"></i>
                    </Link>
                }
            </div>
        </div>
    );
};