import express from "express"
import users from "./users/usersRoute.js"
import products from "./products/productsRoute.js"
import categorys from "./categorys/categorysRoute.js"

const router = express.Router()

router.use("/users", users)
router.use("/products", products)
router.use("/categorys", categorys)

export default router