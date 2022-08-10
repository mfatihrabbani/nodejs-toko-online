import express from "express"
import users from "./users/usersRoute.js"
import products from "./products/productsRoute.js"
import categorys from "./categorys/categorysRoute.js"
import carts from "./carts/cartsRoute.js"
import orders from "./orders/ordersRoute.js"

const router = express.Router()

router.use("/users", users)
router.use("/products", products)
router.use("/categorys", categorys)
router.use("/carts", carts)
router.use("/orders", orders)

export default router