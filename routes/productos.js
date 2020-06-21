const { Router } = require('express')
const router = Router()
const { createProducto,
        getProductosByCategoria,
        getProductoById,
        delProductoById,
        updateProducto,
        getProductos } = require('../controllers/producto.controller')
const multer = require('../libs/multer')

router.route('/')
    .post(multer.single('imagen'), createProducto)
    .get(getProductos)

router.route('/:categoria')
    .get(getProductosByCategoria)

router.route('/id/:id')
    .get(getProductoById)

router.route('/:id')
    .delete(delProductoById)
    .put(multer.single('imagen'), updateProducto)
        
module.exports = router