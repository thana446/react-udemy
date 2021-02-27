const { json } = require('express');
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const {Order} = require('../models/orders')

/* GET users listing. */

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

module.exports = router;
