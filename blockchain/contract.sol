// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract SupplyChainManagement {
    address private owner;

    constructor () {
        owner = msg.sender; 
    }

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    Agricultural[] public arrayAgricultural; 
    struct Agricultural {
        address walletAddress;
        string id;
        string censor;
        string hashString;
        uint createTime;
    }

    event sendStatus(address _walletAddress, string _id, string _censor, string _hashString, uint _createTime);
    function addAgricultural(string memory _id, string memory _censor,  string memory _hashString) public isOwner { // no coin
       
        require(bytes(_id).length > 0, "ID cannot be empty");
        require(bytes(_censor).length > 0, "Censor cannot be empty");
        require(bytes(_hashString).length > 0, "Hash string cannot be empty");

        Agricultural memory newAgricultural = Agricultural(msg.sender, _id, _censor, _hashString, block.timestamp);
        arrayAgricultural.push(newAgricultural);
        emit sendStatus(msg.sender, _id, _censor, _hashString, block.timestamp);
    }

    function getAgricultural(string memory _id) public view returns (Agricultural memory) {
        uint index; 
        for(uint i=0; i<arrayAgricultural.length; i++) {
            if(keccak256(bytes(arrayAgricultural[i].id)) == keccak256(bytes(_id))) {
                index = i;
                break;
            }
        }
        return arrayAgricultural[index];
    }

    function getAllAgricultural() public view returns (Agricultural[] memory) {
        return arrayAgricultural;
    }
}