const Joi = require('joi')

const Response = require('../configs/response')
const ResponseUtil = require('../utils/response')

const pick = (object, keys) => {
    return keys.reduce((obj, key) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
            obj[key] = object[key]
        }

        return obj
    }, {})
}

const RequestValidation = (schema) => async (req, res, next) => {
    const validSchema = pick(schema, ['query', 'body'])
    const object = pick(req, Object.keys(validSchema))
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' } })
        .validate(object)

    if (error)
        return await ResponseUtil.handler(res, Response.INVALID_REQUEST)

    Object.assign(req, value)

    return next()
}

module.exports = RequestValidation
