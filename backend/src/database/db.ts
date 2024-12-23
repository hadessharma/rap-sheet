import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

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
