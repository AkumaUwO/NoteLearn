"use client"

import { useState } from "react";

import PianoComponent from "@/components/test/piano/Piano-Componet";
import GenericButton from "@/components/ui/utility/GenericButton";

export default function DoSiPiano() {

    const scale = [60, 62, 64, 65, 67, 69, 71];
    const notes = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];

    const [activeNote, setActiveNote] = useState([]);
    const [showNotes, setShowNotes] = useState("");

    const playSecuence = () => {
        scale.forEach((note, index) => {
            setTimeout(() => {
                setShowNotes(notes[index])
                setActiveNote([note]);
            }, index * 500);
        });

        setTimeout(() => {
            setShowNotes("")
            setActiveNote([]);
        }, scale.length * 500);
    };

    return (
        <div className="w-fit mx-auto">
            <div className={`mx-auto my-5 w-14 h-14 text-white text-lg font-bold rounded-full flex items-center justify-center transition duration-300 ease-in-out ${showNotes?"bg-gradient-to-r from-fuchsia-500 to-purple-600":"bg-white"}`}>
                {showNotes}
            </div>

            <PianoComponent activeNotes={activeNote} disabled={showNotes === ""}/>

            <div className="mt-5 mx-auto w-fit">
                <GenericButton
                    text={"Reproducir Ejemplo"}
                    buttonFunction={playSecuence}
                    disabledCondition={showNotes !== ""}
                    styles={"px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"}
                />
            </div>
        </div>
    );
};