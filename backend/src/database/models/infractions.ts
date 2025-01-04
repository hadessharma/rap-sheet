import { DataTypes, Model, Optional, UUIDV4 } from "sequelize";
import { sequelize } from "../db";
import { Convict } from "./convict";

interface InfractionAttributes {
  infractionID: number;
  convictID: number;
  type: string;
  status: string;
  timestamp: Date;
}

interface InfractionCreationAttributes
  extends Optional<InfractionAttributes, "infractionID"> {}

class Infraction
  extends Model<InfractionAttributes, InfractionCreationAttributes>
  implements InfractionAttributes
{
  public infractionID!: number;
  public convictID!: number;
  public type!: string;
  public status!: string;
  public timestamp!: Date;
}

Infraction.init(
  {
    infractionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    convictID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Convict, key: "convictID" },
    },
    type: {
      type: DataTypes.ENUM(
        "Speeding",
        "Excessive Speeding",
        "Reckless Driving",
        "Hit and Run",
        "Damage to Property",
        "Resisting Arrest",
        "Driving off Roadway",
        "Ramming a police vehicle"
      ),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Served", "Unserved"),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Infraction",
    tableName: "Infraction",
    timestamps: false,
  }
);

export { Infraction, InfractionAttributes, InfractionCreationAttributes };
