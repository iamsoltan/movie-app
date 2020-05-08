import React, { Component } from 'react';
import './App.css';
import Reglog from "./components/reglog";
import MovieList from "./components/MovieList"

class App extends Component {
  movieList = [["Behind Enemy Lines", "5/5", "Behind Enemy Lines is a series of war films beginning with Behind Enemy Lines in 2001, followed by films in 2006, 2009 and 2014. All four films feature the United States Navy."],
   ["Black Hawk Down","5/5","Captain Mike Steele leads a team of nearly 100 US Army Rangers who travel to the capital city of Mogadishu to nab the top two lieutenants of a Somali warlord."],
   ["The Transporter","5/5","Ex-Special Forces operator Frank Martin (Jason Statham) lives what seems to be a quiet life along the French Mediterranean, hiring himself out as a mercenary transporter who moves goods - human or otherwise - from one place to another. No questions asked. Dangerous complications ensue when he is hired to kidnap the feisty daughter of a lethal Chinese crime lord who's smuggling his fellow countrymen into France."]
  ];
  render() {
    return (
      <div className="App">
        <Reglog />
        <MovieList array={this.movieList} />
      </div>
    );
  }
}

export default App;
