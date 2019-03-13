const { readFileSync } = require('fs');
const { gql } = require('apollo-server');

const typeDefs = gql(readFileSync(__dirname + '/schema.graphql').toString());

module.exports = typeDefs;
