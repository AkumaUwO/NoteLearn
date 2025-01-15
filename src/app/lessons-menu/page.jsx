"use client";

import Link from "next/link";

import GenericButton from "@/components/ui/utility/GenericButton";

export default function TestsMenu() {

    const exampleArray = [
        { _id: 1, text: "Introducción a los Principios de la Música" },
        { _id: 2, text: "Fundamentos Básicos en el Piano" },
    ];

    return (
        <section className="pt-5 mx-5">

            <h1 className="text-2xl font-extrabold text-fuchsia-700 text-center mb-8">
                Selecciona las Lecciones Disponibles
            </h1>

            <div className="mt-5 sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {exampleArray.map((test, index) => (
                    <div key={index} className="m-5 p-2 border rounded-full border-2 hover:shadow-inner hover:shadow-fuchsia-500 hover:border-fuchsia-500 shadow-lg transition-all duration-300 ease-in-out">
                        <Link
                            href={`/lessons-menu/lessons-page/${test._id}`}
                            className="flex items-center"
                        >
                            <div className="w-fit h-fit">
                                <div className="w-14 h-14 bg-fuchsia-600 text-white font-extrabold text-lg rounded-full flex items-center justify-center">
                                    {index + 1}
                                </div>
                            </div>
                            <p className="ml-2 font-bold text-fuchsia-800 text-lg">
                                {test.text}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    );
};
