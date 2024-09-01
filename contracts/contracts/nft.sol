// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable {
    IERC20 public cediToken;
    uint256 public tokenIdCounter;
    mapping(uint256 => uint256) public prices;

    constructor(address _cediToken) ERC721("CediNFT", "CNFT") Ownable(msg.sender) {
        cediToken = IERC20(_cediToken);
    }

    function mintNFT(string memory metadataURI, uint256 price) public onlyOwner returns (uint256) {
        uint256 newTokenId = tokenIdCounter;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, metadataURI); // Set the metadata URI containing the image URL
        prices[newTokenId] = price;
        tokenIdCounter++;
        return newTokenId;
    }

    function buyNFT(uint256 tokenId) public {
        require(prices[tokenId] > 0, "NFT not for sale");
        require(cediToken.transferFrom(msg.sender, owner(), prices[tokenId]), "Payment failed");

        _transfer(owner(), msg.sender, tokenId);
        prices[tokenId] = 0;
    }

    // Function to fetch all NFTs
    function fetchAllNFTs() public view returns (uint256[] memory, string[] memory, uint256[] memory) {
        uint256 total = tokenIdCounter;
        uint256[] memory tokenIds = new uint256[](total);
        string[] memory uris = new string[](total);
        uint256[] memory nftPrices = new uint256[](total);

        for (uint256 i = 0; i < total; i++) {
            tokenIds[i] = i;
            uris[i] = tokenURI(i); // Get the metadata URI
            nftPrices[i] = prices[i]; // Get the price of each NFT
        }

        return (tokenIds, uris, nftPrices);
    }
}
