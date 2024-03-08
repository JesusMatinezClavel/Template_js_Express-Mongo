import bcrypt from "bcrypt";
import 'dotenv/config'
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { handleError } from "./utils/handleErrors.js";
import { json } from "express";


export const register = async ({ body }, res) => {
    try {
        const { name, email, password } = body

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: `name, email or password is invalid!`
            })
        }

        if (password.length < 6 || password.length > 10) {
            return res.status(400).json({
                success: false,
                message: "Password must contain between 6 and 10 characters"
            })
        }

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }

        const passwordEncrypted = bcrypt.hashSync(password, 5)

        const user = await User.findOne({
            email: email
        })

        if (user) {
            return res.status(400).json({
                success: false,
                message: `email ${email} is already in use!`
            })
        }

        const newUser = await User.create(
            {
                name,
                email,
                passwordEncrypted
            }
        )

        res.status(201).json({
            success: true,
            message: "User registered succesfully",
            data: newUser
        })
    } catch (error) {
        handleError(res, 500, error.message)
    }
}

export const login = async (req, res) => {

    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "email and password are mandatories"
            })
        }

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email format is not valid"
                }
            )
        }

        const user = await User.findOne(
            {
                email: email
            }
        )

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        const isValidPassword = bcrypt.compareSync(password, user.password)

        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        const token = jwt.sign(
            {
                userId: user.id,
                roleName: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1234h"
            }
        )

        res.status(200).json({
            success: true,
            message: "User logged succesfully",
            token: token //MOSTRAMOS EL TOKEN DE MANERA TEMPORAL PARA PODER PROBAR CON ÉL OTRA FUNCIONALIDADES
        })

    } catch (error) {
        superCatch(res, 'LOGIN FAILED')
    }
}

