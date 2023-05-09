import "dotenv/config";
import express from "express";
import cors from "cors";
import "dotenv/config";
import auth from "../routes/token";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/stk", (req, res) => {
  res.json(req.body);
});

app.listen(8000, () => {
  console.log("Server running...");
});

app.get("/", (req, res) => {
  res.send("MPESA programming in progress, time to get PAID!");
});

app.use(auth);
