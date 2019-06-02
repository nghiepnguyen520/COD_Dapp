import React, { Component } from "react";
import config from "../config";
import config2 from "../config2";
import web3 from "../web3";
import { Form } from "semantic-ui-react";
class MenuReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: 0,
      details: "",
      details: "",
      balanceBuyer: 0,
      price2: 0,
      //shipper: "",
      //seller2: "",
      buyer: ""
      //result:0
    };
  }

  async componentDidMount() {
    //mc 2
    const buyer = await config.methods.buyer().call();
    //const seller2 = await config2.methods.seller().call();
    //const shipper = await config2.methods.shipper().call();
    //const balanceBuyer = web3.eth.getBalance(config.options.address);
    //ms 1
    const accounts = await web3.eth.getAccounts();
    const id = await config.methods.id().call();
    const price = await config.methods.price().call();
    //const name = await config.methods.GetName(id).call();
    await config.methods
      .GetPackage(id)
      .call({ from: accounts[0] }, (err, result) => {
        if (err) {
          console.log("err: ", err);
        } else {
          console.log("result: ", result);
          //var data =  JSON.stringify(result);
          console.log("name: ", result[0]);
          console.log("details: ", result[2]);
          this.setState({
            name: result[0],
            details: result[2]
          });
        }
      });
    // await config.methods.GetPackage(this.state.id).call({from : accounts[0]})
    // .then(console.log);
    this.setState({
      id,
      price,
      //balanceBuyer
      //seller2,
      //shipper,
      buyer
    });
  }
  onSubmit = async event => {
    event.preventDefault();
    try {
      const id = await config.methods.id().call();
      const accounts = await web3.eth.getAccounts();
      await config.methods.Ac3_ApplyBuy(id).send({
        from: accounts[1],
        value: web3.utils.toWei(this.state.price, "ether")
      });
      this.setState({ errorMessage: "Success!!" });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };
  // onSubmit2 = async (event) => {
  //     event.preventDefault();
  //     try {
  //         //const id = await config.methods.id().call();
  //         const id2 = await config2.methods.id().call();
  //         console.log("id",id2);
  //         const accounts = await web3.eth.getAccounts();
  //         const price = await config.methods.price().call();
  //         // await config2.methods.price().call((err,result)=>{
  //         //     if(err) throw err;
  //         //     else{
  //         //         result=price;
  //         //         this.setState({
  //         //             price2: result[0]
  //         //         })
  //         //     }
  //         // })
  //         const price2 = await config2.methods.price().call();
  //         this.setState({
  //             price2
  //         });
  //     //    var price3 = this.state.price2 = this.state.price;
  //     //    console.log(price3);
  //         await config2.methods.Ac2_ApplyBuy(id2).send({
  //             from: accounts[2],
  //             value: web3.utils.toWei( this.state.price2 , 'ether')

  //         })
  //         this.setState({ errorMessage: "Success!!" });
  //     }
  //     catch (err) {
  //         this.setState({ errorMessage: err.message });
  //     }

  // }
  render() {
    return (
      <div className="main">
       <a className="ui teal image label">Buyer
                    <div className="detail">{this.state.buyer}</div>
                  </a>
        <div className="ui card package">
          <div className="content">
            {/* ***** */}
            <div className="header">Package</div>
            <div className="description">
              {/* /***** */}
              <h3>
                ID: <i>{this.state.id}</i>{" "}
              </h3>
            </div>
            <div className="description">
              <h3>
                Name: <i>{this.state.name}</i>
              </h3>
            </div>
            <div className="description">
              <h3>
                Price: <i>{this.state.price} Ether</i>
              </h3>
            </div>
            <div className="description">
              <h3>
                Details: <i>{this.state.details} </i>
              </h3>
            </div>
          </div>
          <div className="extra content" />
          <div className="front-deposit">
            <Form
              onSubmit={this.onSubmit}
              error={!!this.state.errorMessage}
              className="input input-buy"
            >
              <div>
                <div>
                  <h4>Buyer recieve to purchase:</h4>
                 
                </div>
                <div className="ui action input">
                  <input
                    value={this.state.id}
                    onChange={event =>
                      this.setState({ id: event.target.value })
                    }
                    type="text"
                    placeholder="Price"
                  />
                  <button className="ui violet inverted button">Deposit</button>
                </div>
              </div>
            </Form>

            {/* <Form onSubmit={this.onSubmit2} error={!!this.state.errorMessage} className="input input-buy">
                            <div>
                                <div><h4>Shipper recieve to purchase:</h4></div>
                                <div className="ui action input">
                                    <input value={this.state.id}
                                        onChange={event =>
                                            this.setState({ id: event.target.value })}
                                        type="text" placeholder="Price" />
                                    <button className="ui blue inverted button">Deposit</button>
                                </div>
                            </div>

                        </Form> */}
            <div className="ui positive message">
              <div className="header">Message</div>
              <p>{this.state.errorMessage}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuReview;
