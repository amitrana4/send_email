import dotenv from "dotenv";
dotenv.config();

export const misc_config = {
  ACCESS_TOKEN_KEY: process.env.JWT_ACCESS_TOKEN_KEY as string,
  PORT: process.env.PORT,
};
