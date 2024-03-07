import { Router } from "express";
import authRoute from "./auth.routes.js";
import bookRoute from "./book.routes.js";


const router = Router()

router.use('/auth', authRoute)
router.use('/books', bookRoute)

export default router