const test = require('./testRouterModul.js')
const db = require('../data/dbConfig.js')

describe('test model', () => {
    beforeEach(async () => {
        await db('test').truncate()
    })

    describe('it should add a person to the test.db3',  () => {
        it('add', async () => {
            const person = await test.add({name:'Hannah', age: 29})
            let people = await db('test')
            expect(people).toHaveLength(1)

        })

        it('should have a name in the list', async () => {
            const [id] = await test.add({name:'Hannah', age: 29})
            let people = await db('test').where({id}).first()
            console.log(people)
            expect(people.name).toBe('Hannah')
            expect(people.age).toBe(29)
        })
    })

    describe('it should remove a person from test.db3', () => {
        it('remove', async () => {
            const person = await test.add({name:'Hannah', age: 29})
            const del = await test.remove(1)
            let people = await db('test')
            expect(people).toHaveLength(0)
        })
     it('checks to see if a person is not there', async () => {
        const [id] = await test.add({name:'Hannah', age: 29})
        const del = await test.remove(1)
        let people = await db('test').where({id}).first()
        console.log(people)
        expect(people).not.toEqual({name:'Hannah'})
        expect(people).not.toEqual({age:29})
     })

    })
})