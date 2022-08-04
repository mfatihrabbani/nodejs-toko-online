import Products from "./productsModel.js"
import {createError} from "../utils/error.js"
import Categorys from "../categorys/categorysModel.js"
import uniqid from "uniqid"

export const createProduct = async (products) => {
	const {productName, productDesc, productPrice, productStock, productCategory} = products
	if(!productName, !productPrice, !productCategory, !productStock) return createError("Please check again your field", 401)
	if(productPrice < 0) return createError("Price can't under 0", 401)
	try{
		const checkCategory = await Categorys.findOne({where: {category_name: productCategory}})
		if(checkCategory == null) return createError("Please check again category, category not listed", 401)
		const category = JSON.parse(JSON.stringify(checkCategory)) 
		const id = uniqid()
		Products.create({
			id_product: id, 
			product_name: productName, 
			product_desc: productDesc, 
			product_stock: productStock,
			product_price: productPrice,
			product_category: category.id_category
		})
		const data = {idProduct: id, productName, productDesc, productPrice, productStock, productCategory}
		return data
	}catch(error){
		console.log(error)
		return createError("Something error", 500)
	}
}