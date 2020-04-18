//Requerimos e intanciamos express
import express from 'express'
// Se coloca a que express use a morgan como middleware y muestre en consola las peticiones http
import morgan from 'morgan'
// Cors configura el server para que no bloque las peticiones con otros dominios
import cors from 'cors'
// Retorna la ruta especifica
import path from 'path'
// Para utilizar Mongo
import mongoose from 'mongoose'

const app = express();

// ------------ BASE DE DATOS --------------
// Conexión local
const uri = 'mongodb://localhost:27017/stackMEVN';
// para poder usar conexiones con strings, entre otras cosas
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

// Or using promises
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { err, console.log(err) }
);

// ------------- MIDDLEWARES ---------------
app.use(morgan('tiny'));
app.use(cors());
// Se usa Json para que pueda trabajar con solicitudes
// o respuestas www-form-urlencoded
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// -------------- RUTAS ----------------------
// app.get('/', function (req, res) {
//     res.send('Hello World! Julian Avendaño');
// });

// Se usa la ruta creada para las notas
app.use('/api', require('./routes/nota'))

// Middleware para Vue.js router modo history (Debe estar antes del puerto)
const history = require('connect-history-api-fallback');
app.use(history());
// Para acceder al directorio public con la config del server
app.use(express.static(path.join(__dirname, 'public')));

// Se configura como variable global el puerto que le asigne el server o el 3000 sino
app.set('puerto', process.env.PORT || 3000);
// Se configura el puerto accediendo a la variable global
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port' + app.get('puerto'));
});

// ###################### NOTAS ##############################################
// Para correr el servidor es con el comando node NOMBREDELARCHIVO.js (app.js)}
// Tambien se corre con nodemon (Segun config) con npm run dev
// Para correr con babel se ejecuta npm run devbabel (Para trabajar con js esquema nuevo)
// Se instala nodemon para autoreload del servidor, se configuro en package.json con "dev": "nodemon app.js", en scripts
// Con morgan se visualiza en la consola las peticiones que se le hagan al servidor
// Express static se configura con el pach del directirio public
// Con el comando git push heroku master se pushea el proyecto a HEROKU, esta en el link https://app-mevn-julian141094.herokuapp.com/
