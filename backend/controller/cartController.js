import { Cart } from "../model/cart.js";

export const createCart = async (req,res) =>{
    try {
        const {userId} = req.body;
        const newC=new Cart({user:userId})

        const data=await newC.save();
        console.log(data);

        return res.status(200).json({
            data
        })

    } catch (error) {
        return res.status(200).json(error)
    }
}

export const addToCart = async (req, res) => {
    try {
        const { pdtId, cartId } = req.body;

       //const data=await Cart.update({_id:cartId},{$push:{products:pdtId}},done);

        const myCart = await Cart.findById(cartId);
        if (!myCart) {
            return res.status(404).json({ message: " not found" });
        }
        myCart.products.push(pdtId);
        const response = await myCart.save();

        return res.status(200).json({ response });

    } catch (error) {
        console.error("Error adding to cart:", error);
        return res.status(500).json({ message: "An error occurred while adding to the cart", error });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { cartId, pdtId } = req.body;

        const myCart = await Cart.findById(cartId);
        if (!myCart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const response = await Cart.updateOne({ _id: cartId },{ $pull: { products: pdtId } });

        return res.status(200).json({ response });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};
