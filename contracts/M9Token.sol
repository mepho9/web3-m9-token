// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract M9Token is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 10_000_000; // 10M of M9 total supply
    uint256 public totalMinted;
    constructor() ERC20("M9Token", "M9") Ownable(msg.sender){
        uint256 initialAmount = 100_000 * 10 ** decimals();
        _mint(msg.sender, initialAmount);
        totalMinted = initialAmount;
    }

    // To mint tokens for the owner (test/dev shortcut)
    function mintForMe(uint256 amount) public onlyOwner{
        uint256 amountWithDecimals = amount * 10 ** decimals();
        require(totalMinted  + amountWithDecimals <= MAX_SUPPLY * 10 ** decimals(), "Total Supply Exceeded");
        totalMinted +=amountWithDecimals;
        _mint(msg.sender, amountWithDecimals);
    }

    // To mint tokens to another address
    function mintFor(address to, uint256 amount) public onlyOwner{
        uint256 amountWithDecimals = amount * 10 ** decimals();
        require(totalMinted  + amountWithDecimals <= MAX_SUPPLY * 10 ** decimals(), "Total Supply Exceeded");
        totalMinted +=amountWithDecimals;
        _mint(to, amountWithDecimals);
    }
}
