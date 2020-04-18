import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Se crea el modelo del Squema que se necesita
// para el CRUD de las notas
const notaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la nota es necesario']
    },
    descripcion: String,
    usuarioId: String,
    date: {
        type: Date,
        default: Date.now
    },
    activo: {
        type: Boolean,
        default: true
    }
})

// Se convierte a un modelo
const Nota = mongoose.model('Nota', notaSchema)

export default Nota