pragma solidity >=0.4.5;
contract Cod{
    address payable public seller;
    address payable public shipper;
    uint public price;
    uint public id = 0;
    uint public hash = 0; 
    mapping(address => uint) public  Balances;
    
    constructor()public payable{
        seller = msg.sender;
    }
    modifier noSeller{
        require(msg.sender != seller);
        _;
    }   
    modifier onlySeller{
        require(msg.sender == seller);
        _;
    }
        struct Package{
         string name;
         uint price;
         uint hash;
         //string details;
   }
   mapping(uint => Package)packages;
   function Ac1_CreatePackage(string memory _name, uint  _price, uint _hash) onlySeller public{
        id++;
        price = _price;
        hash = _hash;
        packages[id].name = _name;
        packages[id].price = price;
        packages[id].hash = hash;
        //packages[id].details = _details;
   }
   function GetPackage(uint _id) public onlySeller view returns( string memory _name, uint  _price){
       require(id == _id);
       return(
        packages[_id].name,
        packages[_id].price);
   }
   function Ac2_ApplyBuy(uint _id) public noSeller payable returns(uint){
      require(id == _id);
      shipper = msg.sender;
      Balances[shipper] = address(this).balance;
      require(Balances[shipper] == price * 1 ether);
      return Balances[shipper];
  }
    function ConfirmOfShipper(uint _hash)public payable noSeller{
        if(hash ==_hash){
            shipper.transfer(Balances[shipper]);
        }
    }
    function ConFirmOfSeller(uint _hash)public payable onlySeller{
        if(hash ==_hash){
            seller.transfer(Balances[shipper]);
        }
    }
}