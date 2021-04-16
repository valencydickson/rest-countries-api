import React, { Component } from "react";
import UserForm from "./UserForm";
import { connect } from "react-redux";
import {
  fetchCountries,
  fetchCountry,
  filterCountries,
  selectCountry,
} from "../actions";

import { formValueSelector } from "redux-form";

class CountriesList extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  onCountrySelected = (name) => {
    this.props.selectCountry(name);
  };

  changeCardColor = () => {
    return this.props.darkTheme === true ? "darkCard" : "";
  };

  renderCountries = () => {
    return this.props.countries[0].map((country) => {
      return (
        <div
          className="card mx-5 mb-5 shadow countries-card"
          key={country.numericCode}
          onClick={() => this.onCountrySelected(country.name)}
        >
          <img
            className="card-img-top mw-100"
            src={country.flag}
            alt={country.name}
          />
          <div className={`card-body pb-4 ${this.changeCardColor()}`}>
            <h4 className="card-title country-name mb-4">{country.name}</h4>
            <p className="country-data">
              <span>Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p className="country-data">
              <span>Region: </span>
              {country.region}
            </p>
            <p className="country-data">
              <span>Capital: </span>
              {country.capital}
            </p>
          </div>
        </div>
      );
    });
  };

  onFormSubmit = () => {
    if (!this.props.countryName) {
      return "";
    }
    this.props.fetchCountry(this.props.countryName);
  };

  onRegionSelect = () => {
    if (!this.props.region) {
      return "";
    }
    this.props.filterCountries(this.props.region);
  };

  render() {
    if (!this.props.countries[0]) {
      return "";
    }

    return (
      <React.Fragment>
        <UserForm onSubmit={this.onFormSubmit} onChange={this.onRegionSelect} />
        <div className="container-fluid countries ">
          {this.renderCountries()}
        </div>
      </React.Fragment>
    );
  }
}

//Fetch form value from store
const formName = "UserForm";
const myFormValueSelector = formValueSelector(formName);

const mapStateToProps = (state) => {
  return {
    countries: Object.values(state.countries),
    countryName: myFormValueSelector(state, "country"),
    region: myFormValueSelector(state, "regions"),
    darkTheme: state.darkTheme,
  };
};

export default connect(mapStateToProps, {
  fetchCountries,
  fetchCountry,
  filterCountries,
  selectCountry,
})(CountriesList);
