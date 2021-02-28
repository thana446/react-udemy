const { json } = require('express');
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const {Order} = require('../models/orders')

/* GET users listing. */
router.get('/' ,async(req ,res ,next) => {
  try {
    const orders = await Order.find({},'-updatedAt')
    res.status(200).json({resultCode: "20000" ,resultDesc: "success" ,dataList: orders})
  }catch(e) {
    res.status(500).json({resultCode: "50000" ,resultDesc: "fail"})
  }
})

router.post('/' ,async(req ,res ,next) => {
  const {body: payload} = req
  try {
    const orders = new Order(payload)
    await orders.save()
    res.status(200).json({resultCode: "20000" ,resultDesc: "success"})
  }catch(e) {
    res.status(500).json({resultCode: "50000" ,resultDesc: "fail"})
  }
})

router.delete('/:id' ,async(req ,res ,next) => {
  const {id} = req.params
  try {
    await Order.deleteOne({_id: id})
    res.status(200).json({resultCode: "20000" ,resultDesc: "success"})
  }catch(e) {
    res.status(500).json({resultCode: "50000" ,resultDesc: "fail"})
  }
})

module.exports = router;
