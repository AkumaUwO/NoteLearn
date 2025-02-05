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

function getMusicalNotesWithBemols() {
    const notes = [];
    const octaves = [4, 5]; // Definimos las octavas que queremos
    const noteNames = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']; // Nombres de las notas con bemoles

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
    const testNotes = selectRandomNotes(musicalNotes, 10)
    res.send({message: 'Notas para la evaluacion enviadas correctamente!', testNotes });
};

function getIntervals() {
    return {
        '2nd': { major: 2, minor: 1 },
        '3rd': { major: 4, minor: 3 },
        '4th': { major: 5, minor: 4 },
        '5th': { augmented: 8, diminished: 5 }, // Agregamos aumentada y disminuida
        '6th': { major: 9, minor: 8 },
        '7th': { major: 11, minor: 10 }
    };
}

// Función para obtener notas de la cuarta escala
function getFourthScaleNotes() {
    return ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // Notas de la cuarta escala
}

// Función para obtener notas y sus intervalos en la cuarta escala
function getNotesWithIntervals(intervalNumber, intervalType) {
    const notes = getFourthScaleNotes(); // Obtener solo notas de la cuarta escala
    const intervals = getIntervals();
    const selectedInterval = Object.keys(intervals)[intervalNumber - 2]; // -2 porque 2da es el índice 0
    const intervalSteps = intervals[selectedInterval][intervalType]; // Obtener el paso correspondiente

    const result = [];

    // Definimos las notas con bemoles
    const noteNames = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

    notes.forEach(note => {
        const noteBase = note; // Obtener la nota sin la octava
        const noteIndex = noteNames.indexOf(noteBase); // Obtener el índice de la nota
        const targetNoteIndex = (noteIndex + intervalSteps) % noteNames.length; // Calcular la nota objetivo
        const targetNote = noteNames[targetNoteIndex]; // Obtener la nota objetivo

        result.push({
            note: note,
            interval: `${selectedInterval} ${intervalType === 'major' ? 'Mayor' : intervalType === 'minor' ? 'Menor' : 'Aumentada'}`,
            targetNote: targetNote // Mantener la misma octava
        });
    });

    return shuffleArray(result); // Mezclar el resultado
}

// Endpoint para obtener notas y sus intervalos
exports.obtenerNotasConIntervalos = (req, res, next) => {
    const { interval, type } = req.params; // Obtener el intervalo y el tipo desde la consulta
    const intervalNumber = parseInt(interval, 10);
    const intervalType = type === 'minor' || type === 'diminished' ? 'minor' : type === 'augmented' ? 'augmented' : 'major';

    if (isNaN(intervalNumber) || intervalNumber < 2 || intervalNumber > 7 || (intervalType !== 'major' && intervalType !== 'minor' && intervalType !== 'augmented')) {
        return res.status(400).send({ message: 'El intervalo debe ser un número entre 2 y 7 y el tipo debe ser "mayor", "menor" o "aumentada".' });
    }

    const notesWithIntervals = getNotesWithIntervals(intervalNumber, intervalType);
    res.send({ message: 'Notas y sus intervalos enviados correctamente!', notesWithIntervals });
};