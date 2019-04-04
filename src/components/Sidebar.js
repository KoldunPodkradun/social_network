import React, {Component} from 'react'
import Navbar from './Navbar'

class Sidebar extends Component {

    render() {
        return (
            <nav className="sidebar">
                <Navbar/>
            </nav>
        )
    }
}

export default Sidebar