const router = require('express').Router()

router.get("/", (req, res) => {
    res.send("Opa")
})

module.exports = router