import express from "express";
import { createInfraction } from "../controllers/infraction.controller";

const router = express.Router();

router.post("/", [], createInfraction);

export default router;
