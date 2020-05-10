import React, { Component } from 'react';
import './App.css';
import MovieList from "./components/MovieList"
import NavBar from "./components/NavBar"

class App extends Component {
  movieList = [
    ["Behind Enemy Lines", "5","https://resizing.flixster.com/rr-PoYj5Jk4QBmQu75ZgrWFzqV8=/206x305/v1.bTsxMTE3Njc3MztqOzE4NDg5OzEyMDA7ODAwOzEyMDA", "Behind Enemy Lines is a series of war films beginning with Behind Enemy Lines in 2001, followed by films in 2006, 2009 and 2014. All four films feature the United States Navy."],
    ["Black Hawk Down", "4","https://images-na.ssl-images-amazon.com/images/I/81+PAHSNsgL._RI_.jpg", "Captain Mike Steele leads a team of nearly 100 US Army Rangers who travel to the capital city of Mogadishu to nab the top two lieutenants of a Somali warlord."],
    ["The Transporter", "3","https://i.pinimg.com/originals/27/2d/64/272d640a0166155f7b23485011da16b9.jpg", "Ex-Special Forces operator Frank Martin (Jason Statham) lives what seems to be a quiet life along the French Mediterranean, hiring himself out as a mercenary transporter who moves goods - human or otherwise - from one place to another. No questions asked. Dangerous complications ensue when he is hired to kidnap the feisty daughter of a lethal Chinese crime lord who's smuggling his fellow countrymen into France."]
  ];
  render() {
    return (
      <div className="App">
        <NavBar />

        <MovieList array={this.movieList} />
      </div>
    );
  }
}

export default App;
