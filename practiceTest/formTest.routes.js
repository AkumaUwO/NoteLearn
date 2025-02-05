const PracticeTest = require('./formTest.controller');

/*Uso de las funciones creadas en el controlador para agregar las rutas y que al
visitarlas se ejecuten las funciones referentes a manejo de datos en la colección usuarios*/
module.exports = (router)=>{
    //Ruta de llamada a funcion para crear Lecciones
    router.get('/getNotes', PracticeTest.obtenerNotas);
    router.get('/getNotesWithIntervals/:interval/:type', PracticeTest.obtenerNotasConIntervalos);
}