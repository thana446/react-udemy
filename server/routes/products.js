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

router.post('/' ,async(req ,res ,next) => {
  const payload = req.body
  try {
    const product = await new Product(payload)
    product.save()
    res.json({resultCode: "20000" ,resultDesc: 'บันทึกสำเร็จ'})
  } catch (error) {
    res.status(500).json({resultCode: "50000" ,resultDesc: error})
  }

})

router.get('/:id' ,async(req ,res ,next) => {
  const {id} = req.params
  try {
    const products = await Product.findById(id);
    res.json(products)
  } catch (error) {
    res.status(500).json({resultCode: "50000" ,resultDesc: error})
  }

})

router.put('/:id' ,async(req ,res ,next) => {
  const {id} = req.params
  const {productName ,productPrice ,thumbnail} = req.body
  try {
    await Product.updateOne({_id: id} ,{$set: {productName ,productPrice ,thumbnail}})
    res.json({resultCode: "20000" ,resultDesc: 'บันทึกสำเร็จ'})
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
