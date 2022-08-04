import Users from "./usersModel.js"
import bcrypt from "bcrypt"
import uniqid from "uniqid"
import jwt from "jsonwebtoken"
import {createError} from "../utils/error.js"

export const createUsers = async (users) => {
	const {email, password, confirmPassword} = users
	if(!email || !password || !confirmPassword) return createError("Please check again your field", 404)
	if(password.length < 8) return createError("Password length must min 8 character", 404)
	if(password != confirmPassword) return createError("Please check again your password", 404)
	try{
		const checkEmail = await Users.findOne({where:{email: email}, attributes: ["email", "id_users"]});
		if(checkEmail != null) return createError("Email already used")
		const hashPassword = await bcrypt.hash(password, 10)
		const id = uniqid()
		var result = Users.create({id_users: id, email, password: hashPassword})
		result = {email, password: hashPassword}
		return result
	}catch(error){
		console.log(error)
		return createError("Something error", 500)
	}
}

export const loginUsers = async (users) => {
	const {email, password} = users
	if(!email || !password) return createError("Please check again your field", 404)
	try{
		const result = await Users.findOne({where: {email: email}, attributes: ["id_users", "email", "password"]})
		if(result == null) return createError("User not found")
		const user = JSON.parse(JSON.stringify(result))
		const checkPassword = await bcrypt.compare(password, user.password)
		if(!checkPassword) return createError("Password Wrong", 404)
		const token = jwt.sign({email, id: user.id_users}, "RAHASIA")
        return token
	}catch(error){
        console.log(error)
        return createError("Something error", 500)
	} 
}