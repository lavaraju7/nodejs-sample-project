const { Model } = require('objection');

class Superhero extends Model {
  // Table name
  static get tableName() {
    return 'superheroes';
  }

  // Primary key column
  static get idColumn() {
    return 'id';
  }

  // JSON schema for validation
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'alias'],

      properties: {
        id: { type: ['integer','null'] },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        alias: { type: 'string', minLength: 1, maxLength: 255 },
        team: { type: 'string', minLength: 1, maxLength: 255 },
        first_appearance: { type: 'string', format: 'date' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      },
    };
  }

  // Relation mappings
  static get relationMappings() {
    const Power = require('./powerModel');

    return {
      powers: {
        relation: Model.ManyToManyRelation,
        modelClass: Power,
        join: {
          from: 'superheroes.id',
          through: {
            from: 'superhero_powers.superhero_id',
            to: 'superhero_powers.power_id',
          },
          to: 'powers.id',
        },
      },
    };
  }
}

module.exports = Superhero;
