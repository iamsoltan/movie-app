import React, { Component } from 'react';
import './MovieList.css';

function MovieList(props) {


    return (

        <div id="list-container">
            <div id="list">
                {props.array.map((e,i) =>
                    <div key={i} className="card-container" style={{ backgroundImage: "url(" + e[2] + ")" }}>
                        <div className="card">
                            <span className="fa fa-heart heart-checked " title="Add to favourit"/>
                            <div className="star-card" title="Rating based on our website's users">{Array(e[1]*1).fill("").map((x,i)=><span key={i} className="fa fa-star star-checked" />)}</div>
                            <br/><br/>
                            <h2>{e[0]}</h2>
                            <h4>{e[1]}</h4>
                            <p>{e[3]}</p>
                            <span className="fa fa-cog cog-checked " title="Edit the movie"/>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );

}

export default MovieList;