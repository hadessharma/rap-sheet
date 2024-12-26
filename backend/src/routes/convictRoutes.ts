import express from "express";
import {
  getAllConvicts,
  createConvict,
} from "../controllers/convict.controller";

const router = express.Router();

router.get("/", [], getAllConvicts);
router.post("/", [], createConvict);

export default router;
