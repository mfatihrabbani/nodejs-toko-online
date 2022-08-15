import Checkouts from "./checkoutsModel.js"
import Orders from "../orders/ordersModel.js"
import {createError} from "../utils/error.js"
import uniqid from "uniqid"

const createCharge = async (data) => {
	const {orderId, userId} = data
	if(!orderId || !userId) return createError("Order Id or User Id cannot empty", 401)
	try{
		const checkOrder = await Orders.findOne({where: {id_orders: orderId}})
		const order = JSON.parse(JSON.stringify(checkOrder))
		if(order == null) return createError("Order not found", 401)
		const id = uniqid()
		const resultCheckout = await Checkouts.create({id_orders: orderId, id_users: userId, id_checkouts: id})
		const resultOrders = Orders.update({payment_status: "WAITING"}, where: {id_orders: orderId})
		if(order.payment == "ID_OVO" || order.payment == "ID_DANA"){
			const resultCharge = await createChargeEwallet(order)
		}
		return resultCharge
	}catch(error){
		console.log(error)
		return createError("Something error", 500)
	}
}