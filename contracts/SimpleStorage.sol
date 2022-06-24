// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
 
contract SimpleStorage {
   uint data;

   event dataStored(uint _data, address _addr);

   constructor(uint x) payable{
       data = x;
   }
 
   function set(uint x) public {
       require(x > 0, "you can't store the 0 value");
        data = x;
        emit dataStored(x, msg.sender);  
   }
 
   function get() public view returns (uint) {
       return data;
   }
}