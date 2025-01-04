import { error } from "console";
import { Convict } from "../database/models/convict";
import { Request, Response } from "express";
import { Infraction } from "../database/models/infractions";

interface CreateInfractionRequest {
  convictID: number;
  type: string;
  status: string;
  timestamp: Date;
}
export const createInfraction = async (
  req: Request<{}, {}, CreateInfractionRequest>,
  res: Response
): Promise<any> => {
  const { convictID, type, status, timestamp } = req.body;

  try {
    const existingConvict = await Convict.findByPk(convictID);
    if (!existingConvict) {
      return res.status(400).json({ error: "Convict does not exist!" });
    }

    const infraction = await Infraction.create({
      convictID,
      type,
      status,
      timestamp,
    });

    return res
      .status(200)
      .json({ Message: "Created!", infraction: infraction });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed!" });
  }
};
