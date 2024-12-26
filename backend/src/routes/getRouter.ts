import express from "express";
import { getAllConvicts } from "../controllers/convict.controller";

const router = express.Router();

router.get("/convicts", [], getAllConvicts);

export default router;
