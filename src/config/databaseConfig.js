import Sequelize from "sequelize"

const sequelize = new Sequelize("toko_online", "root", "root", {
	"host": "localhost",
	"dialect": "mysql",
})

try{
	sequelize.connect(() => {
		console.log("Database connect")
	})
}catch(err){
	console.log(err)
	console.log("Database failed connect")
}

export default sequelize