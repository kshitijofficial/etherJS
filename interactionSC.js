//0x417997417dd95f45bb4986abff5dfae5b5b0a34a
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`Add you infura key`);

const walletAddress = "0x417997417dd95f45bb4986abff5dfae5b5b0a34a";
const walletAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sendEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractIntreaction = async () => {
  const walletContract = new ethers.Contract(
    walletAddress,
    walletAbi,
    provider
  );

  // const contractName = await walletContract.name();
  // console.log("Contract Name:", contractName);

  // const num = await walletContract.getValue();
  // console.log("Number Value:", String(num));

  const contractBalance = await walletContract.contractBalance();
  const balethContract = ethers.utils.formatEther(contractBalance);
  console.log("Contract Balance:", balethContract);

  // const userBalance = await walletContract.accountBalance(
  //   "0xBE4024Fa7461933F930DD3CEf5D1a01363E9f284"
  // );
  // const balethUser = ethers.utils.formatEther(userBalance);
  // console.log("User Balance:", balethUser);
};
contractIntreaction();
