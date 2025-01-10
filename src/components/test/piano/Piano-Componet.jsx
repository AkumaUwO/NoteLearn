"use client"

import { useState } from "react";

import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import { SplendidGrandPiano } from "smplr";

export default function PianoComponent() {

    //const context = new AudioContext();
    //const pianoSounds = new SplendidGrandPiano(context);

    const [isPianoLoaded, setPianoLoaded] = useState(true);

    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f5');

    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote,
        lastNote,
        keyboardConfig: KeyboardShortcuts.QWERTY_ROW,
    });

    const playNote = (midiNumber) => {
        const activeNote = MidiNumbers.getAttributes(midiNumber).note;

       // pianoSounds.start({ note: activeNote })

        console.log(activeNote)
    };

    const stopNote = (midiNumber) => {
        const note = MidiNumbers.getAttributes(midiNumber).note;

        console.log(note)
    };

    /*pianoSounds.load.then(() => {
        setPianoLoaded(true);
    })*/

    return (
        <section>
            {isPianoLoaded ?
                <Piano
                    noteRange={{ first: firstNote, last: lastNote }}
                    playNote={playNote}
                    stopNote={stopNote}
                    width={1000}
                    keyboardShortcuts={keyboardShortcuts}
                />
                :
                "Piano is Loading"
            }
        </section>
    );
};