import mongoose from "mongoose";
import {Product}  from "./product.js"

const { Schema } = mongoose;
const cart = new Schema({
    // cartId:{
    //     type:String,
    //     mongoose
    // },   _id will use as cart Id
    user:{ type: mongoose.Schema.Types.ObjectId},
    products:[
        {
           type: mongoose.Schema.Types.ObjectId,
           ref:Product
        }
    ]

})

export const Cart=new mongoose.model("Cart",cart);