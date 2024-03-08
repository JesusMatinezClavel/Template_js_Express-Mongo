import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";

const router = Router();

// CREAR ADD BOOKS TO FAVORITE
router.get('/', getUsers)

export default router

