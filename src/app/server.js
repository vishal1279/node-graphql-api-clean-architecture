// src/app/server.js
const { ApolloServer } = require('apollo-server');
const typeDefs = require('../interfaces/graphql/typeDefs');
const resolvers = require('../interfaces/graphql/resolvers');
const sequelize = require('../infrastructure/db/connection');

// Synchronize the database and start the server
sequelize.sync().then(() => {
    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
});
