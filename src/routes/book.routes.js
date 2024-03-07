import { Router } from "express";
import { createBook, getAllBooks, updateBook } from "../controllers/book.controler.js";

const router = Router();

router.post('/',createBook)
router.get('/', getAllBooks)
router.put('/', updateBook)

export default router










