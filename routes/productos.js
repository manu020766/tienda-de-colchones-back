const { Router } = require('express')
const router = Router()
const { createProducto } = require('../controllers/producto.controller')
const multer = require('../libs/multer')

router.route('/')
    .post(multer.single('imagen'), createProducto)


        
module.exports = router