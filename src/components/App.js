import React, { Component } from "react";

import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import CountriesList from "./CountriesList";
import history from "./history";
import "./App.css";
import CountryItem from "./CountryItem";

class App extends Component {
  changeContainerColor = () => {
    return this.props.darkTheme === true ? "darkContainer" : "";
  };

  render() {
    return (
      <Router history={history}>
        <div className={this.changeContainerColor()}>
          <Header />
          <Route path="/" exact component={CountriesList} />
          <Route path="/name/:id" exact component={CountryItem} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    darkTheme: state.darkTheme,
  };
};

export default connect(mapStateToProps)(App);
