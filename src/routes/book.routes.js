import { Router } from "express";
import { createBook, deleteBook, getAllBooks, updateBook } from "../controllers/book.controler.js";

const router = Router();

router.post('/',createBook)
router.get('/', getAllBooks)
router.put('/', updateBook)
router.delete('/', deleteBook)

export default router










