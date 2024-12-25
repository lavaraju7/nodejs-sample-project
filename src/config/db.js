const knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./knexFile');

// Initialize knex with the development configuration
const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

// Bind Objection.js to the knex instance
Model.knex(db);

module.exports = db;
