# M9Token – Custom ERC20 Token for Web3 Applications

**M9Token (M9)** is a capped ERC20 token built for decentralized applications (dApps), smart contract testing, and educational purposes.  
It follows industry best practices using OpenZeppelin contracts and is fully compatible with Ethereum testnets like Sepolia.

---

## 🔍 Overview

This project implements a custom ERC20 token with:

- ✅ A fixed maximum supply (`MAX_SUPPLY`)
- ✅ Minting restricted to the contract owner
- ✅ `mintForMe` and `mintFor(address)` functions for flexible token distribution
- ✅ Built-in unit tests with Hardhat + Chai
- ✅ Ready for testnet deployment and real-world integration

---

## ✨ Features

| Feature              | Description |
|----------------------|-------------|
| `MAX_SUPPLY`         | Hard cap of 10 million M9 tokens |
| `mintForMe(uint)`    | Mint tokens to the owner (useful for dev/test) |
| `mintFor(address,uint)` | Mint tokens to any address |
| `totalMinted`        | Tracks the total amount minted (for supply enforcement) |
| OpenZeppelin         | Security-audited base contracts (`ERC20`, `Ownable`) |
| Test suite           | Covers deployment, minting, access control, and edge cases |

---

## ⚙️ Tech Stack

- **Solidity** 0.8.x
- **Hardhat** (for development, testing, deployment)
- **Ethers.js v6**
- **OpenZeppelin Contracts v5**
- **Mocha + Chai** (unit testing)
- **Sepolia Testnet** (target deployment)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mepho9/web3-m9-token.git
cd web3-m9-token
npm install
```

### 2. Compile the contract

```bash
npx hardhat compile
```

### 3. Local Deployment & Testing (Hardhat)

**▶️ Step 1 - Start the local Hardhat node**

```bash
npx hardhat node
```
**▶️ Step 2 - Deploy the contract locally**

```bash
npx hardhat run scripts/deploy.js --network localhost
```
**▶️ Step 3 - Run the test suite**

```bash
npx hardhat test
```

### 4. Deploy to Sepolia

**▶️ Step 1 - Ensure .env is configured**

> ⚠️ **Create a `.env` file** (or copy from `.env.example`) and fill in your private details:

```env
SEPOLIA_RPC_URL=...
PRIVATE_KEY=...
```
**▶️ Step 2 - Deploy with Hardhat**

```bash
npx hardhat run scripts/deploy.js --network sepolia
```
---

## 🔗 Deployed Contract

- Network: Sepolia Testnet
- Contract Address: [`0xf0557F93506F287fe46657cCc40b66404e331ffF`](https://sepolia.etherscan.io/address/0xf0557F93506F287fe46657cCc40b66404e331ffF)

### 👨‍💻 Author

**Mepho9**  
- GitHub: [@mepho9](https://github.com/mepho9)  
- LinkedIn: [rbabayev9](https://www.linkedin.com/in/rbabayev9/)
