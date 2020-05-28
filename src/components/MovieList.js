import React, { useEffect } from 'react';
import './MovieList.css';
import { NavLink } from 'react-router-dom';

function MovieList(props) {

    useEffect( 
        ()=> 
        {
            
        console.log("movieList is mounted");
        if (props.loaded) {props.loaded(true)}
        }
        
    )
    

    if (props.user === "") {
        return (
            <div id="list-container">
                <div id="list">
                    {props.array.map((e, i) => {
                        if (e.length > 1)
                            return (
                                <div key={i} className="card-container"     style={{ backgroundImage: "url(" + e[2] + ")" }}>
                                    <div className="card">
                                        <div className="star-card" title="Rating based on our website's users">{Array(e[1] * 1).fill("").map((x, i) => <span key={i} className="fa fa-star star-checked" />)}</div>
                                        <br /><br />
                                        <h2>{e[0]}</h2>
                                        <h4>{e[1]}</h4>
                                        <p>{e[3]}</p>
                                        <NavLink to={{ pathname: `/show/${i}` }}><span className="fa fa-eye  " title="Take a look" /></NavLink>

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
                                            <span onClick={() => props.addFav(e)} className={e[5]} title="Add to favorite" />
                                            <div className="star-card" title="Rating based on our website's users">{Array(e[1] * 1).fill("").map((x, i) => <span key={i} className="fa fa-star star-checked" />)}</div>
                                            <br /><br />
                                            <h2>{e[0]}</h2>
                                            <h4>{e[1]}</h4>
                                            <p>{e[3]}</p>
                                            <NavLink to={{ pathname: `/edit/${i}` }}><span className="fa fa-cog cog-checked " title="Edit the movie" /></NavLink>
                                            <NavLink to={{ pathname: `/show/${i}` }}><span className="fa fa-eye  " title="Take a look" /></NavLink>
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
                                                <span onClick={() => props.addFav(e)} className={e[5]} title="Add to favorite" />
                                                <div className="star-card" title="Rating based on our website's users">{Array(e[1] * 1).fill("").map((x, i) => <span key={i} className="fa fa-star star-checked" />)}</div>
                                                <br /><br />
                                                <h2>{e[0]}</h2>
                                                <h4>{e[1]}</h4>
                                                <p>{e[3]}</p>
                                                <NavLink to={{ pathname: `/show/${i}` }}><span className="fa fa-eye  " title="Take a look" /></NavLink>

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