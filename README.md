# playdapp-contract

## Get Started

### Install dependencies

```zsh
# or yarn
npm install
```

### Compile Contract

```zsh
npx hardhat compile
```

### Test Contract

```zsh
npx hardhat test
```

### Deploy Contract

> network = sepolia | ethereum

```zsh
npx hardhat deploy --network <network> --tags <tag> --reset
```

### Verify Contract

```zsh
npx hardhat --network <network> etherscan-verify --api-key {MY API KEY} --license None
```

## Call Contract Method

> network = sepolia | ethereum

#### transaction

```zsh
npx hardhat transaction --network <network>
```
