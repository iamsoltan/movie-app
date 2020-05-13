import React, { Component } from 'react';
import './NavBar.css';
import Reglog from "./reglog";
import Search from "./Search";

const NavBar = (props) => {
    return (
        <div className="navBar-container">
            
        <Reglog getUser={props.getUser}/>
        <Search onChange={props.onChange} onClick={props.onClick}/>
        </div>
        );

}

export default NavBar;

