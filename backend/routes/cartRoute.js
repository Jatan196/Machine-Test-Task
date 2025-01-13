import { Router } from "express";
import { addToCart, createCart, removeFromCart, viewCart } from "../controller/cartController.js";

const router=Router();

router.route("/create").post(createCart);
router.route("/view").get(viewCart);
router.route("/addTo").post(addToCart);
router.route("/removeFrom").post(removeFromCart);

export default router;