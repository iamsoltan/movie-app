import React, { Component } from 'react';
import './MovieList.css';
import { NavLink } from 'react-router-dom';

function MovieList(props) {
    /* if white heart got clicked then {
        user .fav  add movie index
        heart will be red}
      * if red heart get clicked {
            user .fav remove movie index
            heart will be white
        }
      * if admin remove movie {
          movie item in that index will be marked as deleted
          user fav if rerender will render just non deleted marked
      }


        heart got white and favourit delete its reference   
    } */

    if (props.user === "") {
        return (
            <div id="list-container">
                <div id="list">
                    {props.array.map((e, i) => {
                        if (e.length > 1)
                            return (
                                <div key={i} className="card-container" style={{ backgroundImage: "url(" + e[2] + ")" }}>
                                    <div className="card">
                                        <div className="star-card" title="Rating based on our website's users">{Array(e[1] * 1).fill("").map((x, i) => <span key={i} className="fa fa-star star-checked" />)}</div>
                                        <br /><br />
                                        <h2>{e[0]}</h2>
                                        <h4>{e[1]}</h4>
                                        <p>{e[3]}</p>
                                    </div>
                                </div>
                            )
                    }
                    )}

                </div>
            </div>
        )
    } else
        if (props.user.adminUser === "admin") {
            return (
                <div id="list-container">
                    <div id="list">
                        {props.array.map((e, i) => {
                            if (e.length > 1)
                                return (
                                    <div key={i} className="card-container" style={{ backgroundImage: "url(" + e[2] + ")" }}>
                                        <div className="card">
                                            <span onClick={() => props.addFav(e)} className={e[4]} title="Add to favorite" />
                                            <div className="star-card" title="Rating based on our website's users">{Array(e[1] * 1).fill("").map((x, i) => <span key={i} className="fa fa-star star-checked" />)}</div>
                                            <br /><br />
                                            <h2>{e[0]}</h2>
                                            <h4>{e[1]}</h4>
                                            <p>{e[3]}</p>
                                            <NavLink to={{ pathname: `/edit/${i}` }}><span className="fa fa-cog cog-checked " title="Edit the movie" /></NavLink>
                                        </div>
                                    </div>
                                )
                        })}

                    </div>
                </div >
            )
        } else
            if (props.user.adminUser === "user") {
                return (
                    <div id="list-container">
                        <div id="list">
                            {props.array.map((e, i) => {
                                if (e.length > 1)
                                    return (
                                        <div key={i} className="card-container" style={{ backgroundImage: "url(" + e[2] + ")" }}>
                                            <div className="card">
                                                <span onClick={() => props.addFav(e)} className={e[4]} title="Add to favorite" />
                                                <div className="star-card" title="Rating based on our website's users">{Array(e[1] * 1).fill("").map((x, i) => <span key={i} className="fa fa-star star-checked" />)}</div>
                                                <br /><br />
                                                <h2>{e[0]}</h2>
                                                <h4>{e[1]}</h4>
                                                <p>{e[3]}</p>

                                            </div>
                                        </div>
                                    )
                            }
                            )}

                        </div>
                    </div>
                )
            }
}

export default MovieList;