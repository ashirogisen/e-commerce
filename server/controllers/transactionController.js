const Transaction = require('../models/transaction')

class transactionController {
    static display(req, res, next) {
        const id = {
            _id = req.params.id
        }

        Transaction.findById(id)
            .then(transaction_data => {
                res.status(200).json(transaction_data)
            })
            .catch(next)
    }

    static create(req, res, next) {
        const createdData = {
            cart = req.params.id
        }

        Transaction.create(createdData)
            .then(created_data => {
                res.status(201).json(created_data)
            })
            .catch(next)
    }

}

module.exports = transactionController