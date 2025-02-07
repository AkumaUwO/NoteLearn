import GenericButton from "@/components/ui/utility/GenericButton";
import TextSelector from "./TextSelector";

export default function BaseTestStart({ testId, testTittle, start, setStart }) {

    const IDS = {
        3: 1,
        4: 2,
        6: 3,
        7: 4,
        8: 5,
        9: 6,
        10: 7,
        11: 8
    };

    return (
        <section className="w-full h-screen place-content-center text-center">

            <div className="sm:flex items-center justify-center">

                <div className="flex items-center bg-gradient-to-r from-fuchsia-500 to-purple-600 p-2 rounded-full w-fit">

                    <h2 className="text-white text-lg font-bold mx-3">
                        Prueba:
                    </h2>

                    <div className="w-12 h-12 bg-white text-lg rounded-full flex items-center justify-center font-bold text-fuchsia-700">
                        {IDS[testId]}
                    </div>

                </div>

                <h1 className="ml-5 my-3 text-3xl font-extrabold text-fuchsia-600 text-center">
                    {testTittle[testId]}
                </h1>

            </div>

            <div className="mx-auto my-5 p-5 w-full sm:w-3/4 border rounded-xl border-2 shadow-lg bg-transparent">

                <h1 className="text-xl mb-3 font-extrabold text-fuchsia-600 text-center">
                    Preparate para una Prueba
                </h1>

               <TextSelector testId={testId}/>

            </div>

            <GenericButton
                text={"Empezar Prueba"}
                buttonFunction={() => setStart(!start)}
                styles={"px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"}
            />
        </section>
    );
};