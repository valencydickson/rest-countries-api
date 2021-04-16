import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCountry } from "../actions";

class CountryItem extends Component {
  componentDidMount() {
    this.props.fetchCountry(this.props.match.params.id);
  }

  changeCardColor = () => {
    return this.props.darkTheme === true ? "darkCard" : "";
  };

  renderCountryData = () => {
    return this.props.country[0].map((country) => {
      return (
        <div className="card mx-5 mb-5 shadow-lg country-card" key={country}>
          <img
            className="card-img-top card-img-item"
            src={country.flag}
            alt={country.name}
          />
          <div
            className={`card-body card-body-item pb-4 ${this.changeCardColor()}`}
          >
            <div className="country-card-data">
              <div className="mb-5">
                <h4 className="card-title country-name mb-4">{country.name}</h4>
                <p className="country-data">
                  <span>Native Name: </span>
                  {country.nativeName}
                </p>
                <p className="country-data">
                  <span>Population: </span>
                  {country.population}
                </p>
                <p className="country-data">
                  <span>Region: </span>
                  {country.region}
                </p>
                <p className="country-data">
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p className="country-data">
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>

              <div className="mb-5">
                <p className="country-data">
                  <span>Top Level Domain: </span>
                  {country.topLevelDomain}
                </p>
                <p className="country-data">
                  <span>Currencies: </span>
                  {country.currencies[0].name}
                </p>
                <p className="country-data">
                  <span>Top Level Domain: </span>
                  {country.topLevelDomain}
                </p>
                <p className="country-data">
                  <span>Languages: </span>
                  {country.languages.map((language) => language.name + " ")}
                </p>
              </div>
            </div>

            <div>
              <h5 className="font-weight-bold">Border Countries:</h5>
              <div className="d-flex">
                {country.borders.map((border) => (
                  <p key={border} className="mr-2 p-2 border">
                    {border}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    if (!this.props.country[0]) {
      return "";
    }

    return (
      <div className="container-fluid ">
        <Link
          to="/"
          className={`btn btn-back btn-light shadow-lg px-4 mb-5 ${this.changeCardColor()}`}
        >
          <span className="mr-2">
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>
          Back
        </Link>
        {this.renderCountryData()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    country: Object.values(state.countries),
    darkTheme: state.darkTheme,
  };
};

export default connect(mapStateToProps, { fetchCountry })(CountryItem);
