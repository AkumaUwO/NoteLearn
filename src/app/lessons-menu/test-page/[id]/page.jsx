"use client"

import { useState, useContext } from "react";
import { useParams } from "next/navigation";

import { PianoContex } from "@/contexts/PianoContext";

import TestsSection from "@/components/test/TestsSecction";
import GenericButton from "@/components/ui/utility/GenericButton";

export default function TestsPage() {

    const testId = useParams();

    const [start, setStart] = useState(false);

    const { isPianoLoaded } = useContext(PianoContex);

    if (!isPianoLoaded) return (
        <div className="w-full h-screen place-content-center text-center">
            El Piano esta cargando, espera un momento....
        </div>
    );

    if (!start) return (
        <div className="w-full h-screen place-content-center text-center">
            <GenericButton
                text={"Empezar Prueba"}
                buttonFunction={() => setStart(!start)}
                styles={"px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"}
            />
        </div>
    );

    return (
        <section className="p-5">
            <TestsSection testId={testId.id} setStart={setStart}/>
        </section>
    );
};