class ApiError extends Error {
    constructor(status, message){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.CaptureStackTrace(this, this.constructor);
    }

    static badRequest(message = "Bad Request"){
        return new ApiError(400, message)
    }

    static unauthorized(message = "Unauthorized"){
        return new ApiError(401, message)
    }

    static conflict(message = "Conflict"){
        return new ApiError(409, message)
    }
}

export default ApiError