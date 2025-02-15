import { Router } from "express";
import { signIn, signUp } from "../controller/userController.js";

const router=Router();

router.route("/signup").post(signUp);
router.route("/signin").get(signIn);   


export default router;