//Requerimos e intanciamos express
const express = require('express');
const app = express();

// Se configura la primera ruta, la base
app.get('/', function (req, res) {
    // Se retorna un hola mundo al cargar la ruta
    res.send('Hello World! Julian Avendaño');
});

// Se configura como variable global el puerto que le asigne el server o el 3000 sino
app.set('puerto', process.env.PORT || 3000);
// Se configura el puerto accediendo a la variable global
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port' + app.get('puerto'));
});

// Se coloca a que express use a morgan como middleware
// Con morgan se visualiza en la consola las peticiones que se le hagan al servidor
const morgan = require('morgan');
app.use(morgan('tiny'));






// ###################### NOTAS ##############################################
// Para correr el servidor es con el comando node NOMBREDELARCHIVO.js (app.js)}
// Se instala nodemon para autoreload del servidor, se configuro en package.json con "dev": "nodemon app.js", en scripts