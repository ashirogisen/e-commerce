const Product = require('../models/product')

class ProductController {
    static displayAll(req, res, next) {
        Product.find()
            .then(products_data => {
                res.status(200).json(products_data)
            })
            .catch(next)
    }

    static create(req, res, next) { //Temporary (need to add input Category & image)
        const createdData = {
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            price: req.body.price
        }

        Product.create(createdData)
            .then(created_data => {
                res.status(201).json(created_data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    static update(req, res, next) {
        const id = {
            _id: req.params.id
        }
        const updatedData = {
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            price: req.body.price,
            createdAt: new Date()
        }

        Product.findByIdAndUpdate(id, updatedData)
            .then(updated_data => {
                res.status(200).json(updated_data)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const id = {
            _id: req.params.id
        }

        Product.findByIdAndDelete(id)
            .then(deleted_data => {
                res.status(200).json(deleted_data)
            })
            .catch(next)
    }


}

module.exports = ProductController