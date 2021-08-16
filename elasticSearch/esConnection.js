const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  hosts: ["http://localhost:3000"]
});

module.exports = client;