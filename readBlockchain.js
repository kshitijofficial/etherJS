const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `Enter You INFURA mainnet endpoint`
);

const querryBlockchain = async () => {
  //   const block = await provider.getBlockNumber();
  //   console.log("Current Block Number:", block);

  const balance = await provider.getBalance(
    "0xf8238a3dd9a67b8419412eDE613A06D73Ffc2D93"
  );
  console.log("Account Balance In BN:", balance);

  const balanceEther = ethers.utils.formatEther(balance);
  console.log("Account Balance In Ether:", balanceEther);

  const balanceWei = ethers.utils.parseEther(balanceEther);
  console.log(balanceWei);
};
querryBlockchain();
