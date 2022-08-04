import express from "express"
import {postProduct} from "./productsController.js"
const router = express.Router()

router.post("/", postProduct)

export default router