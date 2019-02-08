const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products');

//Settings

//formatea json que se visualiza en navegador, dandole formato.
app.set('json spaces', 4);

// Middlewares
//muestra mensajes por consola de solicitudes de metodos PUT, GET, DELETE, PUT
app.use(morgan('dev'));
//Entiende datos que se envian desde el navegador a través d eun formato JSON
app.use(bodyParser.json());
//Entiende todos los datos que se envian desde el formulario
app.use(bodyParser.urlencoded({extended: false}));

// routes

app.use('/',productRoutes);

 
// static Files


// Start Server

app.listen(3000, () =>{
    console.log('server on port 3000');
});


