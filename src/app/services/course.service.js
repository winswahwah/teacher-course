const Response = require('../configs/response')

const { Course } = require("../models")

exports.getAll = async () => {
    try {
        return await Course.findAll({ include: 'teacher' })
    } catch (error) {
        throw Response.INTERNAL_SERVER_ERROR
    }
}

exports.create = async (payload) => {
    try {
        return await Course.create(payload)
    } catch (error) {
        throw Response.INTERNAL_SERVER_ERROR
    }
}
