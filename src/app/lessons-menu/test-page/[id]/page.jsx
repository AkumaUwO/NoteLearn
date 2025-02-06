"use client"

import { useState, useContext } from "react";
import { useParams } from "next/navigation";

import { PianoContex } from "@/contexts/PianoContext";

import BaseTestStart from "@/components/test/testStart/BaseTestStart";

import TestsSection from "@/components/test/TestsSecction";

export default function TestsPage() {
    
    const testId = useParams();

    const TEST_TITTLES = {
        3: "Notas Músicales",
        4: "Sostenidos y Bemoles",
        6: "Intervalos de 2da",
        7: "Intervalos de 3ra",
        8: "Intervalos de 4ta",
        9: "Intervalos de 5ta",
        10: "Intervalos de 6ta",
        11: "Intervalos de 7ma"
    };

    const [start, setStart] = useState(false);

    const { isPianoLoaded } = useContext(PianoContex);

    if (!isPianoLoaded) return (
        <div className="w-full h-screen place-content-center text-center">
            El Piano esta cargando, espera un momento....
        </div>
    );

    if (!start) return (
        <BaseTestStart
            testId={testId.id}
            start={start}
            setStart={setStart}
            testTittle={TEST_TITTLES}
        />
    );

    return (
        <section className="p-5">
            <TestsSection testId={testId.id} setStart={setStart} testTittle={TEST_TITTLES}/>
        </section>
    );
};