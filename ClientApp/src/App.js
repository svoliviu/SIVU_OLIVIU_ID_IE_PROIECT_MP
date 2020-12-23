import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import MovieDirectors from "./components/ListDirectors";
import CreateDirector from "./components/CreateDirector";
import EditDirector from "./components/EditDirector";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/directors" component={MovieDirectors} />
        <Route path="/create-director" component={CreateDirector} />
        <Route path="/edit-director/:id" component={EditDirector} />
      </Layout>
    );
  }
}
