import { IConfig } from "./types";

require("dotenv").config({ path: "../.env" });

const config: IConfig = {
  chainId: parseInt(process.env.CHAIN_ID_SEPOLIA!),
  ownerPk: process.env.OWNER_PK_SEPOLIA!,
  rpcUrl: process.env.RPC_SEPOLIA!,
  pdaContractAddress: process.env.PDA_CONTRACT_ADDRESS_SEPOLIA!,
};

export default config;
