const router = require('express').Router()
const cartController = require('../controllers/cartController')

router.post('/', cartController.create)
router.get('/', cartController.display)
router.patch('/:id', cartController.update)
router.delete('/:id', cartController.delete)

module.exports = router