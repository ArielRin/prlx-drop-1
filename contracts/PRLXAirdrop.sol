// SPDX-License-Identifier: MIT
// test merkleRoot: 0x2468f4538631eed7af58e8889437401d47a9fef7626a728f9bba3b5d5f7f03eb
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract PRLXAirdrop is Ownable, ReentrancyGuard {
    bytes32 public merkleRoot;
    mapping(address => bool) public claimed;


	// Cheyne notes: The merkleRoot is set during deployment and is used to verify the Merkle tree proof provided by users.
    constructor(bytes32 _merkleRoot) {
        merkleRoot = _merkleRoot;
    }

	// Cheyne notes: The claim function allows users to claim tokens if they are eligible based on the Merkle proof.
	function claim(
		uint256 amount,
		address payable receiver,
		bytes32[] calldata merkleProof
	    ) public nonReentrant {
		// Verify that the address hasn't claimed before
		require(!claimed[receiver], "PRLXAirdrop: PRLX already claimed");

		// Verify the proof and check if the user is eligible for the airdrop
		bytes32 node = keccak256(abi.encodePacked(receiver, amount));
		require(
			MerkleProof.verify(merkleProof, merkleRoot, node),
			"PRLXAirdrop: Invalid proof"
		);

		// Mark the tokens as claimed
		claimed[receiver] = true;
		sendPRLX(receiver, amount);
	}
	// Cheyne notes: The sendPRLX function is a private helper function for transferring tokens to the user's address, using the call method.
	function sendPRLX(address payable _to, uint256 _amount) private {
		(bool sent, ) = _to.call{value: _amount}("");
		require(sent, "PRLXAirdrop: Transfer failed");
	}
	// The retrieve function is only callable by the contract owner and allows them to retrieve any remaining funds from the contract.
	function retrieve(uint256 _amount) public onlyOwner {
		(bool sent, ) = payable(owner()).call{value: _amount}("");
		require(sent, "PRLXAirdrop: Transfer failed");
	}
}

// Merkleproof add merkle proof to solidity
// Todo add pausible function for contract claim
// Todo recheck security
// Todo find merkleproof based on users data and auto implement into contract
