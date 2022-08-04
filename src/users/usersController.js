import {createUsers, loginUsers} from "./usersService.js"

export const register = async (req, res, next) => {
	const {email, password, confirmPassword} = req.body
	const users = {email, password, password, confirmPassword}
	try{
		const result = await createUsers(users)
		return res.status(201).json({status: "Success", code: 201, data: result})
	}catch(error){
		return next(error)
	}
}

export const login = async (req, res, next) => {
	const {email, password} = req.body
	const users = {email, password}
	try{
		const result = await loginUsers(users)
		return res.status(200).json({status: "Success", code: 200, data: {token: result}})
	}catch(error){
		return next(error)
	}
}
