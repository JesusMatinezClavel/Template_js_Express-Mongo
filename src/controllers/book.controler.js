import Book from "../models/Books.js"
import User from "../models/User.js"



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

export const getBooks = async (req, res) => {
    try {
        let { title, author, description } = req.query

        if (title) {
            author = null
            description = null
            let titleBooks = await Book.find(
                {
                    title
                }
            )
            if (titleBooks.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: `There's no book with the title: ${title}`,
                    result: titleBooks
                })
            }
            res.status(200).json({
                success: true,
                message: `All books called by title: ${title}`,
            })
        }

        if (author) {
            description = null
            let authorBooks = await Book.find(
                {
                    author
                }
            )
            if (authorBooks.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: `There's no book with the author: ${author}`,
                })
            }
            res.status(200).json({
                success: true,
                message: `All books called by auhor: ${author}`,
                result: authorBooks
            })
        }

        if (description) {
            let descriptionBooks = await Book.find(
                {
                    description
                }
            )
            if (descriptionBooks.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: `There's no book with the description: ${description}`,
                })
            }
            res.status(200).json({
                success: true,
                message: `All books called by description: ${description}`,
                result: descriptionBooks
            })
        }
        if (!title && !author && !description) {
            const books = await Book.find()
            res.status(200).json({
                success: true,
                message: `All books called!`,
                result: books
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `server not responsive`,
            error: error.message
        })
    }
}

export const updateBook = async (req, res) => {
    try {
        let { title, description } = req.body
        const previousTitle = req.query.title
        const bookBefore = await Book.findOne(
            {
                title: previousTitle
            }
        )

        if (title === "") {
            let title = bookBefore.title
        }
        if (description === "") {
            let description = bookBefore.description
        }
        if (title === "" && description === "") {
            return res.status(400).json({
                success: false,
                message: `You need title or description news to update!`,
            })
        }
        if (!bookBefore) {
            return res.status(400).json({
                success: false,
                message: `Book doesn't exist!`,
            })
        }

        await Book.findOneAndUpdate(
            {
                title: previousTitle
            },
            {
                title,
                description
            }
        )

        const bookAfter = await Book.findOne(
            {
                title: title
            }
        )

        res.status(200).json({
            success: true,
            message: `Book ${previousTitle} has been updated`,
            previous: bookBefore,
            results: bookAfter
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `server not responsive`,
            error: error.message
        })
    }
}

export const deleteBook = async (req, res) => {
    try {
        const { title } = req.query

        if (!title) {
            return res.status(400).json({
                success: false,
                message: `Title invalid!`,
            })
        }

        const removeBook = await Book.findOne(
            {
                title
            }
        )

        if (!removeBook) {
            return res.status(400).json({
                success: false,
                message: `Book doesn't exist!`,
            })
        }

        await Book.findOneAndDelete({
            title
        })


        res.status(200).json({
            success: true,
            message: `Book ${removeBook.title} has been deleted`,
            results: removeBook
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `server not responsive`,
            error: error.message
        })
    }
}

export const deleteAllBooks = async (req, res) => {
    try {
        let deleteAll = req.query
        console.log(deleteAll);
        if (deleteAll) {
            const allBooks = await Book.find()
            await Book.deleteMany(allBooks)
            res.status(200).json({
                success: true,
                message: `All books has been deleted`,
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `server not responsive`,
            error: error.message
        })
    }
}

