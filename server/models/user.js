const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hashPassword = require('../helpers/hashPassword')

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
    address: {
        type: String
    }
})

userSchema.pre('save', function(next) {
    this.password = hashPassword(this.password)
    this.role = 'customer'
    next()
})

let User = mongoose.model('User', userSchema)

module.exports = User