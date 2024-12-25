import { createConvict } from "../controllers/convict.controller";
import express from "express";

const router = express.Router();

router.post("/convict", [], createConvict);

export default router;
