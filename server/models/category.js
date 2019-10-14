const mongoose = require('mongoose')
const Schema = mongoose.Schema

let categorySchema = new Schema({
    name: {
        type: String
    }
})

let Category = mongoose.model('Category', categorySchema)

module.exports = Category