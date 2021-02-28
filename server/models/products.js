const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = mongoose.model('Products' ,new Schema({
    productName: String,
    productPrice: String,
    thumbnail: String
} ,
{ timestamps: true, versionKey: false }))

module.exports = {Product}