import sequelize from "../config/databaseConfig.js"
import {DataTypes} from "sequelize"


const Users = sequelize.define("users", {
	id_users : {
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
	no_HP: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	session_id : {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: ".",
	}
})

Users.sync({alter: true})

export default Users