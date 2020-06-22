const { Router } = require('express')
const router = Router()
const { createProducto,
        getProductosByCategoria,
        getProductoById,
        delProductoById,
        updateProducto,
        getProductos } = require('../controllers/producto.controller')
const multer = require('../libs/multer')
const { verifycaToken } = require('../middleware/auth')

router.route('/')
    .post(verifycaToken, multer.single('imagen'), createProducto)
    .get(verifycaToken, getProductos)

router.route('/:categoria')
    .get(verifycaToken, getProductosByCategoria)

router.route('/id/:id')
    .get(verifycaToken, getProductoById)

router.route('/:id')
    .delete(verifycaToken, delProductoById)
    .put(verifycaToken, multer.single('imagen'), updateProducto)
        
module.exports = router