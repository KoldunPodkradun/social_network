import React, {Component} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Profile from './Profile'

class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Sidebar/>
                <Profile/>
            </div>
        )
    }
}

export default App