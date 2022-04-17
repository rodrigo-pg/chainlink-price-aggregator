import { expect } from "chai";
import { ethers } from "hardhat";

describe("PriceConsumerV3", function () {
  it("Should deploy the contract", async function () {
    const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
    const priceConsumerV3 = await PriceConsumerV3.deploy();
    await priceConsumerV3.deployed();

    expect(priceConsumerV3.address);
  });

  it("Should get the latest price", async function () {
    const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
    const priceConsumerV3 = await PriceConsumerV3.deploy();
    await priceConsumerV3.deployed();

    const priceResult = await priceConsumerV3.getLastestPrice();
    console.log(priceResult);
  });
});
