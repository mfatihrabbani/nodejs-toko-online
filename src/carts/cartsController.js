import {addToCart} from "./cartsService.js"

export const postCarts = async (req, res, next) => {
	const {userId, productId, quantity} = req.body
	const data = {userId, productId, quantity}
	try{
		const result = await addToCart(data)
		if (result.status != undefined) return next(result) 
		return res.status(201).json({status: "Success", code: 201, data: result})
	}catch(error){
		return next(error)
	}
}