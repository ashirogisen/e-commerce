const mongoose = require('mongoose')
const Schema = mongoose.Schema

let productSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    description: {
        type: String
    },
    stock: {
        type: Number
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date
    }
})

let Product = mongoose.model('Product', productSchema)

module.exports = Product