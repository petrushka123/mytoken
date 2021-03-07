const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const Web3 = require("web3");
const web3 = new Web3();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     
      port: 7545,          
      network_id: "*"
    },

    ropsten: {
      provider: () => new HDWalletProvider(`${process.env.ROPSTEN_MNEMONIC}`, `wss://ropsten.infura.io/ws/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },

    production: {
      provider: () => new HDWalletProvider(process.env.PRODUCT_MNEMONIC, `wss://mainnet.infura.io/ws/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 1,
      gasPrice: web3.utils.toWei(process.env.PRODUCT_GAS_PRICE, 'gwei')
    },
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },

  compilers: {
    solc: {
      version: "0.7.4",
    }
  }
};
