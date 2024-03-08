import jwt from "jsonwebtoken";
import User from "../models/User.js";
import 'dotenv/config'

export const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        if (!token) {
            res.status(400).json(
                {
                    success: false,
                    message: `No token found!`
                }
            )
        }

        const isValid = jwt.verify(token, process.env.JWT_SECRET)

        console.log(isValid);

        if (!isValid) {
            res.status(400).json({
                success: false,
                message: `INVALID TOKEN`,
            })

        }

        req.tokenData = {
            userID: isValid.iat,
            roleName: isValid.roleName
        }

        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `NO TOKEN FOUND`,
            error: error.message
        })
    }
}