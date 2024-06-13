// src/infrastructure/db/SequelizeUserRepository.js
const UserRepository = require('../../domain/repositories/UserRepository');
const UserModel = require('./models/UserModel');

class SequelizeUserRepository extends UserRepository {
    
    async allUsers() {
        return await UserModel.findAll();
    }

    async addUser(user) {
        return await UserModel.create(user);
    }

    async getUserById(id) {
        return await UserModel.findByPk(id);
    }

    async deleteUser(id) {
        return await UserModel.destroy({
            where:{
                id:id
            }
        });
    }
}

module.exports = SequelizeUserRepository;
