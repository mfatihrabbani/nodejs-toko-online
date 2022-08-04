import {createProduct} from "./productsService.js"

export const postProduct = async (req, res, next) => {
	const {productName, productDesc, productPrice, productStock, productCategory} = req.body
	const product = {productName, productDesc, productPrice, productStock, productCategory}
	try{
		const result = await createProduct(product)
		return res.status(201).json({status: "Success", code: 201, data: result})
	}catch(error){
		return next(error)
	}
}



