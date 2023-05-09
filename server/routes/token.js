import { Router } from "express";
import generateToken from "../controller/token";

const auth = Router();

auth.get("/auth", generateToken);

export default auth;
