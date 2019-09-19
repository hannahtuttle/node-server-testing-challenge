const express = require('express')
const data = require('./testRouterModul.js')

const router = express.Router()

router.post('/', (req, res) => {
    const body = req.body;

    data.add(body)
    .then(person => {
        res.status(201).json(person)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
        data.remove(id)
        .then(result => (
            res.status(200).json(result)
        ))
        .catch(err => (
            res.status(500).send(err)
        ))
})

module.exports = router;