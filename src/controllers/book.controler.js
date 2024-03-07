import Book from "../models/Books.js"



export const createBook = async (req, res) => {
    try {
        const { title, description, author } = req.body

        if (!title || !description) {
            return res.status(200).json({
                success: false,
                message: `title or description invalid!`,
            })
        }
        
        const book = await Book.findOne(
            {
                title: title,
                author: author
            }
        )

        if (book) {
            return res.status(200).json({
                success: false,
                message: `Book already exists!`,
            })
        }

        const newBook = await Book.create(
            {
                title,
                description,
                author
            }
        )


        res.status(200).json({
            success: true,
            message: `New book created!`,
            Results: newBook
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `server not responsive`,
            error: error.message
        })
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()

        res.status(200).json({
            success: true,
            message: `New book created!`,
            Results: books
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `server not responsive`,
            error: error.message
        })
    }
}