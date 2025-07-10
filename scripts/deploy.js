const { ethers } = require("hardhat");

async function main() {
  const M9Token = await ethers.getContractFactory("M9Token");
  const m9 = await M9Token.deploy();
  await m9.waitForDeployment();

  console.log(`M9Token deployed to: ${m9.target}`);
  const total = await m9.totalSupply();
  console.log(`Initial total supply: ${ethers.formatUnits(total, 18)} M9`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
