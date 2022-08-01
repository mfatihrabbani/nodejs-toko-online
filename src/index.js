import express from "express"

const app = express()

app.get("/", (req, res) => {
	res.send("Hello")
})

app.use((err, req, res, next) => {
	if(err)
})

app.listen(3000, (err) => {
	if (err) console.log("Server Not Running")
	console.log("Server Running")
})