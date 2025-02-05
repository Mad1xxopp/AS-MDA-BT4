# AI Model Marketplace

A blockchain-based decentralized marketplace that allows users to buy and sell AI models using ERC-20 tokens. This platform integrates wallet connection, ERC-20 token transactions, and secure storage for AI model listings.

---

## Features

### 1. User Authentication and Wallet Integration
- Seamless wallet connection using [MetaMask](https://metamask.io/).
- Users can connect their wallets and interact with the blockchain.

  ![image](https://github.com/user-attachments/assets/539eb334-5220-4f4e-aa3b-4e8ac7844be8)


### 2. Token Balance Display
- Display the user's ERC-20 token balance directly on the platform.
- A refresh button allows users to update their token balance in real time.

### 3. AI Model Listings
- Sellers can list their AI models with:
  - Name
  - Description
  - Price (in ERC-20 tokens)
  - Secure file upload or download link
- Buyers can view model details and purchase them.

  ![image](https://github.com/user-attachments/assets/2d245779-c0c6-4fe2-92b9-4ccb9b34ace7)


### 4. Purchase Flow
- Buyers initiate purchases by transferring ERC-20 tokens to the seller's wallet.
- The marketplace UI updates to reflect the completed sale, marking the model as sold or adjusting inventory.

  ![Uploading image.png…]()


---

## Dependencies

This project relies on the following technologies and packages:

### Smart Contract Development
- **[Solidity](https://soliditylang.org/)**: Used to write the ERC-20 token and marketplace contracts.
- **[OpenZeppelin Contracts](https://openzeppelin.com/)**: Industry-standard contracts for ERC-20 tokens and secure smart contract development.

### Frontend
- **[React.js](https://reactjs.org/)**: Framework for building the user interface.
- **[Web3.js](https://web3js.readthedocs.io/)**: To interact with Ethereum blockchain.

### Backend
- **[Node.js](https://nodejs.org/)**: Backend runtime for handling APIs.
- **[IPFS](https://ipfs.io/)**: Decentralized storage for securely hosting AI models.

### Package Manager
- **[npm](https://www.npmjs.com/)**: For managing dependencies.

---

## Setup and Installation

### 1. Clone the Repository
```bash
git clone <repository-link>
cd <repository-folder>
