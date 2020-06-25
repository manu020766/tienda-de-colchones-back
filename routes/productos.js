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
const { authRole } = require('../middleware/authRole')

router.route('/')
    .post(verifycaToken, authRole, multer.single('imagen'), createProducto)
    .get(verifycaToken, getProductos)

router.route('/:categoria')
    .get(verifycaToken, getProductosByCategoria)

router.route('/id/:id')
    .get(verifycaToken, getProductoById)

router.route('/:id')
    .delete(verifycaToken, authRole, delProductoById)
    .put(verifycaToken, authRole, multer.single('imagen'), updateProducto)
        
module.exports = router