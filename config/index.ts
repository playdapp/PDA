require("dotenv").config({ path: "../.env" });
import { IConfig } from "./types";

export const getConfig = (network: string) => {
  const { default: config } = require(`./${network}`);
  return config;
};
