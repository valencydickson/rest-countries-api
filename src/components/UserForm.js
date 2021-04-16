import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { setDarkMode } from "../actions";

class UserForm extends Component {
  onSubmit = () => {
    this.props.onSubmit();
  };

  onSelect = () => {
    this.props.onChange();
  };

  changeInputColor = () => {
    return this.props.darkTheme === true ? "darkInput" : "";
  };

  render() {
    return (
      <form
        className="container-fluid form-group country-form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <span
              className={`input-group-text search-icon ${this.changeInputColor()}`}
            >
              <i className="fas fa-search "></i>
            </span>
          </div>
          <Field
            name="country"
            component="input"
            className={`form-control search-input shadow-none ${this.changeInputColor()}`}
            placeholder="Search for a Country"
            autoComplete="off"
          />
        </div>

        <Field
          name="regions"
          component="select"
          className={`custom-select mb-4 filter-select shadow-none ${this.changeInputColor()}`}
          onSubmit={this.onSelect}
          placeholder="Filter by Regions"
        >
          <option value="" disabled>
            Filter by a Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Field>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    darkTheme: state.darkTheme,
  };
};

export default connect(mapStateToProps, { setDarkMode })(
  reduxForm({ form: "UserForm" })(UserForm)
);
