// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";

contract PDA is ERC20, ERC20Burnable, AccessControl, Pausable, Ownable2Step {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    constructor(
        string memory _name,
        string memory _symbol,
        address _owner,
        uint256 _supply
    )
    ERC20(_name, _symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, _owner);
        _grantRole(PAUSER_ROLE, _owner);


        _mint(_owner, _supply);
    }


    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }
    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override(ERC20)
    {
        super._beforeTokenTransfer(from, to, amount);
    }


    // ** onlyOwner **
    function grantRolePauser(address user) public onlyOwner {
        _grantRole(PAUSER_ROLE, user);
    }
    function revokeRolePauser(address user) public onlyOwner {
        _revokeRole(PAUSER_ROLE, user);
    }
}