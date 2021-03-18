const express = require("express")
const routes = express.Router()

// Middlewares
const RequestValidation = require("./middlewares/RequestValidation")

// Validations
const TeacherValidation = require("./validations/teacher.validation")
const CourseValidation = require("./validations/course.validation")

// Controllers
const TeacherController = require("./controllers/teacher.controller")
const CourseController = require("./controllers/course.controller")

// Routes
routes.get("/teacher", TeacherController.getAll)
routes.post("/teacher", RequestValidation(TeacherValidation.create), TeacherController.create)

routes.get("/course", CourseController.getAll)
routes.post("/course", RequestValidation(CourseValidation.create), CourseController.create)

module.exports = routes
