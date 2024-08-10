import mongoose from 'mongoose'; 
import { loadType } from 'mongoose-currency'; 

const Schema = mongoose.Schema; 
loadType(mongoose); 


const ProductSchema = new Schema({
    price: {
        type: mongoose.Types.Currency, 
        currency: "USD", 
        get: (v) => v / 100 // we divide the value with 100, 'cause mongoose.Types.Currency always multiplies the value with 100. 
    }, 
    expense: {
        type: mongoose.Types.Currency, 
        currency: "USD", 
        get: (v) => v/100 
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId, 
        },
    ]

}, { timestamps: true, toJSON: { getters: true } }); 

const Product = mongoose.model("Product", ProductSchema); 

export default Product; 