import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "ethers";

const addressPLA = "";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // ignore type error
  const { configByNetwork, network } = hre;
  const { chainId, ownerPk, rpcUrl, pdaContractAddress } = configByNetwork;
  const { deploy } = hre.deployments;

  console.log(
    `[deployment] PDA >> network=${hre.network.name} / chainId=${chainId}`
  );

  const tokenName = "PlayDapp";
  const tokenSymbol = "PDA";
  const preMintWalletAddress = "0x32CE582727e78f345F0CACC477AcC988B2e39Ed2";
  const supply = 700_000_000;

  const deployment = await deploy("PDA", {
    from: ownerPk,
    args: [
      tokenName,
      tokenSymbol,
      preMintWalletAddress,
      ethers.utils.parseEther(supply.toString()),
    ],
    log: true,
    gasPrice: ethers.utils.parseUnits("40", "gwei"),
  });
};

export default deploy;

deploy.tags = ["pda"];
