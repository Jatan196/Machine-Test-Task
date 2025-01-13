import { User } from "../model/user.js";


export const signUp = async (req, res) => {
      const { name, email, phone, address, password } = req?.body;
    console.log(req.body)
    try {        
        const userInfo = {
            name,
            email,
            phone,
            address,
            password // can use encryption for this
        } 
        console.log(userInfo)
        const newUser = new User(userInfo);

        const result = await newUser.save();

        console.log("Done");
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({
            message: "Not registered",
            error
        })
    }
}
export const signIn = async (req, res) => {

}
export const signOut = async (req, res) => {

}