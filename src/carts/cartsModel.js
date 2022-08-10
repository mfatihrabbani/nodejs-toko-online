import sequelize from "../config/databaseConfig.js"
import Products from "../products/productsModel.js"
import {DataTypes} from "sequelize"

const Carts = sequelize.define("carts", {
	id_users: {
		type: DataTypes.STRING,
		allowNull: false
	},
	id_product:{
		type: DataTypes.STRING,
		allowNull: false
	},
	quantity:{
		type: DataTypes.INTEGER,
		allowNull: false
	},
})

Carts.belongsTo(Products, {foreignKey: "id_product"})

Carts.sync({alter: false})

export default Carts