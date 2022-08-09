import express from "express"
import {postCarts} from "./cartsController.js"

const router = express.Router()

router.post("/", postCarts)

export default router