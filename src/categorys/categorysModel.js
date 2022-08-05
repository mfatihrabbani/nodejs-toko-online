import sequelize from "../config/databaseConfig.js"
import {DataTypes} from "sequelize"

const Categorys = sequelize.define("categorys", {
	id_category: {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false
	},
	category_name: {
		type: DataTypes.STRING,
		allowNull: false
	}
})

Categorys.sync({alter: false})

export default Categorys