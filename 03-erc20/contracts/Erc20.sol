// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Ragh is ERC20 {
    constructor(uint256 initialSupply) ERC20("Ragh Moni", "RMN") {
        _mint(msg.sender, initialSupply);
    }

    function generateTokens(address destination, uint256 amount) public { //access via abi ninja
        _mint(destination, amount);
    }
}