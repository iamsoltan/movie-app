import React, { Component } from "react";
import "./Shower.css";
import { NavLink,useParams } from 'react-router-dom';

function Shower(props) {
  let { Smovie } = useParams();
  let { e } = props;
  return (
    <div id="show-container" /*style={{ backgroundImage: "url(" + e[Smovie][2] + ")" }}*/ >
      <div id="show">
        <div className="card-show-container"
          style={{ backgroundImage: "url(" + e[Smovie][2] + ")" }}
        >
          <div className="card-show">
            <div
              className="star-card"
              title="Rating based on our website's users"
            >
              {Array(e[Smovie][1] * 1)
                .fill("")
                .map((x, i) => (
                  <span key={i} className="fa fa-star star-checked" />
                ))}
            </div>
            <br />
            <br />
            <h2>{e[Smovie][0]}</h2>
            <h4>{e[Smovie][1]}</h4>
            <p>{e[Smovie][3]}</p>
          </div>
        </div>
        <div className="video-show"><iframe width="560" height="315" src={e[Smovie][4]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </div>
    </div>
   // <h1>hhhh</h1>
  );
}

export default Shower;