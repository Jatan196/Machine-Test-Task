import mongoose from "mongoose";

const { Schema } = mongoose;
const product = new Schema({
    // _id will use as product Id
    name:String,
    cost:Number,
    rating:Number,
    category:String,
    adminId:{
        type: mongoose.Schema.Types.ObjectId
    },
    imageURL:String,

})

export const Product=new mongoose.model("Product",product);