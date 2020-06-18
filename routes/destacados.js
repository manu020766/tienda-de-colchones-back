var express = require('express');
var router = express.Router();
var Producto = require('../Models/productos')

router.get('/', async function(req, res, next) {

  let productos = await Producto.find({ destacado: true })
 
  res.status(200).json([...productos])
});

module.exports = router