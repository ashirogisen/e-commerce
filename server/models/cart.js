const mongoose = require('mongoose')
const Schema = mongoose.Schema

let cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

let Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart