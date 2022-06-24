// Import du smart contract "SimpleStorage"

const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async (deployer) => {
  //Deployer le Smart Contract!
  //premier param: le contrat; 2eme: param constructor, 3eme param de value (car payable)
  //ici on envoie 3wei
  await deployer.deploy(SimpleStorage, 1, { value: 3 });

  //Comme avec truffle console, on peut ici interagir avec le smart contract directement au deployment:

  //const instance = await SimpleStorage.deployed();
  //const value = await instance.get();
  //console.log(value);

  //await instance.set(2);
  //const value2 = await instance.get();
  //console.log(value2);
};
