//Requerimos e intanciamos express
const express = require('express');
const app = express();
// Se coloca a que express use a morgan como middleware y muestre en consola las peticiones http
const morgan = require('morgan');
// Cors configura el server para que no bloque las peticiones con otros dominios
const cors = require('cors');
// Retorna la ruta especifica
const path = require('path');

// morgan se usa como middleware
app.use(morgan('tiny'));

// Express usa cors para peticiones de otras urls
app.use(cors());

// Se usa Json para que pueda trabajar con solicitudes o respuestas www-form-urlencoded
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Para acceder al directorio public con la config del server
app.use(express.static(path.join(__dirname, 'public')));

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








// ###################### NOTAS ##############################################
// Para correr el servidor es con el comando node NOMBREDELARCHIVO.js (app.js)}
// Tambien se corre con nodemon (Segun config) con npm run dev
// Se instala nodemon para autoreload del servidor, se configuro en package.json con "dev": "nodemon app.js", en scripts
// Con morgan se visualiza en la consola las peticiones que se le hagan al servidor
// Express static se configura con el pach
