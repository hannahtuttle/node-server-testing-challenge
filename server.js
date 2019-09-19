const express = require('express')
const testRouter = require('./testRouter/testRouter.js')

const server = express()

server.use(express.json());
server.use('/test', testRouter)

server.get('/', (req, res) => {
    res.status(200).jason({message: "It\'s working"})
})

module.exports = server;