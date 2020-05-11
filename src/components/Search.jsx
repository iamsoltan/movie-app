import React, { Component } from 'react';
import "./Search.css";

const Search = (props) => {
    return (
        <React.Fragment>
        <input type="search" id="mySearch" onChange={a=>{props.onChange(a.target.value)}} placeholder="Find a movie.." title="Find a movie" />
        <div className="star-menu" title="Search by rating">{Array(4).fill("").map(x=><span className="fa fa-star" />)}<span className="fa fa-star star-checked" /></div>
        <button onClick={()=>{document.getElementById('mySearch').value="";props.onChange("")}}>Reset</button>
        </React.Fragment>
    );

}

export default Search;