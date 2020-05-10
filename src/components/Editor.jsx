import React, { Component } from 'react';
import './Editor.css';

function Editor(props) {


    return (

        <div id="list-container">
            <table id="list-table">
                <tr>
                    <th>Movie Title</th>
                    <td><input type="text" defaultValue={props.e[0] + ""} /></td>
                </tr>
                <tr>
                    <th><span className="fa fa-star star-checked" /> Rating</th>
                    <td><input type="number" min="1" max="5" defaultValue={props.e[1] * 1} /></td>
                </tr>
                <tr>
                    <th>Poster</th>
                    <td><input type="text" defaultValue={props.e[2]} /></td>
                </tr>
                <tr>
                    <th>description</th>
                    <td><textarea rows="5" cols="100" defaultValue={props.e[3]} /></td>
                </tr>
            </table>
            <div class="cancel-submit">
                <button id="cancel">Cancel</button>
                <button id="submit" onclick="">Submit</button>
                <button id="delete" onclick="">Delete</button>
            </div>
        </div>
    );

}

export default Editor;