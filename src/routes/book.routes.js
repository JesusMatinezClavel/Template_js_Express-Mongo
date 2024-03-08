import { Router } from "express";
import { createBook, deleteAllBooks, deleteBook, getBooks, updateBook } from "../controllers/book.controler.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/', auth, createBook) // SUPERADMIN
router.get('/', getBooks)
router.put('/', auth, updateBook) // SUPERADMIN 
router.delete('/', auth, deleteBook) // SUPERADMIN
router.delete('/', auth, deleteAllBooks) // SUPERADMIN

export default router










