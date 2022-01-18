const Jokes = artifacts.require("Jokes");

module.exports = function(deployer) {
  deployer.deploy(Jokes);
};