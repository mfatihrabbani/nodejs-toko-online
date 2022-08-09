import {createCategory} from "./categorysService.js"

export const postCategory = async (req, res, next) => {
	const {categoryName} = req.body
	try{
		const result = await createCategory(categoryName)
		if (result.status != undefined) return next(result) 
		return res.status(201).json({status: "Success", code: 201, data: result})
	}catch(error){
		return next(error)
	}
}