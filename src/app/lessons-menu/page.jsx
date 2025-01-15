"use client"

import Link from "next/link";

import GenericButton from "@/components/ui/utility/GenericButton";

export default function TestsMenu() {

    const exampleArray = [
        { _id: 1, text: "Introducción a la Música" },
    ]

    return (
        <section className="pt-5 mx-5">

            <h1
                className=" text-xl font-bold text-fuchsia-900 italic underline underline-offset-8"
            >
                Elige una evaluación para probar tus habilidades:
            </h1>

            <div className="mt-5 sm:grid sm:grid-cols-2 xl:grid-cols-3">
                {exampleArray.map((test, index) => (
                    <div key={index} className="m-5 p-2 border rounded-full border-2 hover:shadow-inner hover:shadow-fuchsia-500 hover:border-fuchsia-500 shadow-lg transition-all duration-300 ease-in-out">
                        <Link
                            href={`/lessons-menu/lessons-page/${test._id}`}
                            className="flex items-center"
                        >
                            <GenericButton
                                text={index + 1}
                                styles={"w-12 h-12"}
                            />
                            <p className="ml-2 font-bold italic underline underline-offset-4 decoration-2 decoration-fuchsia-500">
                                {test.text}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    );
};