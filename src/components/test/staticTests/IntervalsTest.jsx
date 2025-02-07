"use client"

import { useState, useEffect } from "react"

import { get_test6Notes } from "@/api/tests.api";

import Contador from "../Contador";
import PianoComponent from "../piano/Piano-Componet";
import EndTestModal from "../EndTestModal";


export default function IntervalsTest({ testId, testTittle, setStart, interval }) {

    const notesMapping = [
        { key: "C", auxKey: "C", nota: "DO" },
        { key: "D", auxKey: "D", nota: "RE" },
        { key: "E", auxKey: "E", nota: "MI" },
        { key: "F", auxKey: "F", nota: "FA" },
        { key: "G", auxKey: "G", nota: "SOL" },
        { key: "A", auxKey: "A", nota: "LA" },
        { key: "B", auxKey: "B", nota: "SI" },
        { key: "Db", auxKey: "C#", nota: "DO #" },
        { key: "Eb", auxKey: "D#", nota: "RE #" },
        { key: "Gb", auxKey: "F#", nota: "FA #" },
        { key: "Ab", auxKey: "G#", nota: "SOL #" },
        { key: "Bb", auxKey: "A#", nota: "LA #" },
    ];

    const intervals = ["major", "minor", /*"augmented"*/];

    const [notes, setNotes] = useState(null);
    const [actualNote, setActualNote] = useState("");
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState([]);

    const [endTest, setEndTest] = useState([false, undefined]);

    const totalTime = 15
    const [seconds, setSeconds] = useState(totalTime);

    const fetchNotes = async () => {
        try {
            const randomInterval = () => {
                if(testId !== 9) {
                    return intervals[Math.floor(Math.random() * intervals.length)];
                } else {
                    return "augmented";
                };
            };

            const fetchedNotes = await get_test6Notes(interval, randomInterval());

            let truncatedNotes = [];

            fetchedNotes.notesWithIntervals.map((note) => {
                truncatedNotes.push(note);
            });

            setNotes(truncatedNotes);
            setActualNote(notesMapping.find(note => note.key.includes(truncatedNotes[0].note)))

        } catch (error) {
            console.error("fetchNotes: ", error);
        };
    };


    const handlerFunction = (playedNote) => {
        playedNote = playedNote.replace(/\d+/g, "");

        const formatedNote = notesMapping.find(note => note.key.includes(playedNote))

        //console.log(formatedNote.auxKey === notes[index].targetNote, formatedNote, actualNote, notes[index]);


        if (formatedNote.auxKey === notes[index].targetNote) {
            setAnswers(prevAnswers => [
                ...prevAnswers,
                true
            ]);
        } else {
            setAnswers(prevAnswers => [
                ...prevAnswers,
                false
            ]);
        };

        console.log(index);

        setActualNote(notesMapping.find(note => note.key.includes(notes[index + 1]?.note)))
        setIndex(index + 1);

        if (index === notes?.length - 1) {
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

    if (!notes) return;

    return (
        <div>
            <Contador seconds={seconds} totalTime={totalTime} />

            <div className="mx-auto mt-5 border rounded-xl border-2 shadow-lg px-4 py-2 bg-transparent">

                <h1 className="text-xl font-semibold text-fuchsia-600">
                    Pulsa la <strong>tecla</strong> correspondiente en base al <strong>intervalo</strong> dado:
                </h1>

                <div className="w-full mt-5 flex justify-center">
                    <div className="w-20 h-20 px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600  text-white text-2xl font-bold rounded-full flex items-center justify-center">
                        {actualNote?.nota}
                    </div>
                </div>
                <div className="w-fit mx-auto">
                    <div className="bg-fuchsia-400 text-white text-lg font-bold rounded-full px-4 py-2">
                        <h2 className="text-xl font-semibold text-white">{notes[index]?.interval}</h2>
                    </div>

                    <div className="w-20 h-8 bg-fuchsia-400 text-white text-lg font-bold rounded-full flex items-center justify-center mx-auto">
                        {index}/{notes?.length}
                    </div>
                </div>

                <div className="w-full mt-5 flex justify-center">
                    <PianoComponent onPlayFunction={handlerFunction} disabled={seconds === 0 || index === notes?.length} />
                </div>

            </div>
            <EndTestModal testId={testId} testTittle={testTittle} answers={answers} win={endTest[1]} trigger={endTest[0]} restart={restart} maxAnswers={notes.length}/>
        </div>
    )
};