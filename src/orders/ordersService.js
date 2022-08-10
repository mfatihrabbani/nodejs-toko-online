import Orders from "./ordersModel.js"
import uniqid from "uniqid"
import Products from "../products/productsModel.js"
import Users from "../users/usersModel.js"
import {createError} from "../utils/error.js"

export const createOrder = async (data) => {
	let {userId, productId, quantity, payment} = data
	if(!userId || !productId || !quantity || !payment) return createError("Please check again order field", 401)
	if(quantity <= 0) return createError("Please check again quantity", 401)
	try{
		const checkProduct = await Products.findOne({where: {id_product: productId}})
		const checkUser = await Users.findOne({where: {id_users: userId}})
		const resultProduct = JSON.parse(JSON.stringify(checkProduct))
		console.log(resultProduct)
		const resultUser = JSON.parse(JSON.stringify(checkUser))
		if(resultProduct == null) return createError("Cannot create order, product not found", 401)
		if(resultUser == null) return createError("Cannot create order, user not found", 401)
		if(resultProduct.product_stock <= 0) return createError("Sold out", 401)
		const totalPrice = resultProduct.product_price * quantity
		const id = uniqid()
		console.log(id)
		const createProduct = await Orders.create({id_orders: id, id_products: productId, id_users: userId, amount: quantity, total: totalPrice, payment})
		data.orderId = id
		return data
	}catch(error){
		console.log(error)
		return createError("Something error", 500)
	}
}