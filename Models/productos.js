const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    titulo: { type: String, require: [true, 'El nombre del colchón es necesario'] },
    descripcion: { type: String, require: [true, 'Es necesaria una descripcción'] },
    imagen: { type: String, require: [true, 'La imagen es obligatoria'] },
    precio: { type: Number, require: [true, 'El precio es obligatorio'] },
    categoria: { type: String, require: [true, 'La categoria es obligatoria'] },
    destacado: { type: Boolean,  default: false, require: [true, 'El precio es obligatorio'] }
})

module.exports = mongoose.model('productos', productoSchema)