import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setDarkMode } from "../actions";

class Header extends Component {
  onModeSelect = () => {
    this.props.setDarkMode(this.props.darkTheme);
  };

  darkModeNavbar = () => {
    return this.props.darkTheme === true ? "darkNavbar" : "bg-light";
  };

  changeHeadColor = () => {
    return this.props.darkTheme === true ? "text-white" : "";
  };

  changeModeText = () => {
    return this.props.darkTheme === true ? "Light Mode" : "Dark Mode";
  };

  render() {
    return (
      <header className="shadow mb-4">
        <nav className={`navbar  py-4 ${this.darkModeNavbar()}`}>
          <h4>
            <Link to="/" className={this.changeHeadColor()}>
              Where in the World?
            </Link>
          </h4>

          <div
            className="mode d-flex"
            onClick={this.onModeSelect}
            role="button"
          >
            <i className="fas fa-moon p-2"></i>
            <p className="pt-1">{this.changeModeText()}</p>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    darkTheme: state.darkTheme,
  };
};

export default connect(mapStateToProps, { setDarkMode })(Header);
