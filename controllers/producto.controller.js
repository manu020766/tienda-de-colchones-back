const Producto = require('../Models/productos')
// import fse from 'fs-extra' 
// import path from 'path'

async function createProducto(req, res) {
    const { titulo, descripcion, precio, categoria, destacado } = req.body
    let imagen = req.file?.path

    console.log(imagen)

    const newProducto = {
        titulo,
        descripcion,
        precio,
        categoria,
        destacado,
        imagen: imagen.split('\\')[2]
    }

    const producto = new Producto(newProducto)
    await producto.save()

    return res.json({
        message: 'Producto creado',
        producto
    })
}

module.exports = {
    createProducto
}

