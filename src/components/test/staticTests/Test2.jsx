"use client"

import { useState, useEffect } from "react"

import { get_test2Notes } from "@/api/tests.api";

import Contador from "../Contador";


export default function Test2() {

    const notesMapping = [
        { key: "C", nota: "DO" },
        { key: "D", nota: "RE" },
        { key: "E", nota: "MI" },
        { key: "F", nota: "FA" },
        { key: "G", nota: "SOL" },
        { key: "A", nota: "LA" },
        { key: "B", nota: "SI" }
    ];

    const [notes, setNotes] = useState(null);
    const [actualNote, setActualNote] = useState("");

    const totalTime = 15
    const [seconds, setSeconds] = useState(totalTime);

    const fetchNotes = async () => {
        try {
            const fetchedNotes = await get_test2Notes();

            setNotes(fetchedNotes.testNotes);

        } catch (error) {
            console.error("fetchNotes: ", error);
        };
    };


    /**************************{ UseEffects }**************************/

    useEffect(() => {
        if (!notes) {
            fetchNotes();
        };
    }, [notes]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(prevSeconds => prevSeconds - 1);
            }
        }, 1000);

        console.log(notes);
        console.log(notesMapping);
        
        return () => clearInterval(interval);
    }, [seconds]);


    return (
        <div>
            <Contador seconds={seconds} totalTime={totalTime}/>
            <button type="button" onClick={() => setSeconds(15)}>reset</button>

            <div className="mx-auto mt-5 border rounded-xl border-2 shadow-lg px-4 py-2 bg-transparent">

                <h2 className="text-xl font-semibold text-fuchsia-600">
                    Pulsa la <strong>tecla</strong> correcta en base a la <strong>nota</strong> dada:
                </h2>
                
            </div>
        </div>
    )
};