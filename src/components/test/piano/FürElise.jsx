"use client";

import { useState } from "react";

import PianoComponent from "@/components/test/piano/Piano-Componet";
import GenericButton from "@/components/ui/utility/GenericButton";

export default function IntervFurElise() {
    // Notas específicas en formato MIDI para Für Elise con las octavas correctas
    const scale = [
        76, 75, 76, 75, 76,  // E5 D#5 E5 D#5 E5
        71, 74, 72, 69,      // B4 D5 C5 A4
        60, 64, 69, 71,      // C4 E4 A4 B4
        64, 68, 71, 72       // E4 G#4 B4 C5
    ];
    const notes = [
        "E5", "D#5", "E5", "D#5", "E5",  // E5 D#5 E5 D#5 E5
        "B4", "D5", "C5", "A4",          // B4 D5 C5 A4
        "C4", "E4", "A4", "B4",          // C4 E4 A4 B4
        "E4", "G#4", "B4", "C5"          // E4 G#4 B4 C5
    ];

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
                    text={"Reproducir Für Elise"}
                    buttonFunction={playSecuence}
                    disabledCondition={showNotes !== ""}
                />
            </div>
        </div>
    );
}
