const express = require('express')
const service = require('../service')
const router = express.Router()
const { UsersService } = service

router
    .route('/signup')
    .post(async (req, res) => {
        const data = req.body
        await UsersService.register(res, data)
    })


module.exports = router