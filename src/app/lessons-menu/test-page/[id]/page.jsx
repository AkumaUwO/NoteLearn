"use client"

import { useState, useContext } from "react";
import { useParams } from "next/navigation";

import { PianoContex } from "@/contexts/PianoContext";

import BaseTestStart from "@/components/test/testStart/BaseTestStart";

import TestsSection from "@/components/test/TestsSecction";

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
        <BaseTestStart
            testId={testId.id}
            start={start}
            setStart={setStart}
        />
    );

    return (
        <section className="p-5">
            <TestsSection testId={testId.id} setStart={setStart} />
        </section>
    );
};