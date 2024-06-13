// src/domain/usecases/CreateUser.js
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(user) {
        return await this.userRepository.addUser(user);
    }
}

module.exports = CreateUser;
