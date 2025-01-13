import { Router } from "express";
import { addToCart, createCart, removeFromCart } from "../controller/cartController.js";

const router=Router();

router.route("/create").post(createCart);
router.route("/addTo").post(addToCart);
router.route("/removeFrom").post(removeFromCart);

export default router;