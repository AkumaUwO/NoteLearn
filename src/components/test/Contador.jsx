export default function Contador({ seconds, totalTime }) {

    const timerBarWidth = `${seconds > 0 ? (seconds / totalTime) * 100 : 100}%`;

    return (
        <div className="w-full">
            <p className={`w-fit mx-auto text-7xl font-bold ${seconds < 5 ? "text-red-700" : ""}`}>
                {seconds}
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