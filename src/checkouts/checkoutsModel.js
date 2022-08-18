import sequelize from "../config/databaseConfig.js"
import Orders from "../orders/ordersModel.js"
import Users from "../users/usersModel.js"
import {DataTypes} from "sequelize"

const Checkouts = sequelize.define("checkouts_item", {
	id_checkouts: {
		type: DataTypes.STRING,
		allowNull: false
	},
	id_orders: {
		type: DataTypes.STRING,
		allowNull: false
	},
	id_users: {
		type: DataTypes.STRING,
		allowNull: false
	}
})

Checkouts.belongsTo(Orders, {foreignKey: "id_orders"})
Checkouts.belongsTo(Users, {foreignKey: "id_users"})


Checkouts.sync({alter: false})

export default Checkouts