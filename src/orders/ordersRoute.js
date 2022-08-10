import express from "express"
import {orderItem} from "./ordersController.js"

const router = express.Router()

router.post("/", orderItem)

export default router