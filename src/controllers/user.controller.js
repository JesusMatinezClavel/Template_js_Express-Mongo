import User from "../models/User.js"
import { handleError } from "./utils/handleErrors.js"

export const addBooktoFavorite = async ({ body, tokenData }, res) => {
    const title = body.title
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password')
        res.status(200).json({
            success: true,
            result: users
        })

    } catch (error) {
        handleError(res, 500, error.message)
    }
}