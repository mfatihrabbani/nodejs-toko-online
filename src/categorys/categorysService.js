import Categorys from "./categorysModel.js"
import {createError} from "../utils/error.js"
import uniqid from "uniqid"

export const createCategory = async (name) => {
	try{
		const checkCategory = await Categorys.findOne({where: {category_name: name}})
		if(checkCategory != null) return createError("Category already exist", 401)
		const id = uniqid()
		const result = await Categorys.create({id_category: id, category_name: name})
		return {categoryId: id, categoryName: name}
	}catch(error){
		console.log(error)
		return createError("Something error", 500)
	}
}