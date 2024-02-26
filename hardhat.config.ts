import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "dotenv/config";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "./hardhat-type-extensions";

import { extendEnvironment, HardhatUserConfig, task } from "hardhat/config";
import { getConfig } from "./config";

import { transaction } from "./scripts/transaction";

extendEnvironment((hre) => {
  hre.configByNetwork = getConfig(hre.network.name);
});

task("transaction", "").setAction(async (args, hre, runSuper) => {
  await transaction(hre);
});

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.RPC_SEPOLIA,
      chainId: parseInt(process.env.CHAIN_ID_SEPOLIA!),
    },
    ethereum: {
      url: process.env.RPC_ETHEREUM,
      chainId: parseInt(process.env.CHAIN_ID_ETHEREUM!),
    },
  },
};

export default config;
