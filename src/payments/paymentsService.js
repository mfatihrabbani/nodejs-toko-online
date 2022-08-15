import Xendit from "xendit-node"
import dotenv from "dotenv"
import {createError} from "../utils/error.js"
dotenv.config()

const x = new Xendit({
	secretKey: process.env.XENDITKEY
});
const { EWallet } = x;
const ewalletSpecificOptions = {};
const ew = new EWallet(ewalletSpecificOptions);

export const createChargeEwallet = async (data) => {
	const {id_products, payment, total} = data
	if(!orderId || !userId || !payment) return createError("Cannot make charge", 401)
		try{
			switch(method){
			case "ID_OVO":
				const charge = await ew.createEWalletCharge({
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
				const charge = await ew.createEWalletCharge({
					referenceID: id_products,
			  		currency: 'IDR',
			  		amount: total,
			  		checkoutMethod: 'ONE_TIME_PAYMENT',
			  		channelCode: 'ID_DANA',
			  		channelProperties: {
 	   					success_redirect_url: 'http://localhost:3000/payment/callback',
  					}
			}) 
		}
		return charge
		}catch(error){
			console.log(error)
			return createError("Something error", 500)
		}
		

}