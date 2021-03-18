const Response = require('../configs/response')

exports.handler = async (res, responseData, data) => {
    const httpStatusCode = responseData.httpStatusCode || Response.INTERNAL_SERVER_ERROR.httpStatusCode

    const responseBody = {
        data: data,
        message: responseData.message || Response.INTERNAL_SERVER_ERROR.message,
        executionDateTime: new Date().toISOString()
    }

    return res.status(httpStatusCode).json(responseBody)
}
