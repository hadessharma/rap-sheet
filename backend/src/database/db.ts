import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";
import exp from "constants";

const isRunningInBuild = __dirname.includes("build");

const envPath = isRunningInBuild
  ? path.resolve(process.cwd(), "../.env")
  : path.resolve(process.cwd(), "./.env");

dotenv.config({ path: envPath });

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

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected!");
  } catch (error) {
    console.log("Error:", error);
  }
};

export { dbConnect, sequelize };
