import React, { Component } from 'react';
import "./Search.css";

const Search = () => {
    return (
        <React.Fragment>
        <input type="search" id="mySearch" onkeyup="myFunction()" placeholder="Find a movie.." title="Find a movie" />
        <div className="star-menu" title="Search by rating"><span className="fa fa-star star-checked" />{Array(4).fill("").map(x=><span className="fa fa-star" />)}</div>
        </React.Fragment>
    );

}

export default Search;