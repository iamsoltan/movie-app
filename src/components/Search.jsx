import React, { Component } from 'react';
import "./Search.css";

const Search = (props) => {
    const rate = (e) => {
        let checked = "fa fa-star star-checked";
        let empty = "fa fa-star";
        let index = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);

        for (let k = index; k < 5; k++) {
            e.target.parentNode.children[k].className = checked;

        }
        for (let k = index - 1; k >= 0; k--) {
            e.target.parentNode.children[k].className = empty;

        }
    }

    const resetRate = () => {
        let empty = "fa fa-star";
        for (let k = 0; k < 4; k++) {
            document.getElementsByClassName("star-menu")[0].children[k].className = empty;
        }
    }
    return (
        <React.Fragment>
            <input type="search" id="mySearch" onChange={a => { props.onChange(a.target.value) }} placeholder="Find a movie.." title="Find a movie" />
            <div className="star-menu" title="Search by rating">{Array(4).fill("").map(x => <span className="fa fa-star" onClick={e => rate(e)} />)}<span className="fa fa-star star-checked" /></div>
            <button onClick={() => { document.getElementById('mySearch').value = ""; props.onChange(""); resetRate() }}>Reset</button>
        </React.Fragment>
    );

}

export default Search;