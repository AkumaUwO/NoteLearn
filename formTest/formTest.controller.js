const Form = require('./lessons.dao');

//Funcion para crear Formularios de Prueba
 exports.createformTest = async(req, res, next)=> {
    const newformTest = {
        question: req.body.question,
        answer: req.body.answer
    }

    const result = await Form.create(newformTest);
    if(result){
            const data = {
                question: result.question,
                content: result.answer
            }
        res.send({message: 'Formulario de prueba creado correctamente!', data });
    }
}

//Funcion para actualizar Formularios de Prueba
exports.updateformTest  = async(req, res, next) => {
    const formID = req.params.id; //Parametro obtenido desde la URL
    const updatedData = req.body; 
    const result = await Form.edit(formID, updatedData);
    res.send(result, updatedData);
};

//Funcion para eliminar Formularios de Prueba
exports.deleteformTest = async(req, res, next) => {
    const formID = req.params.id; //Parametro obtenido desde la URL
    const result = await Form.delete(formID);
    res.send(result);
};

