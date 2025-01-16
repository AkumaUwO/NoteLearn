'use client'

import {
    createContext,
    useState,
    useEffect
} from "react";

import { SplendidGrandPiano } from "smplr";

export const PianoContex = createContext();

export const PianoProvider = ({ children }) => {

    const [isPianoLoaded, setPianoLoaded] = useState(false);
    const [pianoSounds, setPianoSounds] = useState();

    const pianoLoader = () => {
        if (!pianoSounds) {
            const context = new window.AudioContext();
            setPianoSounds(new SplendidGrandPiano(context));
        };

        if (pianoSounds) {
            console.log("Cargando sonidos")
            pianoSounds.load.then(() => {
                console.log("Sonidos Cargandos")
                setPianoLoaded(true);
            });
        };
    };

    useEffect(() => {
        try {
            pianoLoader();
        } catch (error) {
            console.log("Error en PianoContext: ", error);
            pianoLoader();
        }
    }, [pianoSounds]);


    return (
        <PianoContex.Provider value={{
            pianoSounds,
            isPianoLoaded
        }}>
            {children}
        </PianoContex.Provider>
    )
}