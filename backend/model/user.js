import mongoose from "mongoose";

const { Schema } = mongoose;
const user = new Schema({
    // _id will use as user Id
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
         required:true,
        // validate: {
        //     validator: () => Promise.resolve(false),
        //     message: 'Email validation failed'
        //   }
    },
    phone:String,
    address:String,
    password:String,
});

export const User= mongoose.model("User",user);