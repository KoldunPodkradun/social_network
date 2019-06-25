import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Profile from './Profile/Profile';
import DialogsContainer from "./Dialogs/DialogsContainer";
import News from './News/News';
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className="content">
                <Route path="/dialogs" render={() => (<DialogsContainer store={props.store}/>)}/>
                <Route path="/profile" render={() => (<Profile store={props.store}/>)}/>
                <Route path="/news" component={News}/>
            </div>
        </div>
    )
};

export default App;