'use strict'
const cors = require('cors');
const authRoutes = require('./users/auth.routes');
const LessonRoutes = require('./lessons/lessons.routes');
const express = require('express');
const properties = require('./config/properties');
const DB = require('./config/db');
const jwt = require('jsonwebtoken');
//init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

//NOTA IMPORTANTE, RECORDAR CAMBIAR LAS DIRECCIONES QUE PUEDEN ENVIAR PETICIONES A LA API
app.use(cors());

app.use('/api', router);
authRoutes(router);
LessonRoutes(router);
router.get('/', (req, res)=>{
    const localStorageToken = localStorage.getItem('ACCESS_TOKEN');
    if(localStorageToken != null || localStorageToken != ""){
        res.send('Hello from Home');
    } else {
        console.log("Sin sesión iniciada");
    }

});

app.use(router);

app.listen(properties.PORT, ()=> console.log(`server running on port ${properties.PORT}`));