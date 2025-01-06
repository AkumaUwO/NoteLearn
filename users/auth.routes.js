const Users = require('./auth.controller');

/*Uso de las funciones creadas en el controlador para agregar las rutas y que al
visitarlas se ejecuten las funciones referentes a manejo de datos en la colección usuarios*/
module.exports = (router)=>{
    //Ruta de registro y llamada a funcion para crear usuarios
    router.post('/register', Users.createUser);
    //Ruta de login y llamada a la funcion de autenticación de usuarios
    router.post('/login', Users.loginUser);
    //Ruta de login y llamada a la funcion de edicion de usuarios
    router.put('/update/:id', Users.updateUser);
    //Ruta de login y llamada a la funcion para eliminar usuarios
    router.delete('/delete/:id', Users.deleteUser);
}