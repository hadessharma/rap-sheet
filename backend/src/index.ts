import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./database/db";
import path from "path";

import postRouter from "./routes/postRouter";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

dbConnect();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
