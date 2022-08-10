import {createOrder} from "./ordersService.js"

export const orderItem = async (req, res, next) => {
	const {userId, productId, quantity, payment} = req.body
	const data = {userId, productId, quantity, payment}
	try{
		const result = await createOrder(data)
		if (result.status != undefined) return next(result)
		return res.status(201).json({status: "Success", code: 201, data: result})
	}catch(error){
		return next(error)
	}
}