"use client"

import { useState, useEffect } from "react"

import { get_test2Notes } from "@/api/tests.api";

import Contador from "../Contador";
import PianoComponent from "../piano/Piano-Componet";
import EndTestModal from "../EndTestModal";


export default function Test2({ setStart }) {

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
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState([]);

    const [endTest, setEndTest] = useState([false, undefined]);

    const totalTime = 15
    const [seconds, setSeconds] = useState(totalTime);

    const fetchNotes = async () => {
        try {
            const fetchedNotes = await get_test2Notes();

            let truncatedNotes = [];

            fetchedNotes.testNotes.map((note) => {
                truncatedNotes.push(note[0]);
            });

            setNotes(truncatedNotes)
            setActualNote(notesMapping.filter(note => note.key.includes(truncatedNotes[0])))

        } catch (error) {
            console.error("fetchNotes: ", error);
        };
    };


    const handlerFunction = (playedNote) => {
        playedNote = playedNote[0];

        if (playedNote === actualNote[0].key) {
            setAnswers(prevAnswers => [
                ...prevAnswers,
                true
            ])

        } else {
            setAnswers(prevAnswers => [
                ...prevAnswers,
                false
            ])
        }


        setActualNote(notesMapping.filter(note => note.key.includes(notes[index + 1])))
        setIndex(index + 1);

        if (index + 1 === 10) {
            setEndTest([true, true])
        };
    };

    const restart = async () => {
        setStart(false);
    }

    /**************************{ UseEffects }**************************/

    useEffect(() => {
        if (!notes) {
            fetchNotes();
        };
    }, [notes]);

    useEffect(() => {
        if (seconds > 0 && !endTest[0]) {
            const interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(prevSeconds => prevSeconds - 1);
                }
            }, 1000);

            return () => clearInterval(interval);
        };

        if (seconds === 0) {
            setEndTest([true, false]);
        };
    }, [seconds]);


    return (
        <div>
            <Contador seconds={seconds} totalTime={totalTime} />

            <div className="mx-auto mt-5 border rounded-xl border-2 shadow-lg px-4 py-2 bg-transparent">

                <h1 className="text-xl font-semibold text-fuchsia-600">
                    Pulsa la <strong>tecla</strong> correcta en base a la <strong>nota natural</strong> dada:
                </h1>

                <div className="w-full mt-5 flex justify-center">
                    <div className="w-20 h-20 px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600  text-white text-2xl font-bold rounded-full flex items-center justify-center">
                        {actualNote[0]?.nota}
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-20 h-8 bg-fuchsia-400 text-white text-lg font-bold rounded-full flex items-center justify-center">
                        {index}/{notes?.length}
                    </div>
                </div>


                <div className="w-full mt-5 flex justify-center">
                    <PianoComponent onPlayFunction={handlerFunction} disabled={seconds === 0 || index === 10} />
                </div>

            </div>
            <EndTestModal answers={answers} win={endTest[1]} trigger={endTest[0]} restart={restart}/>
        </div>
    )
};