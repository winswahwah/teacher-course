const Response = require('../configs/response')
const ResponseUtil = require('../utils/response')

const TeacherService = require('../services/teacher.service')
const CourseService = require('../services/course.service')

exports.getAll = async (req, res) => {
    try {
        const courses = await CourseService.getAll()

        return ResponseUtil.handler(res, Response.SUCCESS, courses)
    } catch (error) {
        return ResponseUtil.handler(res, error)
    }
}

exports.create = async (req, res) => {
    try {
        const teacher = await TeacherService.getById(req.body.teacherId)

        if (!teacher)
            throw Response.TEACHER_NOT_FOUND

        const payload = {
            course_name: req.body.courseName,
            course_description: req.body.courseDescription,
            teacher_id: req.body.teacherId
        }
        const course = await CourseService.create(payload)

        return ResponseUtil.handler(res, Response.CREATED_SUCCESS, course)
    } catch (error) {
        return ResponseUtil.handler(res, error)
    }
}
