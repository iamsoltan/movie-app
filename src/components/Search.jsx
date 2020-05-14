import React, { Component } from 'react';
import "./Search.css";

const Search = (props) => {
    const rate = (e) => {
        let checked = "fa fa-star star-checked";
        let empty = "fa fa-star";
        //My Solution to convert html5Collection into an array :
        let spansIntoNewTable = [...e.target.parentNode.children];
        let index = spansIntoNewTable.indexOf(e.target);
        /* complicated solution ** .call replace the "this" keyword of "Array.prototype" to the first arg called "e.target.parentNode.children" , then the second element will be the arg of the function before .call "indexOf" :

        let index = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
        */
        
        for (let k = index; k < 5; k++) {
            e.target.parentNode.children[k].className = checked;

        }
        for (let k = index - 1; k >= 0; k--) {
            e.target.parentNode.children[k].className = empty;

        }

        props.onClick(5-index*1);
    }

    const reset = () => {
        let empty = "fa fa-star";
        for (let k = 0; k < 4; k++) {
            document.getElementsByClassName("star-menu")[0].children[k].className = empty;
        }
        document.getElementById('mySearch').value = "";
        props.onChange("");
        props.onClick("1");
    }
    return (
        <React.Fragment>
            <input type="search" id="mySearch" onChange={a => { props.onChange(a.target.value) }} placeholder="Find a movie.." title="Find a movie" />
            <div className="star-menu" title="Search by rating">{Array(4).fill("").map((x,i) => <span key={i} className="fa fa-star" onClick={e => rate(e)} />)}<span className="fa fa-star star-checked" onClick={e => rate(e)} /></div>
            <button className="resetSearch" onClick={() => { reset() }}>Reset</button>
        </React.Fragment>
    );

}

export default Search;