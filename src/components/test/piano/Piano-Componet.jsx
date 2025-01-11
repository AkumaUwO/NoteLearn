"use client"

import { useContext } from "react";

import { PianoContex } from "@/contexts/PianoContext";

import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";

export default function PianoComponent() {

    const { pianoSounds, isPianoLoaded } = useContext(PianoContex);

    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f5');

    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote,
        lastNote,
        keyboardConfig: KeyboardShortcuts.QWERTY_ROW,
    });

    const playNote = (midiNumber) => {
        const activeNote = MidiNumbers.getAttributes(midiNumber).note;

        pianoSounds.start({ note: activeNote })

        console.log(activeNote)
    };

    const stopNote = (midiNumber) => {
        const note = MidiNumbers.getAttributes(midiNumber).note;

        console.log(note)
    };

    return (
        <section>
            {isPianoLoaded ?
                <Piano
                    noteRange={{ first: firstNote, last: lastNote }}
                    playNote={playNote}
                    stopNote={stopNote}
                    width={800}
                    keyboardShortcuts={keyboardShortcuts}
                />
                :
                "Piano is Loading"
            }
        </section>
    );
};