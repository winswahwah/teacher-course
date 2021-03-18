const Joi = require('joi')

const create = {
    body: Joi.object().keys({
        firstName: Joi.string()
            .required(),
        lastName: Joi.string()
            .required(),
        age: Joi.number()
            .integer()
            .min(1)
            .required()
    }).required()
}

module.exports = {
    create
}
