"use client";

import { useState } from "react";

import PianoComponent from "@/components/test/piano/Piano-Componet";
import GenericButton from "@/components/ui/utility/GenericButton";

export default function Interv3() {
    // Notas específicas en formato MIDI (DO#, RE#, FA#, SOL#, LA#)
    const scale = [60, 64];
    const notes = ["DO", "MI"];

    const [activeNote, setActiveNote] = useState([]);
    const [showNotes, setShowNotes] = useState("");

    const playSecuence = () => {
        scale.forEach((note, index) => {
            setTimeout(() => {
                setShowNotes(notes[index]);
                setActiveNote([note]);
            }, index * 500);
        });

        setTimeout(() => {
            setShowNotes("");
            setActiveNote([]);
        }, scale.length * 500);
    };

    return (
        <div className="w-fit mx-auto">
            {/* Indicador de la nota actual */}
            <div
                className={`mx-auto my-5 w-14 h-14 text-white text-lg font-bold rounded-full flex items-center justify-center transition duration-300 ease-in-out ${
                    showNotes ? "bg-fuchsia-600" : "bg-white"
                }`}
            >
                {showNotes}
            </div>

            {/* Componente del piano */}
            <PianoComponent activeNotes={activeNote} disabled={showNotes === ""} />

            {/* Botón de reproducción */}
            <div className="mt-5 mx-auto w-fit">
                <GenericButton
                    text={"Reproducir Ejemplo"}
                    buttonFunction={playSecuence}
                    disabledCondition={showNotes !== ""}
                />
            </div>
        </div>
    );
}
