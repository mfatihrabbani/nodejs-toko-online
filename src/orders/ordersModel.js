import sequelize from "../config/databaseConfig.js"
import Products from "../products/productsModel.js"
import Users from "../users/usersModel.js"
import {DataTypes} from "sequelize"

const Orders = sequelize.define("orders", {
	id_orders: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true
	},
	id_products: {
		type: DataTypes.STRING,
		allowNull: false
	},
	id_users: {
		type: DataTypes.STRING,
		allowNull: false
	},
	amount: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	total: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	payment: {
		type: DataTypes.STRING,
		allowNull: false
	},
	payment_status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: "PENDING"
	},
	order_status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: "PENDING"
	}
})

Orders.belongsTo(Products, {foreignKey: "id_products"})
Orders.belongsTo(Users, {foreignKey: "id_users"})

Orders.sync({alter: false})

export default Orders