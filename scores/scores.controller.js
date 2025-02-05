const Scores = require('./scores.dao');

//Funcion para Crear scores
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

exports.editScore = async (req, res, next) => {
    const { id } = req.params; // Obtiene el ID de la puntuación desde los parámetros de la ruta
    const { score } = req.body; // Obtiene el nuevo score desde el cuerpo de la solicitud

    try {
        // Busca el score existente por ID y actualiza el score
        const updatedScore = await Scores.findByIdAndUpdate(
            id, // ID de la puntuación a actualizar
            { score }, // Actualiza el score
            { new: true, runValidators: true } // Devuelve el documento actualizado y valida
        );

        // Verifica si se encontró un score
        if (!updatedScore) {
            return res.status(404).send({ message: 'Score no encontrado' });
        }

        // Envía la respuesta con el score actualizado
        const dataScore = {
            lessonNumber: updatedScore.lessonNumber,
            username: updatedScore.username,
            score: updatedScore.score
        };

        return res.send({ message: 'Puntuación actualizada exitosamente', dataScore });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error del servidor' });
    }
};

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