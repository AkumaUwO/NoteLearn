"use client"

import { useState, useEffect } from "react";

export default function Contador({ trigger }) {

    const totalTime = 15
    const [seconds, setSeconds] = useState(totalTime);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(prevSeconds => prevSeconds - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    const timerBarWidth = `${seconds > 0 ? (seconds / totalTime) * 100 : 100}%`;

    return (
        <div className="w-full">
            <p className={`w-fit mx-auto text-7xl font-bold ${ seconds < 5 ? "text-red-700" : ""}`}>
                <button type="button" onClick={() => setSeconds(15)}> {/*TODO: DELETE ME */}
                    {seconds}
                </button>
            </p>
            <div
                className={`h-2 mx-auto rounded-full transition-all duration-1000 ${seconds > 10 ? "bg-green-500" : seconds > 5 ? "bg-yellow-500" : "bg-red-500"}`}
                style={{ width: timerBarWidth }}
            >
                <div
                    className={`${seconds !== 0 && seconds <= 5 ? "w-full h-2 mx-auto rounded-full transition-all duration-1000 bg-red-500 animate-ping" : ""}`}
                />
            </div>
        </div>
    );
};