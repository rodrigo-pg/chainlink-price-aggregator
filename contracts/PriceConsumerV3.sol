//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(0xECe365B379E1dD183B20fc5f022230C044d51404);
    }

    function getLastestPrice() public view returns (int) {
        (/*uint80 roundID*/, int price, /*uint startedAt*/, /*uint timeStamp*/,/*uint80 answeredInRound*/) = priceFeed.latestRoundData();
        return price;
    }

}