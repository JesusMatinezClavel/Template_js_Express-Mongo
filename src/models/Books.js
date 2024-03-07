import { Schema, model } from "mongoose";


const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Book = model('Book', bookSchema)

export default Book