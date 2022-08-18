import Xendit from "xendit-node"
import dotenv from "dotenv"
import {createError} from "../utils/error.js"
dotenv.config()

const apiKey = process.env.XENDITKEY


const x = new Xendit({
	secretKey: process.env.XENDITKEY || "xnd_development_uGTi0jcuVx1YlkDukuHOCzf6MaBYByqwfH5ViW7ZUT1jhnJDFp7tiMEmR1KG2sh6"
});
const { EWallet } = x;
const ewalletSpecificOptions = {};
const ew = new EWallet(ewalletSpecificOptions);

export const createChargeEwallet = async (data) => {
	const {id_products, payment, total} = data
	console.log(apiKey)
	console.log( payment)
	if(!total || !payment) return createError("Cannot make charge", 401)
		try{
			switch(payment){
				case "ID_OVO":
					var charge = await ew.createEWalletCharge({
						referenceID: id_products,
				  		currency: 'IDR',
				  		amount: total,
				  		checkoutMethod: 'ONE_TIME_PAYMENT',
				  		channelCode: 'ID_OVO',
				  		channelProperties: {
	 	   					mobileNumber: '+6281234567890',
	  					}
				})
				break
			case "ID_DANA":
				var charge = await ew.createEWalletCharge({
					referenceID: id_products,
			  		currency: 'IDR',
			  		amount: total,
			  		checkoutMethod: 'ONE_TIME_PAYMENT',
			  		channelCode: 'ID_DANA',
			  		channelProperties: {
 	   					success_redirect_url: 'http://localhost:3000/api/payment/callback',
  					}
				})
				break
		}
		return charge
		}catch(error){
			console.log(error)
			return createError("Something error", 500)
		}
		

}