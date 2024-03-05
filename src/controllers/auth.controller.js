export const register = (req, res) => {
    res.status(201).json({
        success: true,
        message: `User registration sucesfull!`
    })
}

export const login = (req, res) => {
    res.status(200).json({
        success: true,
        message: `User loggin sucesfully!`
    })
}
