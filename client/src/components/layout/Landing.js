import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Landing.css";
import logo from "../../img/logo.svg";
import Login from "../Auth/Login";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/posts" />;
  }
  return (
    <div className="Landing">
      <div>
        <img src={logo} alt="logo" />
        <div className="para">
          U.Net (University Network) helps you connect with the people in your
          college, and find friends.
        </div>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
