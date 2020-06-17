const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    titulo: { type: String, require: [true, 'El nombre del colchón es necesario'] },
    descripccion: { type: String, require: [true, 'Es necesaria una descripcción'] },
    imagen: { type: String, require: [true, 'La imagen es obligatoria'] },
    precio: { type: Number, require: [true, 'El precio es obligatorio'] },
    categoria: { type: String, require: [true, 'La categoria es obligatoria'] }
})

module.exports = mongoose.model('productos', productoSchema)