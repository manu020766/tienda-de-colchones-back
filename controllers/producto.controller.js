const Producto = require('../Models/productos')
const categorias = require('../Datos/dbCategorias')
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

async function getProductos(req, res) {
    let { destacado } = req.query
    console.log(destacado)

    let productos
    
    if (destacado) {
        productos = await Producto.find({ destacado: destacado })
    } else {
        productos = await Producto.find()
    }
   
    res.status(200).json( [...productos] )
}

async function getProductoById(req, res) {
    let { id } = req.params

    let producto =  await Producto.find({ _id: id })
 
    res.status(200).json(producto[0])
}

async function getProductosByCategoria(req, res) {
    let { categoria } = req.params
    let { destacado } = req.query

    categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1)

    if (!categorias.includes(categoria)) {
        res.status(400).json([])
    }

    let productos
    
    if (destacado) {
        productos = await Producto.find({ categoria: categoria, destacado: destacado })
    } else {
        productos = await Producto.find({ categoria: categoria })
    }
   
    res.status(200).json( [...productos] )
}

async function delProductoById(req, res) {
    let { id } = req.params

    let producto =  await Producto.findOneAndDelete({ _id: id })
 
    res.status(200).json({ message: "producto borrado"})
}

module.exports = {
    createProducto,
    getProductos,
    getProductosByCategoria,
    getProductoById,
    delProductoById
}

