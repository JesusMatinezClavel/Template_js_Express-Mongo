import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: false
        }
    },
    {
        email: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        password: {
            type: String,
            required: true
        }
    },
    {
        role: {
            type: String,
            enum: ["user", "admin", "super_admin"],
            default: "user"
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
)

const User = model('User', userSchema)

export default User