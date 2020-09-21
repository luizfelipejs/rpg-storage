import knex from 'knex';
const knexFile = require("../../knexfile");

export default knex(knexFile.development);