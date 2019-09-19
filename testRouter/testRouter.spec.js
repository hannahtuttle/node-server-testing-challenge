const request = require('supertest')

const server = require('../server.js')

describe('testing POST /test', () => {
    it('sends a 201', () => {
        return request(server).post('/test')
        .send({name: 'Hannah', age:29})
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.status).toBe(201)
        })
    })
    it('returns JSON', () => {
        return request(server).post('/test')
        .send({name: 'Hannah', age:29})
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.type).toMatch(/json/i)
        })
    })
})

describe('it test DELETE /test', () => {
    it('sends 200 status', () => {
        return request(server)
        .delete('/test/:id')
        .send({id:1}).set('Accept', 'application/json')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
    it('returns JSON', () => {
        return request(server)
        .delete('/test/:id')
        .send({id:1})
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.type).toMatch(/json/i)
        })
    })
})