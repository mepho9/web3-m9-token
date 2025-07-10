const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("M9Token", function () {
  let M9Token, token, owner, user;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();
    M9Token = await ethers.getContractFactory("M9Token");
    token = await M9Token.deploy();
    await token.waitForDeployment();
  });

  it("should deploy with initial supply to owner", async () => {
    const balance = await token.balanceOf(owner.address);
    expect(ethers.formatUnits(balance, 18)).to.equal("100000.0");
  });

  it("should mint tokens to owner with mintForMe", async () => {
    await token.connect(owner).mintForMe(500);
    const balance = await token.balanceOf(owner.address);
    expect(ethers.formatUnits(balance, 18)).to.equal("100500.0");
  });

  it("should mint tokens to another address", async () => {
    await token.connect(owner).mintFor(user.address, 2000);
    const balance = await token.balanceOf(user.address);
    expect(ethers.formatUnits(balance, 18)).to.equal("2000.0");
  });

  it("should not allow minting over max supply", async () => {
    const max = await token.MAX_SUPPLY();
    const amount = max * BigInt(10 ** 18); // simulate overflow
    await expect(
      token.connect(owner).mintForMe(amount)
    ).to.be.revertedWith("Total Supply Exceeded");
  });

  it("should prevent non-owner from minting", async () => {
    await expect(
        token.connect(user).mintForMe(1000)
    ).to.be.reverted;
});


});
