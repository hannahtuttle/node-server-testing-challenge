const db = require('../data/dbConfig.js')

module.exports = {
    add,
    remove
}

function add (item) {
    return db('test').insert(item, 'id')
}

function remove (id) {
    return db('test').where('id', id).delete();
}