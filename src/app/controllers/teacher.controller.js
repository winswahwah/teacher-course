const Response = require('../configs/response')
const ResponseUtil = require('../utils/response')

const TeacherService = require('../services/teacher.service')

exports.getAll = async (req, res) => {
    try {
        const teachers = await TeacherService.getAll()

        return ResponseUtil.handler(res, Response.SUCCESS, teachers)
    } catch (error) {
        return ResponseUtil.handler(res, error)
    }
}

exports.create = async (req, res) => {
    try {
        const payload = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            age: req.body.age
        }
        const teacher = await TeacherService.create(payload)

        return ResponseUtil.handler(res, Response.CREATED_SUCCESS, teacher)
    } catch (error) {
        return ResponseUtil.handler(res, error)
    }
}
