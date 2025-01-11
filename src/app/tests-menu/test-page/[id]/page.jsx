"use client"

import { useEffect, useState } from "react";

import { Vex } from "vexflow";

import PianoComponent from "@/components/test/piano/Piano-Componet";
import Contador from "@/components/test/Contador";
import GenericButton from "@/components/ui/utility/GenericButton";

export default function TestsPage() {

    const [start, setStart] = useState(false);

    useEffect(() => {
        if (start) {
            // Crea un SVG para el pentagrama 
            const div = document.getElementById("pentagram");
            const renderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);

            // Configuración del tamaño 
            const context = renderer.getContext();
            renderer.resize(500, 125);

            // Crea pentagrama 
            const stave = new Vex.Flow.Stave(10, 0, 480);
            stave.addClef("treble").addTimeSignature("4/4");
            stave.setContext(context).draw();

            // Notas 
            const notes = [
                new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),
                new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
                new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "q" }),
                new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" }),
            ];

            // Agrega las notas al pentagrama 
            const voice = new Vex.Flow.Voice({
                num_beats: 4,
                beat_value: 4,
            }).addTickables(notes);

            const formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 400);
            voice.draw(context, stave);
        };
    }, [start]);

    return (
        <section className="p-5">

            {start ?
                <div>
                    <div>
                        <Contador />
                    </div>

                    <div className="mt-5">
                        <h2 className="font-bold italic underline underline-offset-4 decoration-2 decoration-fuchsia-500">
                            Identifica en el piano la nota mostrada a continuación:
                        </h2>

                        <div id="pentagram" className="w-fit mx-auto"></div>
                    </div>

                    <div className="w-fit mx-auto">
                        <PianoComponent />
                    </div>
                </div>
                :
                <div className="w-full h-screen place-content-center text-center">
                    <GenericButton
                        text={"Empezar Prueba"}
                        buttonFunction={() => setStart(!start)}
                    />
                </div>
            }
        </section>
    );
};