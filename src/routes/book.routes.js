import { Router } from "express";
import { createBook, deleteBook, getBooks, updateBook } from "../controllers/book.controler.js";

const router = Router();

router.post('/',createBook)
router.get('/', getBooks)
router.put('/', updateBook)
router.delete('/', deleteBook)

export default router










