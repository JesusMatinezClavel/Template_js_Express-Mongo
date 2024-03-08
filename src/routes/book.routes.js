import { Router } from "express";
import { createBook, deleteAllBooks, deleteBook, getBooks, updateBook } from "../controllers/book.controler.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/',createBook)
router.get('/', auth, getBooks)
router.put('/', updateBook)
router.delete('/', deleteBook)
router.delete('/', deleteAllBooks)

export default router










