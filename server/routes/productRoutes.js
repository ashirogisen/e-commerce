const router = require('express').Router()
const productController = require('../controllers/productController')

router.post('/', productController.create)
router.get('/', productController.displayAll)
router.put('/', productController.update)

module.exports = router