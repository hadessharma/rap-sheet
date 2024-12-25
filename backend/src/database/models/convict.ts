import {
  DataType,
  DataTypes,
  Model,
  Optional,
  Sequelize,
  UUIDV4,
} from "sequelize";

import { sequelize } from "../db";
interface ConvictAttributes {
  id: string;
  name: string;
}

interface ConvictCreateAttributes extends Optional<ConvictAttributes, "id"> {}

class Convict
  extends Model<ConvictAttributes, ConvictCreateAttributes>
  implements ConvictAttributes
{
  public id!: string;
  public name!: string;
}

Convict.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
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

export { Convict, ConvictAttributes, ConvictCreateAttributes };
