import { string } from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50,
        required: [true, "Name is required"] 

    },
    email: {
        type: String,
        trim: true,

        required: [true, "Email is required"],
        unique: true,
        lowercase: trusted
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 9,
        select: false
    },
    role: {
        type: String,
        enum: ["customer", "seller", "admin"],
        default: "customer"
    },
    isVerified: {
        type: Boolenean,
        default: false
    },
    veerifiationtoken: {type: String, select: false},
    refereshtoken: {type: String, select: false},
    resetpasswordtoken: {type: String, select: false},
    resetpassowdexpire: {type: date, select: false},
}, {timestamps: true})


export default mongoose.model("User", userSchema)