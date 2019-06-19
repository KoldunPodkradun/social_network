import React, {Component} from 'react'
import './App.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import News from './News/News'
import {Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <div className="content">
                    <Route path="/dialogs" render={() => {
                        return (
                            <Dialogs
                            dialogsData={this.props.state.dialogsData}
                            addMessage={this.props.addMessage}
                            updateNewMessageText={this.props.updateNewMessageText}
                        />)
                    }}/>
                    <Route path="/profile" render={() => {
                        return (<Profile
                            profileData={this.props.state.profileData}
                            addPost={this.props.addPost}
                            updateNewPostText={this.props.updateNewPostText}
                        />)
                    }}/>
                    <Route path="/news" component={News}/>
                </div>
            </div>
        )
    }
}

export default App