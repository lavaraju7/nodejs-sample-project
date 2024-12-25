exports.up = function(knex) {
    return knex.schema.createTable('superhero_powers', table => {
      table.increments('id').primary();
      table.integer('superhero_id').unsigned().references('id').inTable('superheroes').onDelete('CASCADE');
      table.integer('power_id').unsigned().references('id').inTable('powers').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('superhero_powers');
  };
  