"use client"

import { useContext } from "react";

import { PianoContex } from "@/contexts/PianoContext";

import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";

export default function PianoComponent() {

    const { pianoSounds, isPianoLoaded } = useContext(PianoContex);

    const firstNote = MidiNumbers.fromNote('c4');
    const lastNote = MidiNumbers.fromNote('b4');

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
        console.log(midiNumber)
    };

    return (
        <section>
            {isPianoLoaded ?
                <Piano
                    noteRange={{ first: firstNote, last: lastNote }}
                    playNote={playNote}
                    stopNote={stopNote}
                    width={400}
                    keyboardShortcuts={keyboardShortcuts}
                    activeNotes={[60, 62, 64, 65, 67, 69, 71]}
                />
                :
                "Piano is Loading"
            }
        </section>
    );
};