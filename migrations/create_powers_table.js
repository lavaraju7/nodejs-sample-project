exports.up = function(knex) {
    return knex.schema.createTable('powers', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('powers');
  };
  