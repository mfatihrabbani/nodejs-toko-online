import {createProduct, getProductsList} from "./productsService.js"

export const postProduct = async (req, res, next) => {
	const {productName, productDesc, productPrice, productStock, productCategory} = req.body
	const product = {productName, productDesc, productPrice, productStock, productCategory}
	try{
		const result = await createProduct(product)
		if (result.status != undefined) return next(result) 
		return res.status(201).json({status: "Success", code: 201, data: result})
	}catch(err){
		console.log(err)
		return next(err)
	}
}

export const listProducts = async (req, res, next) => {
	const {category} = req.query
	const data = {category}
	try{
		const result = await getProductsList(data)
		if (result.status != undefined) return next(result)
		return res.status(200).json({status: "Success", code: 200, data: result})
	}catch(error){
		return next(error)
	}
}



