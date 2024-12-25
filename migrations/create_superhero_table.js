exports.up = function(knex) {
    return knex.schema.createTable('superheroes', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('alias').notNullable();
      table.string('team');
      table.date('first_appearance');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('superheroes');
  };
  