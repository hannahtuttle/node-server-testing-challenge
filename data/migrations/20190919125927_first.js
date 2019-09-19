
exports.up = function(knex) {
  return knex.schema.createTable('test', tbl => {
      tbl.increments();
      tbl.string('name', 155).notNullable();
      tbl.integer('age');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tests')
};
