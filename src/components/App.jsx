import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./Header/HeaderContainer";
import Sidebar from './Sidebar/Sidebar';

import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../redux/appReducer";
import Preloader from "./Common/Preloader";
import {withSuspense} from "./hoc/WitchSuspense";

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));
const Login = React.lazy(() => import('./Login/Login'));
const News = React.lazy(() => import('./News/News'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className="content">
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/users" render={withSuspense(UsersContainer)}/>
                    <Route path="/login" render={withSuspense(Login)}/>
                    <Route path="/news" render={withSuspense(News)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
