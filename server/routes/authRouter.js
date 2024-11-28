const express = require("express")
const router = express.Router()

router.get('/google', (req, res) => {
    res.status(200).json({message: 'hello from the login router'})
})

module.exports = router