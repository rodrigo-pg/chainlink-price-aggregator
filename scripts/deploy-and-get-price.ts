import { ethers } from "hardhat";

async function main() {
  const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
  const priceConsumerV3 = await PriceConsumerV3.deploy();
  await priceConsumerV3.deployed();

  console.log("[+] PriceConsumerV3 Deployed...");

  const price = await priceConsumerV3.getLastestPrice();
  
  console.log(`[+] Price is ${price.toString()}...`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});