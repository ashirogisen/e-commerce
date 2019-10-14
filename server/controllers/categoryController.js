const Category = require('../models/category')

class categoryController {
    static displayAll(req, res, next) {
        Category.find()
            .then(category_data => {
                res.status(200).json(category_data)
            })
            .catch(next)
    }

}

module.exports = categoryController