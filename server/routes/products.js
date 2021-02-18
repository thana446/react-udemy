var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const {Product} = require('../models/products')

/* GET users listing. */


router.get('/' ,async(req ,res ,next) => {
  const products = await Product.find({});
  res.products = products;
  return res.json(res.products)
})

module.exports = router;
