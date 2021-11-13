var knexfile = require('../../knexfile');
var knex = require('knex')(knexfile.development);
module.exports = knex;
