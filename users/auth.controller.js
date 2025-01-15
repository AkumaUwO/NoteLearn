const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = '057cc82566ea809978f211392f657fed93614056c163f9e5bca49306bd8f7508';

//Funcion para Crear usuarios
 exports.createUser = async(req, res, next)=> {
    const newUser = {
        name: req.body.name,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password),
        role: "usuario"
    }

    const result = await User.create(newUser);
    if(result == 'El usuario ya existe'){
        res.status(409).send({message: 'El usuario ya existe'})
    } else if(result == 'Error del servidor'){
        res.status(409).send({message: 'Error del servidor'})
    } else {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({id: result.id},
            SECRET_KEY, {
                expiresIn: expiresIn
            });

            const dataUser = {
                name: result.name,
                username: result.username,
                expiresIn: expiresIn,
                accessToken: accessToken
            }
        res.send({message: 'Usuario creado correctamente', dataUser });
    }
}

//Funcion para Iniciar sesion
exports.loginUser = async(req, res, next)=> {
    const userData = {
        username: req.body.username,
        password: req.body.password ? req.body.password : "indefinido"
    }

    await User.findOne({username: userData.username}).then(function (user) {
        if(!user){
            // El usuario no existe
            res.status(409).send({message: 'Error al iniciar sesión verifique sus datos'});
        } else{
        const resultPassword = bcrypt.compareSync(userData.password, user.password);
        if(resultPassword) {
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({id: user.id},
                SECRET_KEY, {
                    expiresIn: expiresIn
                });

                const dataUser = {
                    name: user.name,
                    username: user.username,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                res.send({dataUser});
        } else {
            //Contraseña incorrecta
            res.status(409).send({message: 'Error al iniciar sesión verifique sus datos'});
        }
        }
        
      })
      .catch(function (err) {
        return res.status(500).send({message: 'Error del servidor'}, err);
      });  

}

//Funcion para actualizar usuarios
exports.updateUser  = async(req, res, next) => {
    const userId = req.params.id; //Parametro obtenido desde la URL
    const updatedData = req.body; 
    const result = await User.edit(userId, updatedData);

    res.send(result, updatedData);
};

//Funcion para eliminar usuarios
exports.deleteUser  = async(req, res, next) => {
    const userId = req.params.id; //Parametro obtenido desde la URL
    const result = await User.delete(userId);

    res.send(result);
};

