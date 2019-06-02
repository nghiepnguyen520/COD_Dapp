import web3 from './web3';

export const Address_CT ='0xAad4D56c80Db3EAE85D62bfcCF504b5C6A6f6A36';
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
    "name": "buyer",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x7150d8ae"
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
        "name": "_details",
        "type": "string"
      }
    ],
    "name": "Ac1_CreatePackage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x1d1123d6"
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
      },
      {
        "name": "_details",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xb6ca6ba2"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "GetName",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x9fcce670"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "GetDetails",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xbac8e8e5"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "Ac2_CreateHash",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x6f0c99d8"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "Ac3_ApplyBuy",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0x1b76998a"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_hash",
        "type": "uint256"
      }
    ],
    "name": "ConfirmOfBuyer",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0x401de3ae"
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