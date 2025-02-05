const Form = require('./formTest.dao');

//Funcion para obtener notas musicales
function getMusicalNotes() {
    const notes = [];
    const octaves = [1, 2, 3, 4, 5]; // Definimos las octavas que queremos
    const noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // Nombres de las notas

    // Generamos las notas para cada octava
    octaves.forEach(octave => {
        noteNames.forEach(note => {
            notes.push(`${note}${octave}`);
        });
    });

    return notes;
}

//Funcion para mezclar el Array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
    return array;
}


// Función para seleccionar una cantidad específica de notas
function selectRandomNotes(notes, count) {
    const shuffledNotes = shuffleArray([...notes]); // Mezclamos las notas
    return shuffledNotes.slice(0, count); // Seleccionamos las primeras 'count' notas
}

exports.obtenerNotas= (req, res, next)=>{
    const musicalNotes = getMusicalNotes();
    const shuffledNotes = shuffleArray(musicalNotes);
    const testNotes = selectRandomNotes(musicalNotes, 10)
    res.send({message: 'Notas para la evaluacion enviadas correctamente!', testNotes });
};
