import React, { Component } from 'react';
import './App.css';
import MovieList from "./components/MovieList"
import NavBar from "./components/NavBar"
import Editor from "./components/Editor"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [
                ["Behind Enemy Lines", "5", "https://resizing.flixster.com/rr-PoYj5Jk4QBmQu75ZgrWFzqV8=/206x305/v1.bTsxMTE3Njc3MztqOzE4NDg5OzEyMDA7ODAwOzEyMDA", "Behind Enemy Lines is a series of war films beginning with Behind Enemy Lines in 2001, followed by films in 2006, 2009 and 2014. All four films feature the United States Navy."],
                ["Black Hawk Down", "4", "https://images-na.ssl-images-amazon.com/images/I/81+PAHSNsgL._RI_.jpg", "Captain Mike Steele leads a team of nearly 100 US Army Rangers who travel to the capital city of Mogadishu to nab the top two lieutenants of a Somali warlord."],
                ["The Transporter", "3", "https://i.pinimg.com/originals/27/2d/64/272d640a0166155f7b23485011da16b9.jpg", "Ex-Special Forces operator Frank Martin (Jason Statham) lives what seems to be a quiet life along the French Mediterranean, hiring himself out as a mercenary transporter who moves goods - human or otherwise - from one place to another. No questions asked. Dangerous complications ensue when he is hired to kidnap the feisty daughter of a lethal Chinese crime lord who's smuggling his fellow countrymen into France."]
            ],
            rate: 1,
            keyword: "",
        }
    };



    getKeyword = (k) => {
        this.setState({ keyword: k });
    }
    getRate = (r) => {
        this.setState({ rate: r });
    }
    filtered = (m, k, r) => {
        let patt = new RegExp(k, 'gi');
        let rate = r;
        console.log("keyword rate : ", k, "filter rate : ", r);
        return m.filter((e) => e[0].match(patt) && e[1] * 1 >= rate);
    };

    addMovie = (x) => {
        if (x[1] > 5) { x[1] = 5 } else if (x[1] < 1) { x[1] = 1 };
        console.log("new list item in app : ", x);

        this.setState({ movieList: [...this.state.movieList, x] });
    }
    deleteMovie = (i) => {
        let y = [...this.state.movieList];
        y.splice(i, 1);
        this.setState({ movieList: [...y] });
    }
    updateMovie = (movie, i) => {
        let y = [...this.state.movieList];
        console.log(y);

        y.splice(i, 1, movie);
        this.setState({ movieList: [...y] });
    }


    render() {

        return (
            <Router>

                <div className="App">
                    <NavBar onChange={this.getKeyword} onClick={this.getRate} />
                    <NavLink to="/add"><button className="ass-movie">Add a Movie</button></NavLink>
                    <Switch>
                        <Route path="/" exact component={() => <MovieList array={this.filtered(this.state.movieList, this.state.keyword, this.state.rate)} />} />
                        <Route path="/add" component={() => <Editor addMovie={this.addMovie} mode="add" />} />
                        <Route path="/edit/:iDelete" component={() => <Editor e={this.state.movieList} updateMovie={this.updateMovie} deleteMovie={this.deleteMovie} mode="edit" />} />
                    </Switch>

                </div>

            </Router>
        );
    }
}

export default App;



{/* <Editor e={this.state.movieList[0]} submitList={this.submitList} deleteList={this.deleteList} />
                      <Route path="/" component={} />
          */}


/*
 * rise this data with events "or with data on change (state)"
 * reglog --> app:
 * user object
 * read and write mode
 *
 */
