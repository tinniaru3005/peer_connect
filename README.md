# Peer Connect

Peer Connect is a decentralized social media platform built on the Ethereum blockchain. Users can create and share posts, tip posts with Ether, and view posts ordered by the number of tips received. This ensures that the most appreciated content is always at the top, fostering a community-driven content curation system.

## Features

- **Create Posts**: Users can create and share posts with the community.
- **Tip Posts**: Users can tip posts with Ether to show appreciation and support the content creators.
- **Order by Tips**: Posts are ordered by the number of tips received, ensuring the most appreciated content is always at the top.
- **Ethereum Integration**: All interactions are recorded on the Ethereum blockchain, ensuring transparency and immutability.
- **MetaMask Integration**: Users can connect their MetaMask wallet to interact with the platform.

## Technologies Used

- **Solidity**: For writing smart contracts.
- **Node.js**: For the backend server.
- **React**: For the frontend user interface.
- **Ganache**: For local blockchain development.
- **Truffle**: For smart contract development and testing.
- **web3.js**: For interacting with the Ethereum blockchain.
- **Chai**: For assertions in testing.
- **Mocha**: For running tests.
- **MetaMask**: For Ethereum wallet integration.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tinniaru3005/peer_connect.git
    ```
2. Navigate to the project directory:
    ```bash
    cd peer_connect
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

**Note**: Ensure you are using Node.js version 16.x. You can use `nvm` (Node Version Manager) to manage your Node.js versions. If you don't have `nvm` installed, you can install it using the following command:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    ```
    After installing `nvm`, install and use Node.js version 16.x:
    ```bash
    nvm install 16
    nvm use 16
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Run tests

1. Make sure you have Truffle installed globally:
    ```bash
    npm install -g truffle
    ```
2. Compile the smart contracts:
    ```bash
    truffle compile
    ```
3. Deploy the smart contracts to a local blockchain (e.g., using Ganache):
    ```bash
    truffle migrate
    ```
4. Run the tests:
    ```bash
    truffle test
    ```

## Add posts and tip them

To add posts to the Social Network DApp and then tip them, follow these steps:

1. **Start Ganache**: Make sure your local blockchain (Ganache) is running.

2. **Deploy Contracts**: Deploy the smart contracts to the local blockchain:
    ```bash
    truffle migrate
    ```
    If you have made changes to your smart contracts and need to redeploy them from scratch, use the `--reset` option:
    ```bash
    truffle migrate --reset
    ```

    Use the `--reset` option with `truffle migrate` when you need to redeploy your smart contracts from scratch. This is useful in the following scenarios:
    - You have made changes to your smart contracts and need to redeploy them.
    - You want to reset the state of your contracts on the blockchain.
    - You are encountering issues with migrations and want to start fresh.

3. **Go to Local Server**: Open your browser and navigate to `http://localhost:3000`.

4. **Fill Form**: Use the form on the page to create a new post. Enter the content of your post and click the "Share" button.

5. **Sign Transaction to See Posts**: MetaMask will prompt you to sign the transaction. Once the transaction is confirmed, your post will be added to the blockchain and displayed on the page.

6. **Tip Posts**: To tip a post, click the "TIP 0.1 ETH" button next to the post you want to tip.

7. **Sign Transaction for Tipping**: MetaMask will prompt you to sign the transaction for tipping. Once the transaction is confirmed, the tip amount will be sent to the post's author.

8. **See Posts Sorted in Descending Order of Tips**: The posts will be displayed in descending order based on the number of tips received, ensuring the most appreciated content is always at the top.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or feedback, please reach out to us at arunimachaudhuri2020@gmail.com.
