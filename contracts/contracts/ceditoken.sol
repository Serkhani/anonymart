// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CediToken is ERC20, Ownable {
    uint256 public constant TOKENS_PER_ETH = 1000; // 1 ETH = 1000 Cedi tokens
    constructor() ERC20("CediToken", "CEDI") Ownable(msg.sender){
        // Mint initial supply if necessary
        _mint(msg.sender, 1000000 * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner returns (bool) {
        _mint(to, amount);
        return true;
    }

    function buyTokens() public payable {
        require(msg.value > 0, "Send ETH to buy tokens");
        uint256 tokensToBuy = msg.value * TOKENS_PER_ETH;
        require(tokensToBuy > 0, "Not enough ETH sent");
        _mint(msg.sender, tokensToBuy);
    }

    function withdrawETH() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No ETH to withdraw");
        payable(owner()).transfer(balance);
    }
}