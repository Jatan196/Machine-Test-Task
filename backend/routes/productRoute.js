import { Router } from "express";
import { addProduct, viewAll } from "../controller/productController.js";

const router=Router();

router.route("/add").post(addProduct); // to done by Admin user
router.route("/view").get(viewAll); 

export default router;