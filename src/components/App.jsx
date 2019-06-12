import React, {Component} from 'react'
import './App.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import News from './News/News'
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <Header/>
                    <Sidebar/>
                    <div className="content">
                        <Route path="/dialogs" render={() => {return (<Dialogs dialogs={this.props.dialogs} messages={this.props.messages}/>)}}/>
                        <Route path="/profile" render={() => {return (<Profile posts={this.props.posts}/>)}}/>
                        <Route path="/news" component={News}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App