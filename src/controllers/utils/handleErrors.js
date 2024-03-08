export const handleError = (res, errorCode, message) => {
    return res.status(errorCode).json({
        success: false,
        message: message,
    })
}