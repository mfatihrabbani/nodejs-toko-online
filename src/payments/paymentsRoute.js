import express from "express"
import {callbackResponse} from "./paymentsController.js"

const router = express.Router()

router.post("/callback", callbackResponse)

export default router