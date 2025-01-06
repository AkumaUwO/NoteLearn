const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = ()=>{
    /*Uso de la variable dbURL que contiene la configuracion de la base de datos especificada
    En el archivo properties de la carpeta config para conectar con la base de datos mongoDB*/
    mongoose.connect(dbURL)
    .then(()=>console.log(`MongoDB conectado en ${dbURL}`))
    .catch(err =>console.log(`¡Error de conexión con la base de datos! ${err}`));

    process.on('SIGINT', ()=>{
        mongoose.connection.close (()=> {
            console.log('La base de datos MongoDB está desconectada, por favor inicie el servicio');
            process.exit(0);
        });
    });
}