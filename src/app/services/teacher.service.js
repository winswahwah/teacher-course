const Response = require('../configs/response')

const { Teacher } = require("../models")

exports.getById = async (id) => {
    try {
        return await Teacher.findOne({
            where: { id: id },
            include: 'courses'
        })
    } catch (error) {
        throw Response.INTERNAL_SERVER_ERROR
    }
}

exports.getAll = async () => {
    try {
        return await Teacher.findAll({ include: 'courses' })
    } catch (error) {
        throw Response.INTERNAL_SERVER_ERROR
    }
}

exports.create = async (payload) => {
    try {
        return await Teacher.create(payload)
    } catch (error) {
        throw Response.INTERNAL_SERVER_ERROR
    }
}
