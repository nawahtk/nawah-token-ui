
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NawahToken is ERC20 {
    constructor(
        uint256 initialSupply
    ) ERC20("Nawah Token", "NWTK") {
        address recipient = 0x42fF25AaD096dd66EfC9b3BeC26445e24053C83c;
        _mint(recipient, initialSupply * 10 ** decimals());
    }
}
