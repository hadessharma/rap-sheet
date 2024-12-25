import { DataTypes, Model, Optional, UUIDV4 } from "sequelize";

import { sequelize } from "../db";
interface ConvictAttributes {
  convictID: number;
  name: string;
}

interface ConvictCreationAttributes
  extends Optional<ConvictAttributes, "convictID"> {}

class Convict
  extends Model<ConvictAttributes, ConvictCreationAttributes>
  implements ConvictAttributes
{
  public convictID!: number;
  public name!: string;
}

Convict.init(
  {
    convictID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Convict",
    tableName: "Convict",
    timestamps: false,
  }
);

export { Convict, ConvictAttributes, ConvictCreationAttributes };
