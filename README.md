# My Token

Example of simple erc20 token
Solidity 7.4
Used Library @openzeppelin

## After installing

Create file `.env`

```env
MNEMONIC='your mnemonic phrase for test network ropsten'
INFURA_PROJECT_ID=YOUR_INFURA_PROJECT_KEY
ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY
```

### ROPSTEN

[https://faucet.ropsten.be/](https://faucet.ropsten.be/) - get 1 eth for address

### INFURA

[https://infura.io/register](https://infura.io/register)

Sign up and create project

### ETHERSCAN

[https://etherscan.io/register](https://etherscan.io/register)  

Sign up and create api key

## Deploy to the ropsten network

```bash
truffle deploy --network ropsten
```

## Verify etherscan

```bash
truffle run verify MyToken --network ropsten
```


