import Carts from "./cartsModel.js"
import Products from "../products/productsModel.js"
import Users from "../users/usersModel.js" 
import {Op} from "sequelize"
import {createError} from "../utils/error.js"

export const addToCart = async (data) => {
	const {userId, productId, quantity} = data
	if(!userId || !productId || !quantity) return createError("Please check cart field", 401)
	if(quantity <= 0) return createError("Quantity min 1")
	try{
		const checkUser = await Users.findOne({where: {id_users: userId}})
		const resultUser = JSON.parse(JSON.stringify(checkUser))
		if(resultUser == null) return createError("User not found", 404)
		const checkProduct = await Products.findOne({where: {id_product: productId}})
		const resultProduct = JSON.parse(JSON.stringify(checkProduct))
		if(resultProduct == null) return createError("Cannot add to cart, product not found", 401)
		const checkProdcutInCart = await Carts.findOne({where: {[Op.and]: [{id_product: productId}, {id_users: userId}]}})
		const resultProductInCart = JSON.parse(JSON.stringify(checkProdcutInCart))
		if(resultProductInCart != null){
			const newQuantity = resultProductInCart.quantity + quantity
			Carts.update({quantity: newQuantity}, {where: {[Op.and]: [{id_product: productId}, {id_users: userId}]}})
			return data
		}
		const addCart = await Carts.create({id_users: userId, id_product: productId, quantity})
		return data
	}catch(error){
		console.log(error)
		return createError("Something error", 500)
	}
}