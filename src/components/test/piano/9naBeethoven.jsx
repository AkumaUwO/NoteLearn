"use client";

import { useState } from "react";

import PianoComponent from "@/components/test/piano/Piano-Componet";
import GenericButton from "@/components/ui/utility/GenericButton";

export default function Interv7() {
    // Notas específicas en formato MIDI
    const scale = [64, 64, 65, 67, 67, 65, 64, 62, 60, 60, 62, 64, 64, 62, 62, 
        64, 64, 65, 67, 67, 65, 64, 62, 60, 60, 62, 64, 62, 60, 60];
    const notes = ["E", "E", "F", "G", "G", "F", "E", "D", "C", "C", "D", "E", "E", 
        "D", "D", "E", "E", "F", "G", "G", "F", "E", "D", "C", "C", "D", "E", "D", "C", "C"];

    const [activeNote, setActiveNote] = useState([]);
    const [showNotes, setShowNotes] = useState("");

    const playSecuence = () => {
        scale.forEach((note, index) => {
            setTimeout(() => {
                // Detener la nota previamente activa
                setActiveNote([]);
                setTimeout(() => {
                    // Reproducir la nueva nota
                    setShowNotes(notes[index]);
                    setActiveNote([note]);
                }, 50); // Pequeña pausa entre detener y tocar
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
