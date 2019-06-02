import React, { Component } from 'react';
import config2 from "../config2";
import { Form, Button, Input } from "semantic-ui-react";
import web3 from "../web3";
import config from "../config";
class ConfirmErrByShip extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hash: "",
          errorMessage: ""
        };
      }
    
      async componentDidMount() {
        const hash = await config2.methods.hash().call();
      }
      onSubmit = async event => {
        event.preventDefault();
        const { hash } = this.state;
        if (hash === "") {
          this.setState({
            errorMessage: "Please enter hash!!"
          });
        } else {
          try {
            const accounts = await web3.eth.getAccounts();
            await config.methods.ConfirmOfBuyer(this.state.hash).send({
              from: accounts[1]
            });
            // await config2.methods.ConFirmOfSeller(hash).call({from: accounts[0]});
            this.setState({
              errorMessage: "success!!"
            });
          } catch (err) {
            this.setState({ errorMessage: err.message });
          }
          this.setState({ loading: false });
        }
        this.setState({
          hash: ""
        });
      };
      onSubmit2 = async event => {
        event.preventDefault();
        const { hash } = this.state;
        if (hash === "") {
          this.setState({
            errorMessage: "Please enter hash!!"
          });
        } else {
          try {
            const accounts = await web3.eth.getAccounts();
            await config2.methods.ConFirmOfSeller(this.state.hash).send({
              from: accounts[0]
            });
            // await config2.methods.ConFirmOfSeller(hash).call({from: accounts[0]});
            this.setState({
              errorMessage: "success!!"
            });
          } catch (err) {
            this.setState({ errorMessage: err.message });
          }
          this.setState({ loading: false });
        }
        this.setState({
          hash: ""
        });
      };
      render() {
        return (
          <div className="main">
            <div className="from-creat">
              <div className="form">
                <div class="ui segment">
                  <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                      <label>Buyer callback money:</label>
                      <Input
                      
                        onChange={event =>
                          this.setState({ hash: event.target.value })
                        }
                      />
                    </Form.Field>
                    <Button primary loading={this.state.loading}>
                      confirm
                    </Button>
                  </Form>
                </div>
                <div class="ui segment">
                  <Form onSubmit={this.onSubmit2} error={!!this.state.errorMessage}>
                    <Form.Field>
                      <label>Seller callback money:</label>
                      <Input
                      
                        onChange={event =>
                          this.setState({ hash: event.target.value })
                        }
                      />
                    </Form.Field>
                    <Button primary loading={this.state.loading}>
                      confirm
                    </Button>
                  </Form>
                </div>
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
export default ConfirmErrByShip;