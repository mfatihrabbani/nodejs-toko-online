import sequelize from "../config/databaseConfig.js"
import {DataTypes} from "sequelize"


const Users = sequelize.define("users", {
	id : {
		primaryKey: true,
		type: DataTypes.STRING,
		allowNull: false,
	},
	email : {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	session_id : {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: ".",
	}
})

Users.sync({alter: true})

export default Users