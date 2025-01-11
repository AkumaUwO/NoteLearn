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

    useEffect(() => {
        try {
            if (!pianoSounds) {
                console.log("Definiendo sonidos")
                const context = new AudioContext();
                setPianoSounds(new SplendidGrandPiano(context));
            };
            
            if (pianoSounds) {
                console.log("Cargando sonidos")
                pianoSounds.load.then(() => {
                    console.log("Sonidos Cargandos")
                    setPianoLoaded(true);
                });
            };
        } catch (error) {
            console.error("Error en PianoContext: ", error)
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