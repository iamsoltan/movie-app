import React, { Component } from 'react';
import './MovieList.css';

function MovieList(props) {


    return (

        <div id="list-container">
            <div id="list">
                {props.array.map(e =>
                    <div className="card-container" style={{ backgroundImage: "url(" + e[2] + ")" }}>
                        <div className="card">
                            {Array(e[1]*1).fill("").map(x=><span className="fa fa-star checked" />)}

                            <h3>{e[0]}</h3>
                            <h4>{e[1]}</h4>
                            <p>{e[3]}</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );

}

export default MovieList;