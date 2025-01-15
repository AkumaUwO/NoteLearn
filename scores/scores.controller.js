const Scores = require('./scores.dao');

//Funcion para Crear usuarios
exports.uploadScore = async(req, res, next)=> {
    const newScore = {
        lessonNumber: req.body.lessonNumber,
        username: req.body.username,
        score: req.body.score
    }

    const result = await Scores.create(newScore);
    if(result == 'Error del servidor'){
        res.status(409).send({message: 'Error del servidor'})
    } else {
            const dataScore = {
                lessonNumber: result.lessonNumber,
                username: result.username,
                score: result.score
            }
        res.send({message: 'Puntuación subida exitosamente', dataScore });
    }
}

// Funcion para mostrar todos los scores
exports.getAllScores = async (req, res, next) => {
    try {
        const scores = await Scores.find(); // Obtener todos los scores de la colección
        res.send({ message: 'Scores obtenidos exitosamente', scores });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error al obtener los scores' });
    }
};