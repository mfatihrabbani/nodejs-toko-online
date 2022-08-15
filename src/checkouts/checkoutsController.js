export const checkoutsItem = (req, res, next) => {
	const {orderId, userId} = req.body
	const data = {orderId, userId}
	try{
		const result = await createCharge(data)
		if (result.status != undefined) return next(result)
		return res.status(201).json({status: "Success", code: 201, data: result})
	}catch(error){
		next(error)
	}
}