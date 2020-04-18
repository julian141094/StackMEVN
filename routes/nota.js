import express from 'express'
import Nota from '../models/nota'

// Instanciamos el router de express
const router = express.Router()

// Se crea la ruta POST de una nueva nota
// La estructura es '/NombreRuta', Funcion Asincrona
// En la función asincrona se recibe:
// req = Datos que llegan del formulario
// res = Datos por donde viajan las respuestas del server
router.post('/nueva-nota', async (req, res) => {
    // body va a contener los datos que
    // siguen la estructura nota en este caso
    const body = req.body
    try {
        const notaDB = await Nota.create(body)
        res.status(200).json({
            mensaje: 'Se guardo efectivamente',
            notaDB
        })

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un Error',
            error
        })
    }
})

// Exportación del router
module.exports = router