const router = require('express').Router()
const transactionController = require('../controllers/transactionController')

router.get('/', transactionController.display)
router.post('/', transactionController.create)

module.exports = router