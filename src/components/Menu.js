import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Menu extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ui className="nav-links">
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to='/'>
                            <div><li>Seller create</li></div>
                        </NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to='/review'>
                            <div><li>Buyer</li> </div>
                        </NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to='/shipper'>
                            <div><li>Seller want to transport</li> </div>
                        </NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to='/shipperdilivery'>
                            <div><li>Shipper</li> </div>
                        </NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to='/confirm'>
                            <div><li>Confirm Success</li> </div>
                        </NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to='/confirmerrbyship'>
                            <div><li>Confirm Error By Shipper</li> </div>
                        </NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to='/confirmerrbybuyer'>
                            <div><li>Confirm Error By Buyer</li> </div>
                        </NavLink>
                        
                    </ui>
                </nav>
            </div>
        );
    }
}

export default Menu;