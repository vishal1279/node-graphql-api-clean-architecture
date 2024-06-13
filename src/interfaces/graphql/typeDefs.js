// src/interfaces/graphql/typeDefs.js
const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        getUser(id: ID!): User,
        allUsers: [User!]!
    }

    type Mutation {
        createUser(id: ID!, name: String!, email: String!): User,
        deleteUser(id: ID!): User!
    }
`;

module.exports = typeDefs;
