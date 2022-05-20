import React, { Component } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { connect } from 'react-redux'
import { logoutSuccess } from '../redux/authActions'
class TopBar extends Component {

  render() {
    const { t, username, isLoggedIn, onLogoutSuccess } = this.props;
    let links = (
      <ul className="navbar-nav ml-auto">
        <li>
          <Link className="nav-link" to="/login">
            {t("Login")}
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/signup">
            {t("Sign Up")}
          </Link>
        </li>
      </ul>
    );
    if (isLoggedIn) {
      links = (
        <ul className="navbar-nav ml-auto">
          <li>
            <Link className="nav-link" to={"/user/" + username}>
              {username}
            </Link>
          </li>
          <Link className="nav-link" to={"/"} onClick={onLogoutSuccess}>{t("Logout")}</Link>
        </ul>
      );
    }

    return (
      <div className="shadow-sm bg-light mb-2">
        <nav className="navbar navbar-light container navbar-expand">
          <Link className="navbar-brand " to="/">
            <img src={logo} width="40" alt="atp logo" />
            Randevu Sistemi
          </Link>
          {links}
        </nav>
      </div>
    );
  }
}
const TopBarWithTranslation = withTranslation()(TopBar);

const mapStateToProps = (store) => {
  return {
    isLoggedIn: store.isLoggedIn,
    username: store.username
  }
};

const mapDispathToProps = dispatch => {
  return {
    onLogoutSuccess: () => {
      return dispatch(logoutSuccess())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(TopBarWithTranslation);
