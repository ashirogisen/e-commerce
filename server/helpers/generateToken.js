const jwt = require('jsonwebtoken')

function generateToken(data) {
    const token = jwt.sign(data, 'asd')

    return token
}

module.exports = generateToken