export default function TextSelector({ testId }) {

    if (testId == 3 || testId == 4) return(
        <p>
            En la siguiente prueba se te brindará un teclado, puedes utilizar el ratón o las letras para tocarlo. 
            <br />
            <strong>Se te iran mostrando 10 notas musicales en pantalla, una por una, tu labor es tocar la tecla del teclado correspondiente a cada nota.</strong>. 
            <br />
            <br />
            <i className="ri-time-line text-xl font-bold text-fuchsia-600"></i><strong className="text-lg">Tendrás 15 segundos para hacerlo.</strong>
        </p>
    );
};