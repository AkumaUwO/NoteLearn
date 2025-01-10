"use client"

import Link from "next/link";

import GenericButton from "@/components/ui/utility/GenericButton";

export default function TestsMenu() {

    const exampleArray = [
        { _id: 1, text: "Bases" }, { _id: 2, text: "idk, texto de ejemplo" }, { _id: 3, text: "No me clickees" }, { _id: 1, text: "Bases" }, { _id: 2, text: "idk, texto de ejemplo" }, { _id: 3, text: "No me clickees" }, { _id: 1, text: "Bases" }, { _id: 2, text: "idk, texto de ejemplo" }, { _id: 3, text: "No me clickees" }, { _id: 1, text: "Bases" }, { _id: 2, text: "idk, texto de ejemplo" }, { _id: 3, text: "No me clickees" },
        { _id: 1, text: "Bases" }, { _id: 2, text: "idk, texto de ejemplo" }, { _id: 3, text: "No me clickees" }
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
                    <div key={index} className="m-5">
                        <Link href={`/tests-menu/test-page/${test._id}`} className="flex items-center">
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