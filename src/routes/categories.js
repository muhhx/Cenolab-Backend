const router = require('express').Router()
const {
    getCategories,
    getCategory
} = require('../controllers/categories')

router.get("/", getCategories)

router.get("/:categoryId", getCategory)

module.exports = router