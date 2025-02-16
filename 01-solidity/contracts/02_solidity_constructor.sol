// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract SolidityConstructor {
    uint256 balance = 0;

    constructor(uint256 initialBalance) {
        console.log("balance is ", balance);
        balance += initialBalance;
        console.log("balance is now ", balance);
    }
}