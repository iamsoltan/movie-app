import React, { Component } from 'react';
import './NavBar.css';
import Reglog from "./reglog";
import Search from "./Search";

const NavBar = () => {
    return (
        <div>
        <h1>nav bar </h1>
        <Reglog />
        <Search />
        </div>
        );

}

export default NavBar;

