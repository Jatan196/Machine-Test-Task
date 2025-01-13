import express from "express";
import http from "http";
import connect from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoute.js"
import productRoutes from "./routes/productRoute.js"
import cartRoutes from "./routes/cartRoute.js"


const app=express();
const PORT=8000;

const server=http.createServer(app);

const corsOption={
    origin:"http://localhost:3000",
    credentials:true
}
app.use(express.urlencoded({extended:true})); 
app.use(cors(corsOption));
app.use(express.json()); // for reading the content of req object in json format

app.use("/api/v1/user",userRoutes);
app.use("/api/v1/cart",cartRoutes);
app.use("/api/v1/product",productRoutes);

console.log(PORT)
server.listen(PORT,()=>{
    connect();
   console.log(`Server Listening at `+ PORT);
})