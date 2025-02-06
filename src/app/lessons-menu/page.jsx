"use client";

import { useState, useEffect, useContext } from "react";

import Link from "next/link";

import { UserContex } from "@/contexts/UserContext";

import { LESSON_ARRAY } from "@/utils/lessons&testsUtils";

export default function TestsMenu() {

    const userLessonsDelimiter = async () => {
        if (!userScores) return;

        let lessons

        lessons = LESSON_ARRAY.slice(0, userScores.length + 1);
        
        while (lessons.length < LESSON_ARRAY.length) {
            lessons.push(false);
        };

        setUserLessons(lessons);
    };

    const { userScores } = useContext(UserContex);

    const [userLessons, setUserLessons] = useState(null);

    useEffect(() => {
        if (!userLessons) {
            userLessonsDelimiter();
        };
    });

    if (!userLessons) return;

    return (
        <section className="pt-5 mx-5">

            <h1 className="text-2xl font-extrabold text-fuchsia-700 text-center mb-8">
                Selecciona las Lecciones Disponibles
            </h1>

            <div className="mt-5 sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {userLessons?.map((test, index) => (
                    test ?
                        <div key={index} className="m-5 p-2 border rounded-full border-2 hover:shadow-inner hover:shadow-fuchsia-500 hover:border-fuchsia-500 shadow-lg transition-all duration-300 ease-in-out">
                            <Link
                                href={`/lessons-menu/lessons-page/${test._id}`}
                                className="flex items-center"
                            >
                                <div className="w-fit h-fit">
                                    <div className="w-14 h-14 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-extrabold text-lg rounded-full flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                </div>
                                <p className="ml-2 font-bold text-fuchsia-800 text-lg">
                                    {test.text}
                                </p>
                            </Link>
                        </div>
                        :
                        <div key={index} className="m-5 p-2 border rounded-full border-2 shadow-inner shadow-gray-400 border-gray-500 shadow-lg transition-all duration-300 ease-in-out bg-gray-200">
                            <div className="flex items-center">
                                <div className="w-fit h-fit">
                                    <div className="w-14 h-14 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-extrabold text-lg rounded-full flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                </div>
                                <p className="ml-2 font-bold text-gray-600 text-lg">
                                    Por desbloquear
                                </p>
                            </div>
                        </div>
                ))}
            </div>

        </section>
    );
};
