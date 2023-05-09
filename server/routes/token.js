import { Router } from "express";
import { generateToken, stkPush } from "../controller/token";

const auth = Router();

auth.post("/auth", generateToken, stkPush);

export default auth;
