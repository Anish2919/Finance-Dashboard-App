import mongoose from 'mongoose'; 
import { loadType } from 'mongoose-currency'; 

const Schema = mongoose.Schema; 
loadType(mongoose); 


const TransactionSchema = new Schema({
    buyer: {
        type: mongoose.Types.Currency, 
        currency: "USD", 
        get: (v) => v / 100 // we divide the value with 100, 'cause mongoose.Types.Currency always multiplies the value with 100. 
    }, 
    amount : {
        type: mongoose.Types.Currency, 
        currency: "USD", 
        get: (v) => v/100 
    },
    productIds: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Product"
        }
    ]

}, { timestamps: true, toJSON: { getters: true } }); 

const Transaction = mongoose.model("Transaction", TransactionSchema); 

export default Transaction; 