import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "./.env") });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

export const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected!");
  } catch (error) {
    console.log("Error:", error);
  }
};
