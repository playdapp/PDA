import { HardhatRuntimeEnvironment } from "hardhat/types";
import pdaAbi from "../artifacts/contracts/PDA.sol/PDA.json";
import { PDA } from "../typechain";

export const transaction = async (hre: HardhatRuntimeEnvironment) => {
  const { ethers, configByNetwork } = hre;
  const { chainId, ownerPk, rpcUrl, pdaContractAddress } = configByNetwork;

  console.log(
    `[task] transaction >> network=${hre.network.name} / chainId=${chainId}`
  );

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(ownerPk, provider);
  const instance = new ethers.Contract(
    pdaContractAddress,
    pdaAbi.abi,
    wallet
  ) as PDA;

  const tx = await instance.transferOwnership("");
  const result = await tx.wait();
  console.log(result);
};
