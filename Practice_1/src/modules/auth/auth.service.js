import ApiError from "../../common/utils/api.error";
import { generateRsetToken } from "../../common/utils/jwt.utils";
import User from "./auth.model.js"

const register = async ({name, email, password, role}) => {

    const exixting = await User.findOne({email})
    if(exixting){
        throw ApiError.conflict("Email already exists")
    }
    const { rawToken, hasedToken} = generateRsetToken()
    const user = await User.create({
        name,
        email,
        password,
        role,
        veerifiationtoken: hasedToken
    })

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.verificationToken

    return userObj
}

export { register}