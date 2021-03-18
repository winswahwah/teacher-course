const Response = {
    // INFO
    SUCCESS: {
        httpStatusCode: 200,
        message: 'Success'
    },
    CREATED_SUCCESS: {
        httpStatusCode: 201,
        message: 'Success'
    },
    // ERROR
    INVALID_REQUEST: {
        httpStatusCode: 400,
        message: 'Invalid Request'
    },
    TEACHER_NOT_FOUND: {
        httpStatusCode: 404,
        message: 'Teacher not found'
    },
    INTERNAL_SERVER_ERROR: {
        httpStatusCode: 500,
        message: 'Internal Server Error'
    }
}

module.exports = Response
