import React, { Component } from 'react';
import './App.css';
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Editor from "./components/Editor";
import Shower from "./components/Shower";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [
                ["Behind Enemy Lines", "5", "https://resizing.flixster.com/rr-PoYj5Jk4QBmQu75ZgrWFzqV8=/206x305/v1.bTsxMTE3Njc3MztqOzE4NDg5OzEyMDA7ODAwOzEyMDA", "Behind Enemy Lines is a series of war films beginning with Behind Enemy Lines in 2001, followed by films in 2006, 2009 and 2014. All four films feature the United States Navy.","https://www.youtube.com/embed/PUeWBp_kmuo"],
                ["Black Hawk Down", "4", "https://images-na.ssl-images-amazon.com/images/I/81+PAHSNsgL._RI_.jpg", "Captain Mike Steele leads a team of nearly 100 US Army Rangers who travel to the capital city of Mogadishu to nab the top two lieutenants of a Somali warlord.","https://www.youtube.com/embed/5Y1ju8QwpQM"],
                ["The Transporter", "3", "https://i.pinimg.com/originals/27/2d/64/272d640a0166155f7b23485011da16b9.jpg", "Ex-Special Forces operator Frank Martin (Jason Statham) lives what seems to be a quiet life along the French Mediterranean, hiring himself out as a mercenary transporter who moves goods - human or otherwise - from one place to another.","https://www.youtube.com/embed/Pbh3CDBNIQA"],
                ["The Patriot", "4", "https://mindthecrease.com/wp-content/uploads/2012/04/patriot-movie-mel-gibson.jpg", "The Patriot is a 2000 American epic historical fiction war film directed by Roland Emmerich, written by Robert Rodat, and starring Mel Gibson, Chris Cooper, Heath Ledger, and Jason.","https://www.youtube.com/embed/P5u1am7pmrw"]
            ],
            rate: 1,
            keyword: "",
            user: "",
        }
    };

    /* user management */
    getUser = (u) => {
        this.setState({ user: u });

    }
    /* user fav add */
    addFav = (e) => {
        
        if (window[this.state.user.email].fav.includes(this.state.movieList.indexOf(e)) == false) {

            window[this.state.user.email].fav = [...window[this.state.user.email].fav, this.state.movieList.indexOf(e)];
            console.log("fav list : ", window[this.state.user.email].fav);
            console.log("fav item : ", this.state.movieList.indexOf(e));

            this.setState({ user : window[this.state.user.email] });


        } else if (window[this.state.user.email].fav.includes(this.state.movieList.indexOf(e)) == true) {
            let index = this.state.movieList.indexOf(e);
            let pos = window[this.state.user.email].fav.indexOf(index);
            let z = window[this.state.user.email].fav;
            console.log("to numero a del ; ",this.state.movieList.indexOf(e));
            console.log("position du nemero dans z",window[this.state.user.email].fav.indexOf(index));
            
            z.splice(pos,1);

            console.log("z : ",z);
            
            window[this.state.user.email].fav = [...z];


            this.setState({ user : window[this.state.user.email] });
        }

    }

    /* return fav array from user.fav if there is a logged user */
    getFav = () => {
        if (this.state.user != "") {
            console.log("new fav list : ",this.state.movieList.filter((e, i) => ((e.length < 4) || (this.state.user.fav).includes(i))));
            console.log("original movie list : ",this.state.movieList);
            
            
            return this.state.movieList.filter((e, i) => ((e.length < 4) || (this.state.user.fav).includes(i)));
        }
    }

    /* search management */

    getKeyword = (k) => {
        this.setState({ keyword: k });
    }
    getRate = (r) => {
        this.setState({ rate: r });
    }
    filtered = (m, k, r) => {
        let patt = new RegExp(k, 'gi');
        let rate = r;
        let X = m.filter((e) => (e.length < 4) || (e[0].match(patt) && e[1] * 1 >= rate));
        
        if (this.state.user != "") {
            for (let i = 0; i < X.length; i++) {
                if ((X[i].length > 1) && (window[this.state.user.email].fav).includes(i) == true) { X[i][5] = "fa fa-heart heart-checked " }
                else if ((X[i].length > 1) && (window[this.state.user.email].fav).includes(i) == false) { X[i][5] = "fa fa-heart" }

            }
        }
        return X;
    }






    /* movie management */
    addMovie = (x) => {
        if (x[1] > 5) { x[1] = 5 } else if (x[1] < 1) { x[1] = 1 };
        this.setState({ movieList: [...this.state.movieList, x] });
    }
    deleteMovie = (i) => {
        let y = [...this.state.movieList];
        y[i] = [""];
        this.setState({ movieList: [...y] });
    }
    updateMovie = (movie, i) => {
        if (movie[1] > 5) { movie[1] = 5 } else if (movie[1] < 1) { movie[1] = 1 };
        let y = [...this.state.movieList];
        y.splice(i, 1, movie);
        this.setState({ movieList: [...y] });
    }


    render() {

        let ButtonAdder;
        let ButtonFav;
        if (this.state.user.adminUser === "admin") { ButtonAdder = <NavLink to="/add"><button className="add-movie">Add a Movie</button></NavLink> };
        if (this.state.user !== "") { ButtonFav = <NavLink to="/Favorite"><button className="add-movie">Favorite Movies</button></NavLink> };
        return (
            <Router>

                <div className="App">
                    <NavBar onChange={this.getKeyword} onClick={this.getRate} getUser={this.getUser} />

                    <NavLink to="/"><button className="add-movie">Home</button></NavLink>
                    {ButtonAdder}
                    {ButtonFav}

                    <Switch>
                        <Route path="/" exact component={() => <MovieList user={this.state.user} addFav={this.addFav} array={this.filtered(this.state.movieList, this.state.keyword, this.state.rate)} />} />
                        <Route path="/Favorite" component={() => <MovieList user={this.state.user} addFav={this.addFav} array={this.filtered(this.getFav(), this.state.keyword, this.state.rate)} />} />
                        <Route path="/add" component={() => <Editor addMovie={this.addMovie} mode="add" />} />
                        <Route path="/edit/:iDelete" component={() => <Editor e={this.state.movieList} updateMovie={this.updateMovie} deleteMovie={this.deleteMovie} mode="edit" />} />
                        <Route path="/show/:Smovie" component={() => <Shower e={this.state.movieList} />} />
                    </Switch>

                </div>

            </Router>
        );
    }
}

export default App;


