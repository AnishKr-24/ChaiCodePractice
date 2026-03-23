import ApiError from "../utils/apiError.js";

const validate = (Dtoclass) => {

    return (req, res, next) => {
        const {erors, value} = Dtoclass.validate(req.body)
        if(errors){
            throw ApiError.badRequest(errors.json("; "))
        }
        req.body = value
        next()
    }
}

export default validate