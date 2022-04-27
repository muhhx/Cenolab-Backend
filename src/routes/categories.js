const router = require('express').Router()
const getCategory = require('../controllers/categories')

router.get("/", getCategory)

module.exports = router