


export const createBook = async (req, res) => { 
    try {
        res.status(200).json({
            success: false,
            message:`New book created!`,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:`server not responsive`,
            error: error.message
        })
    }    
}