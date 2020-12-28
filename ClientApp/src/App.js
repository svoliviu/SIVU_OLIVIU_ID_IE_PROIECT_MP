import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import MovieDirectors from "./components/ListDirectors";
import CreateDirector from "./components/CreateDirector";
import EditDirector from "./components/EditDirector";
import MovieActors from "./components/ListActors";
import CreateActor from "./components/CreateActor";
import EditActor from "./components/EditActor";
import CreateMovie from "./components/CreateMovie";
import CreateGenre from "./components/CreateGenre";
import MovieGenres from "./components/ListGenres";
import EditGenre from "./components/EditGenre";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/directors" component={MovieDirectors} />
        <Route path="/actors" component={MovieActors} />
        <Route path="/genres" component={MovieGenres} />
        <Route path="/create-director" component={CreateDirector} />
        <Route path="/create-actor" component={CreateActor} />
        <Route path="/create-genre" component={CreateGenre} />
        <Route path="/create-movie" component={CreateMovie} />
        <Route path="/edit-director/:id" component={EditDirector} />
        <Route path="/edit-actor/:id" component={EditActor} />
        <Route path="/edit-genre/:id" component={EditGenre} />
      </Layout>
    );
  }
}
