import { Router } from "express";

const router = Router()


export const getUsers = (req, res) => {
    res.status(201).json({
        success: true,
        message: `User registration sucesfull!`
    })
}

export const createUsers = (req, res) => {
    res.status(201).json({
        success: true,
        message: `User created!`
    })
}

export const updateUsers = (req, res) => {
    res.status(201).json({
        success: true,
        message: `User update sucesfull!`
    })
}

export const deleteUsers = (req, res) => {
    res.status(201).json({
        success: true,
        message: `User deleted!`
    })
}

export default router