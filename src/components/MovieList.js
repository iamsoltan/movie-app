import React, { Component } from 'react';
import './MovieList.css';

function MovieList(props) {


    return (

        <div id="list-container">
            <table id="list-table">
                <tr>
                    <th>Movie Title</th>
                    <th>Rate</th>
                    <th>description</th>
                </tr>
                {props.array.map(e =>
                    <tr>
                        <td>{e[0]}</td>
                        <td>{e[1]}</td>
                        <td>{e[2]}</td>
                    </tr>
                    )}
                <tr>
                    <th>Movie Title</th>
                    <th>Rate</th>
                    <th>description</th>
                </tr>
            </table>
        </div>
    );

}

export default MovieList;