const User = require('../models/user')
const generateToken = require('../helpers/generateToken')
const verifyPassword = require('../helpers/verifyPassword')


class UserController {
    static register(req, res, next) {
        const createdData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address
        }

        User.create(createdData)
            .then(created_data => {
                res.status(201).json(created_data)
            })
            .catch(next)
    }

    static login(req, res, next) {
        const email = {
            email: req.body.email
        }

        User.findOne(email)
            .then(user_data => {
                const passwordIsTrue = verifyPassword(req.body.password, user_data.password)
                if(passwordIsTrue) {
                    const data = {
                        id: user_data._id,
                        name: user_data.name,
                        email: user_data.email,
                        password: user_data.password,
                        role: user_data.password
                    }

                    const token = generateToken(data)
                    res.status(200).json({token, data})
                } else {
                    throw {
                        message: 'Wrong username or password',
                        statusCode: 401
                    }
                }
            })
            .catch(next)

    }

}

module.exports = UserController