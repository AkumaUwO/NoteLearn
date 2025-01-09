const Lesson = require('./lessons.controller');

/*Uso de las funciones creadas en el controlador para agregar las rutas y que al
visitarlas se ejecuten las funciones referentes a manejo de datos en la colección usuarios*/
module.exports = (router)=>{
    //Ruta de llamada a funcion para crear Lecciones
    router.post('/createLesson', Lesson.createLesson);
    //Ruta de llamada a la funcion de edicion de Lecciones
    router.put('/updateLesson/:id', Lesson.updateLesson);
    //Ruta de llamada a la funcion para eliminar Lecciones
    router.delete('/deleteLesson/:id', Lesson.deleteLesson);
}