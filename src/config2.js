import web3 from './web3';

export const Address_CT ='0x0bB9F9c7C67705696c11782A1496CB3c26D937D8';
export const ABI_CT = [
  {
    "constant": true,
    "inputs": [],
    "name": "seller",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x08551a53"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "hash",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x09bd5a60"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "price",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa035b1fe"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "Balances",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa8ec4c42"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "id",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xaf640d0f"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "shipper",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xc18ed1a1"
  },
  {
    "inputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_price",
        "type": "uint256"
      },
      {
        "name": "_hash",
        "type": "uint256"
      }
    ],
    "name": "Ac1_CreatePackage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x92716eae"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "GetPackage",
    "outputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_price",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xb6ca6ba2"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "Ac2_ApplyBuy",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0x8aa201ad"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_hash",
        "type": "uint256"
      }
    ],
    "name": "ConfirmOfShipper",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0xf355b48b"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_hash",
        "type": "uint256"
      }
    ],
    "name": "ConFirmOfSeller",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0x6ebf14d7"
  }
]
    export default new web3.eth.Contract(ABI_CT, Address_CT);