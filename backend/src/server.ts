import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./database/db";

dotenv.config();

dbConnect();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
