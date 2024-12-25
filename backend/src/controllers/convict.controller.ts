import { Request, Response } from "express";
import { Convict } from "../database/models/convict";

interface CreateConvictRequest {
  name: string;
}

export const createConvict = async (
  req: Request<{}, {}, CreateConvictRequest>,
  res: Response
): Promise<any> => {
  const { name } = req.body;
  try {
    // check if already exists
    const existingConvict = await Convict.findOne({ where: { name } });
    if (existingConvict) {
      return res.status(400).json({ error: "Convict already exists" });
    }

    const convict = await Convict.create({ name });
    return res.status(201).json({ Message: "Create!", convict: convict });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to create convict!" });
  }
};
