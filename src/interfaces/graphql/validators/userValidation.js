// src/interfaces/graphql/validators/userValidation.js
const Joi = require('joi');

const userSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required()
});

module.exports = {
    userSchema
};
