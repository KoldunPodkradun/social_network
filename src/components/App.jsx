import React, {Component} from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'

class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <Profile/>
                <Dialogs/>
            </div>
        )
    }
}

export default App