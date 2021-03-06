import React, { Component } from 'react';
import UserSignupPage from '../pages/UserSignupPage';
import LanguageSelector from '../components/LanguageSelector';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { connect } from 'react-redux'
class App extends Component {
    render() {
        const { isLoggedIn } = this.props;
        return (
            <div>
                <Router>
                    <TopBar></TopBar>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        {!isLoggedIn && <Route path="/login" component={LoginPage} />}
                        <Route path="/signup" component={UserSignupPage} />
                        <Route path="/user/:username" component={UserPage} />
                        <Redirect to="/" />
                    </Switch>
                </Router>

                <LanguageSelector></LanguageSelector>
            </div>
        );
    }

}

const mapStateToProps = (store) => {
    return {
        isLoggedIn: store.isLoggedIn
    }
};

export default connect(mapStateToProps)(App);