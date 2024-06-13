// src/interfaces/graphql/resolvers.js
const User = require('../../domain/entities/User');
const SequelizeUserRepository = require('../../infrastructure/db/SequelizeUserRepository');
const CreateUser = require('../../domain/usecases/CreateUser');
const { userSchema } = require('./validators/userValidation');

const userRepository = new SequelizeUserRepository();
const createUser = new CreateUser(userRepository);

const resolvers = {
    Query: {
        allUsers: async () => {
            const user = await userRepository.allUsers();
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        },
        getUser: async (_, { id }) => {
            const user = await userRepository.getUserById(id);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        },
       
    },
    Mutation: {
        createUser: async (_, { id, name, email }) => {
            const { error } = userSchema.validate({ id, name, email });
            if (error) {
                throw new Error(`Validation error: ${error.details[0].message}`);
            }

            const user = new User(id, name, email);
            return createUser.execute(user);
        },
        deleteUser: async (_,{ id }) => {
            
            const user = await userRepository.deleteUser(id);
            
            return user;
        }
    },
};

module.exports = resolvers;
