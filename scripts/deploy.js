const { ethers } = require("hardhat");

async function main() {
  try {
    console.log("Starting deployment of MyToken...");

    // Get the contract factory
    const MyToken = await ethers.getContractFactory("AIMarketplace");

    // Deploy the contract
    const myToken = await MyToken.deploy();

    // Wait for deployment to finish
    await myToken.waitForDeployment();

    // Get the contract address
    const contractAddress = await myToken.getAddress();

    console.log(`AITU_SE-2316-17_MDA_Token deployed successfully to: ${contractAddress}`);

  } catch (error) {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
  }
}

// Execute deployment
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
