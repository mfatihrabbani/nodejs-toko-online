import express from "express"
import bodyParser from "body-parser"
import router from "./routes.js"

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json());

app.use("/api", router)

app.use((err, req, res, next) => {
	if(err){
		const errorMessage = err.message || "Something error"
		const errorStatus = err.status || 500
		res.status(errorStatus).json({status: "Failed", code: errorStatus, message: errorMessage})
	}else{
		next()
	}
})

app.listen(3000, (err) => {
	if (err) console.log("Server Not Running")
	console.log("Server Running")
})
