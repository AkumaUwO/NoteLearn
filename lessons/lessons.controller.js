const Lesson = require('./lessons.dao');

//Funcion para crear Lecciones
 exports.createLesson = async(req, res, next)=> {
    const newLesson = {
        title: req.body.title,
        content: req.body.content
    }

    const result = await Lesson.create(newLesson);
    if(result){
            const data = {
                title: result.title,
                content: result.content
            }
        res.send({message: 'Lección creada correctamente', data });
    }
}

//Funcion para actualizar Lecciones
exports.updateLesson  = async(req, res, next) => {
    const LessonId = req.params.id; //Parametro obtenido desde la URL
    const updatedData = req.body; 
    const result = await Lesson.edit(LessonId, updatedData);
    res.send(result, updatedData);
};

//Funcion para eliminar Lecciones
exports.deleteLesson  = async(req, res, next) => {
    const userId = req.params.id; //Parametro obtenido desde la URL
    const result = await Lesson.delete(userId);
    res.send(result);
};

