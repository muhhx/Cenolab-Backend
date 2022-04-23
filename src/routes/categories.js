const router = require('express').Router()
const getCategory = require('../controllers/categories')

router.get("/:categoryId", getCategory)

module.exports = router