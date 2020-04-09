//Requerimos e intanciamos express
const express = require('express');
const app = express();

// Se configura la primera ruta, la base
app.get('/', function (req, res) {
    // Se retorna un hola mundo al cargar la ruta
    res.send('Hello World!');
});

// Se configura el puerto para que escuche en el puerto 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});