export const callbackResponse = (req, res, next) => {
	res.status(201).send(req.body)
}