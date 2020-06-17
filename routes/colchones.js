var express = require('express');
var router = express.Router();
var Colchon = require('../Models/productos')

router.get('/', async function(req, res, next) {

  let colchones = await Colchon.find({ categoria: 'Colchones' })
 
  res.status(200).json({ colchones })
});

router.get('/:id', async function(req, res, next) {
  let colchon =  await Colchon.find({ categoria: 'Colchones', _id: req.params.id })
 
  res.status(200).json({ colchon })
});

module.exports = router