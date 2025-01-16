"use client"

import { useContext } from "react";

import { PianoContex } from "@/contexts/PianoContext";

import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import "@/components/test/piano/piano-styles.css"

export default function PianoComponent({ firstNoteProp, lasNoteProp, width, onPlayFunction, ...props }) {

    const { pianoSounds, isPianoLoaded } = useContext(PianoContex);

    const firstNote = firstNoteProp || MidiNumbers.fromNote('c4');
    const lastNote = lasNoteProp || MidiNumbers.fromNote('b4');

    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote,
        lastNote,
        keyboardConfig: KeyboardShortcuts.QWERTY_ROW,
    });

    const playNote = (midiNumber) => {
        const activeNote = MidiNumbers.getAttributes(midiNumber).note;

        pianoSounds.start({ note: activeNote })

        if (onPlayFunction) onPlayFunction(activeNote);
    };

    const stopNote = (midiNumber) => {
    };

    return (
        <section>
            {isPianoLoaded ?
                <Piano
                    noteRange={{ first: firstNote, last: lastNote }}
                    playNote={playNote}
                    stopNote={stopNote}
                    width={width || 400}
                    keyboardShortcuts={keyboardShortcuts}
                    {...props}
                />
                :
                "El piano esta cargando, espera un momento"
            }
        </section>
    );
};