const Users = require('../model/Users')
const { hash } = require('bcryptjs')

Users.register = async (res, data) => {
    const { username, email, password } = data
    
    try {
        await Users.sync()
        const hased = await hash(password, 10)
        const data = await Users.create({
            username, email, password: hased
        })
        const { id, createdAt } = data
        res.status(201).json({ id, username, createdAt })
    } catch (error) {
        console.log(`${error}`)
        res.status(403).json({ message : `Email: ${email} already exist...` })
    }

}

module.exports = Users