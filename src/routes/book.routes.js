import { Router } from "express";
import { createBook } from "../controllers/book.controler.js";

const router = Router();

router.post('/',createBook)

export default router










