const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Order = mongoose.model('Orders' ,new Schema({
    totalPrice: Number,
    orders: Array
} ,
{ timestamps: true, versionKey: false }))

module.exports = {Order}