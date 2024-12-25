const { Model } = require('objection');

class Power extends Model {
  // Table name
  static get tableName() {
    return 'powers';
  }

  // Primary key column
  static get idColumn() {
    return 'id';
  }

  // JSON schema for validation
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: ['integer','null'] },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', maxLength: 1000 },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      },
    };
  }

  // Relation mappings
  static get relationMappings() {
    const Superhero = require('./superHeroModel');

    return {
      superheroes: {
        relation: Model.ManyToManyRelation,
        modelClass: Superhero,
        join: {
          from: 'powers.id',
          through: {
            from: 'superhero_powers.power_id',
            to: 'superhero_powers.superhero_id',
          },
          to: 'superheroes.id',
        },
      },
    };
  }
}

module.exports = Power;
