import { Router } from "express";
import { generateToken, stkPush } from "../controller/stkPush";

const paymentRoute = Router();

paymentRoute.post("/payment", generateToken, stkPush);

export default paymentRoute;
