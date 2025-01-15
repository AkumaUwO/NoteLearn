export default function Lesson2() {
    return (
        <div className="w-full h-fit p-5">
            <div className="border rounded-xl border-2 shadow-lg px-4 py-2 bg-transparent">

                <h1 className="text-3xl font-extrabold text-fuchsia-600 mb-6 text-center">
                    Lección de Piano: Introducción y Primeros Pasos
                </h1>

                <p className="mt-2 text-base text-gray-400 italic font-light">
                    "La música es un mundo en sí misma. Es un lenguaje que todos podemos entender."
                     - Ludwig van Beethoven
                </p>

                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    ¿Qué es el Piano?
                </h2>
                <p className="mt-2 text-base text-white">
                    El piano es un instrumento musical de cuerdas percutidas.
                     Su mecanismo funciona mediante una serie de teclas que al
                      ser presionadas, activan martillos que golpean cuerdas 
                      dentro del piano, produciendo sonidos. Es uno de los 
                      instrumentos más completos debido a su capacidad de cubrir 
                      un amplio rango de notas y su versatilidad en la ejecución
                       de diferentes estilos musicales.
                </p>

                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Tipos de Piano
                </h2>
                <p className="mt-2 text-base text-white">
                    Existen varios tipos de pianos, los más comunes son:
                    <ul className="list-disc ml-5 mt-2">

                        <li><strong>Piano de Pared</strong>: También conocido como Piano Vertical, tiene una caja más 
                        compacta, con las cuerdas y martillos dispuestos verticalmente.
                         Es ideal para espacios más pequeños.</li>
                         <br />
                        <li><strong>Piano de cola</strong>: Es el modelo tradicional, con una caja horizontal más 
                        grande, lo que permite una mejor resonancia y sonoridad.
                         Es preferido por músicos profesionales y en conciertos.</li>
                         <br />
                        <li><strong>Teclado electrónico</strong>: Un piano digital 
                        que emula el sonido de un piano acústico mediante altavoces
                         o audífonos. Es portátil y tiene la ventaja de contar con
                          múltiples sonidos y efectos.</li>
                          <br />
                    </ul>
                </p>

                <br /><br />
                    <img 
                        src="/images/Leccion2/tiposdepiano.jpg" 
                        alt="Tipos de piano" 
                        className="w-[60%] h-auto mt-4 mx-auto rounded-md shadow-md" 
                    />
                <br /><br />

                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Ubicación de la Nota DO
                </h2>
                <p className="mt-2 text-base text-white">
                    La nota DO se encuentra en el piano en una tecla blanca. 
                    Para encontrarla, debes localizar un grupo de dos teclas 
                    negras. El DO está siempre justo a la izquierda de estas 
                    dos teclas negras. Esta posición se repite a lo largo del 
                    piano en diferentes octavas, lo que te permite tocar varias 
                    notas DO a lo largo del teclado.
                </p>

                <br /><br />
                    <img 
                        src="/images/Leccion2/do.jpg" 
                        alt="Ubicación de la nota DO" 
                        className="w-[60%] h-auto mt-4 mx-auto rounded-md shadow-md" 
                    />
                <br /><br />

                <h2 className="mt-5 font-semibold text-fuchsia-600">
                    Las Notas Musicales
                </h2>
                <p className="mt-2 text-base text-white">
                    Las notas naturales son las siguientes:
                    <ul className="list-disc ml-5 mt-2">
                        <li><strong>DO</strong></li>
                        <li><strong>RE</strong></li>
                        <li><strong>MI</strong></li>
                        <li><strong>FA</strong></li>
                        <li><strong>SOL</strong></li>
                        <li><strong>LA</strong></li>
                        <li><strong>SI</strong></li>
                    </ul>
                    Estas notas forman la escala musical básica. Para tocarlas 
                    en el piano, debes presionar las teclas blancas.
                </p>

                <p className="mt-2 text-base text-white">
                    Las notas musicales popularmente en el mundo de la musica es 
                    posible reconocerla con otra simbologia conocida como cifrado musical 
                    el cual es un sistema de notación que se utiliza 
                    para representar los acordes y las escalas en la música. 
                    Se usa principalmente en la música moderna y popular, y tiene 
                    como objetivo simplificar la escritura musical. En lugar de 
                    escribir las notas individuales de un acorde, se utilizan 
                    símbolos o letras (como C, G, Am, etc.) que representan el acorde 
                    y su calidad (mayor, menor, etc.). El cifrado permite que los músicos 
                    toquen la música sin necesidad de leer la partitura completa, 
                    siguiendo únicamente los acordes indicados.
                </p>
                    <img 
                        src="/images/Leccion2/notasycifrado.jpg" 
                        alt="Ubicación de la nota DO" 
                        className="w-[60%] h-auto mt-4 mx-auto rounded-md shadow-md" 
                    />
                <br /><br />

            </div>
        </div>
    );
};
