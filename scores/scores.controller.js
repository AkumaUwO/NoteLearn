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
                name: result.lessonNumber,
                username: result.username,
                score: result.score
            }
        res.send({message: 'Puntuación subida exitosamente', dataScore });
    }
}
