import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage";
import MovieDetails from "./components/pages/movie-details";
import TvDetails from "./components/pages/tv-details";
import "./settings/_base.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movie/:title/:id">
          <MovieDetails />
        </Route>
        <Route path="/tv/:title/:id">
          <TvDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
