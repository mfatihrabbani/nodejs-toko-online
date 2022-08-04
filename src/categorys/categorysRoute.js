import express from "express"
import {postCategory} from "./categorysController.js"
const router = express.Router()

router.post("/", postCategory)

export default router