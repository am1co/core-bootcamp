import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("SolidityDataTypes", function () {
  async function deploy() {
    const [account1] = await hre.ethers.getSigners(); //create dummy account to deploy contract
    const SolidityDataTypes = await hre.ethers.getContractFactory("SolidityDataTypes"); //indicate which contract to deploy
    const ctcSolidityDataTypes = await SolidityDataTypes.deploy(); //simulate deployment of contract
    return { ctcSolidityDataTypes, account1 };
  }

  describe("Deployment Success", function () {
    it("should call constructor", async function () {
      const { ctcSolidityDataTypes } = await loadFixture(deploy); //get deployed instance of smart contract
      expect(ctcSolidityDataTypes).not.to.be.undefined; //error catching, object has to have content
    });
  });
});