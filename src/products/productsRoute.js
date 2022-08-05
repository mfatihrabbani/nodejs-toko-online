import express from "express"
import {postProduct, listProducts} from "./productsController.js"
const router = express.Router()

router.post("/", postProduct)
router.get("/", listProducts)

export default router