import {createCharge} from "./checkoutsService.js"

export const checkoutsItem = async (req, res, next) => {
	const {orderId, userId} = req.body
	const data = {orderId, userId}
	try{
		const result = await createCharge(data)
		console.log("RESULT", result)
		if (result.status != undefined && result.status != "PENDING") return next(result)
		console.log("RESULT", result)
		return res.status(201).json({status: "Success", code: 201, data: result})
	}catch(error){
		next(error)
	}
}