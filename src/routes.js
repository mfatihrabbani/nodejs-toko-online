import express from "express"
import users from "./users/usersRoute.js"
const router = express.Router()

router.use("/users", users)

export default router