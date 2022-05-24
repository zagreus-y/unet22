import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import ham_open from "../../img/ham-open.svg";
import ham_close from "../../img/ham-close.svg";
import logo from "../../img/logo.svg";
import "./Navbar.css";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  let [isMinNavOpen, setMinNavOpen] = useState(false);

  const authLinks = (
    <div className="authLinks">
      <span>
        <Link to="/posts">POSTS</Link>
        <Link to="/profiles">FIND FRIENDS</Link>
      </span>
      <span>
        <Link to="/dashboard">PROFILE</Link>

        <Link to="/" onClick={logout}>
          LOGOUT
        </Link>
      </span>
    </div>
  );

  const guestLinks = (
    <div className="guestLinks">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/register">REGISTER</Link>
        </li>
        <li>
          <Link to="/profiles">FIND FRIENDS</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <nav className="navbar">
        {isMinNavOpen ? (
          <img
            src={ham_close}
            className="min__nav"
            onClick={() => setMinNavOpen(!isMinNavOpen)}
          />
        ) : (
          <img
            src={ham_open}
            className="min__nav"
            onClick={() => setMinNavOpen(!isMinNavOpen)}
          />
        )}
        <span id="title">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </span>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
      {isMinNavOpen ? (
        <div className="min__nav__content">
          {isAuthenticated ? (
            <Link to="/">POSTS</Link>
          ) : (
            <Link to="/">HOME</Link>
          )}
          {isAuthenticated ? "" : <Link to="/register">REGISTER</Link>}
          <Link to="/profiles">FIND FRIENDS</Link>
          {isAuthenticated ? <Link to="/dashboard">DASHBOARD</Link> : ""}

          {isAuthenticated ? (
            <a href="#!" onClick={logout}>
              LOGOUT
            </a>
          ) : (
            ""
          )}
        </div>
      ) : null}
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
