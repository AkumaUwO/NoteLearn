const Scores = require('./scores.controller');

/*Uso de las funciones creadas en el controlador para agregar las rutas y que al
visitarlas se ejecuten las funciones referentes a manejo de datos en la colección usuarios*/
module.exports = (router)=>{
    //Ruta de llamada a funcion para crear Scores
    router.post('/uploadScore', Scores.uploadScore);
    //Ruta de llamada a la funcion para editar Scores
    router.put('/updateScore/:id', Scores.editScore);
    //Ruta de llamada a la funcion para obtener Scores
    router.get('/getAllScores', Scores.getAllScores);
}