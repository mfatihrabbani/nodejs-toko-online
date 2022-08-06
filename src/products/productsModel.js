import sequelize from "../config/databaseConfig.js"
import {DataTypes} from "sequelize"
import Categorys from "../categorys/categorysModel.js"

const Products = sequelize.define("products", {
	id_product : {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false
	},
	product_name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	product_desc: {
		type: DataTypes.TEXT,
		allowNull: true
	},
	product_price: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	product_image: {
		type: DataTypes.STRING,
		allowNull: true
	},
	product_stock: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	product_category: {
		type: DataTypes.STRING,
		allowNull: false,
	},product_status: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true
	}
})

Products.belongsTo(Categorys, {foreignKey: "product_category"})

Products.sync({alter: false})

export default Products
