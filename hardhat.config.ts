import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()

const url = process.env.RPC || ""
const chainId = Number(process.env.CHAIN_ID) || 10201
const key = process.env.PRIV_KEY || ""

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    MaxxChain: {
      url,
      chainId,
      accounts: [key]
    }
  },
  etherscan: {
    apiKey: {
      MaxxChain: "10201"
    },
    customChains: [
      {
        network: "MaxxChain",
        chainId,
        urls: {
          apiURL: `${url}/api`,
          browserURL: url
        }
      }
    ]
  }
};

export default config;
