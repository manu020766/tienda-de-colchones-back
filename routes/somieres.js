var express = require('express');
var router = express.Router();
var Somier = require('../Models/productos')

router.get('/', async function(req, res, next) {

  let somieres = await Somier.find({ categoria: 'Somieres' })
 
  res.status(200).json({ somieres })
});

router.get('/:id', async function(req, res, next) {
  let somier =  await Somier.find({ categoria: 'Somieres', _id: req.params.id })
 
  res.status(200).json({ somier })
});

module.exports = router