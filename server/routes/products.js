var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const {Product} = require('../models/products')

/* GET users listing. */


router.get('/' ,async(req ,res ,next) => {
  try {
    const products = await Product.find({});
    res.json(products)
  } catch (error) {
    res.status(500).json({resultCode: "50000" ,resultDesc: error})
  }

})


router.delete('/:id' ,async(req ,res ,next) => {
  const {id} = req.params
  try {
    await Product.deleteOne({_id: id})
    res.status(200).json({resultCode: "20000" ,resultDesc: "success"})
  }catch(e) {
    res.status(500).json({resultCode: "50000" ,resultDesc: "fail"})
  }
})


module.exports = router;
