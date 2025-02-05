import GenericButton from "@/components/ui/utility/GenericButton";

export default function BaseTestStart({ testId, start, setStart }) {

    const text = {
        3: "En la siguiente prueba se te brindará un teclado, puedes utilizar el ratón o las letras para tocarlo. Se te mostrarán 15 notas musicales en pantalla, tu labor es tocar la tecla del teclado correspondiente a cada nota. Tendrás 15 segundos para hacerlo.",
    }

    return (
        <section className="w-full h-screen place-content-center text-center">

            <div className="flex items-center justify-center">

                <div className="flex items-center bg-gradient-to-r from-fuchsia-500 to-purple-600 p-2 rounded-full">

                    <h2 className="text-white text-lg font-bold mx-3">
                        Prueba:
                    </h2>

                    <div className="w-12 h-12 bg-white text-lg rounded-full flex items-center justify-center font-bold text-fuchsia-700">
                        {testId - 2}
                    </div>

                </div>

                <h1 className="ml-5 my-3 text-3xl font-extrabold text-fuchsia-600 text-center">
                    Notas Músicales
                </h1>

            </div>

            <div className="mx-auto my-5 p-5 w-3/4 border rounded-xl border-2 shadow-lg bg-transparent">

                <h1 className="text-xl mb-3 font-extrabold text-fuchsia-600 text-center">
                    Preparate para una Prueba
                </h1>

                <p>
                    {text[testId]}
                </p>

            </div>

            <GenericButton
                text={"Empezar Prueba"}
                buttonFunction={() => setStart(!start)}
                styles={"px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl animate:pulse"}
            />
        </section>
    );
};