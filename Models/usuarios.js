const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombre: { type: String, require: [true, 'El nombre es requerido'] },
    email: { type: String, unique: true, require: [true, 'El email es requerido y único'] },
    password: { type: String, require: [true, 'El password es requerido'] },
    rol: { type: String, require: [true, 'El rol es requerido'] },
})
usuarioSchema.plugin(uniqueValidator, { message: 'Error, el {PATH} debe ser único' })

module.exports = mongoose.model('usuarios', usuarioSchema)