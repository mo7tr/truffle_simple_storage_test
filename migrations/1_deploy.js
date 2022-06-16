// Import du smart contract "SimpleStorage"

const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = (deployer) => {
  //Deployer le Smart Contract!

  deployer.deploy(SimpleStorage);
};
