import React, { Component } from 'react';
import './NavBar.css';
import Reglog from "./reglog";
import Search from "./Search";

const NavBar = (props) => {
    return (
        <div>
        <Reglog />
        <Search onChange={props.onChange}/>
        </div>
        );

}

export default NavBar;

