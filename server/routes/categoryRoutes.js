const router = require('express').Router()
const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.displayAll)

module.exports = router