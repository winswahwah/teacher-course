const Joi = require('joi')

const create = {
    body: Joi.object().keys({
        courseName: Joi.string()
            .required(),
        courseDescription: Joi.string()
            .required(),
        teacherId: Joi.number()
            .integer()
            .min(1)
            .required()
    }).required()
}

module.exports = {
    create
}
