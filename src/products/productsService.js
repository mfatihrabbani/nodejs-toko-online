import Products from "./productsModel.js"
import Categorys from "../categorys/categorysModel.js"
import {Op} from "sequelize"
import {createError} from "../utils/error.js"
import uniqid from "uniqid"

export const createProduct = async (products) => {
	const {productName, productDesc, productPrice, productStock, productCategory} = products
	if(!productName || !productPrice || !productCategory || !productStock) return createError("Please check again your field", 401)
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

export const getProductsList = async (data) => {
	let {category} = data
	let categoryQuery = false
	console.log(typeof(category))
	if(typeof(category) == "undefined"){
		console.log("Categori tidak ada")
		categoryQuery = true
		category = "A"
	}
	try{
		const checkCategory = async (category) => {
			if(category){
				const result = await Categorys.findOne({where: {category_name: category}})
				if (result != null) return JSON.parse(JSON.stringify(result.id_category))
				return JSON.parse(JSON.stringify(result))
			}
		}
		const categoryId = await checkCategory(category)
		console.log(categoryId)
		console.log(categoryQuery)
		const result = await Products.findAll({
			include: [{model: Categorys, required: false, attributes: ["id_category", "category_name"]}],
			attributes: ["id_product", "product_name", "product_price", "product_desc", "product_stock", "product_category"],
			where: {
				[Op.or]: [
					{product_category: categoryId || "A"},
					{product_status: categoryQuery}
					]
				}
		})
		const productsList = JSON.parse(JSON.stringify(result))
		console.log(productsList)
		if(productsList.length == 0) return createError("Products not found", 401)
		return productsList
	}catch(error){
		console.log(error)
		return createError("Something error", 500)
	}
}