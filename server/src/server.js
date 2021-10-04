const express = require('express')
const config = require('./config/config')
const route = require('./router/route')
const cors = require('cors')
const { SERVER_PORT } = require('./config/env')

const app = express()
app.use(cors())
app.use(express.json())


app.use('/', route)

app.listen(SERVER_PORT, () => {
    config.authenticate()
        .then(() => {
            console.log(`Database connected...`)
            console.log(`App running on port ${SERVER_PORT}`)
        }).catch(err => console.log(`${err}`))
})