import { Product } from "../model/product.js";

export const addProduct = async (req,res)=>{
    const {name,url} = req.body;

    try {
        const newProduct=new Product({
            name,
            imageURL:url
        })
        const data=await newProduct.save();

        console.log(data);

        return res.status(200).json({message:"Added"})
    } catch (error) {
        return res.status(200).json(error);
    }
};

export const viewAll=async (req,res)=>{
    console.log("data")
    try {
        const data=await Product.find();
        console.log("data")
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json(error);
    }
}