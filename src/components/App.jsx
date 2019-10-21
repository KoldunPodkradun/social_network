import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import HeaderContainer from "./Header/HeaderContainer";
import Sidebar from './Sidebar/Sidebar';
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import News from './News/News';

const App = (props) => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Sidebar/>
            <div className="content">
                <Route path="/dialogs" render={() => (<DialogsContainer store={props.store}/>)}/>
                <Route path="/profile/:userId?" render={() => (<ProfileContainer store={props.store}/>)}/>
                <Route path="/users" render={() => (<UsersContainer/>)}/>
                <Route path="/news" component={News}/>
            </div>
        </div>
    )
};

export default App;