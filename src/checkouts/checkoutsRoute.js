import express from "express"
import {checkoutsItem} from "./checkoutsController.js"

const router = express.Router()

router.post("/", checkoutsItem)

export default router