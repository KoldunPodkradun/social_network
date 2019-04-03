import React, {Component} from 'react'

class Sidebar extends Component {

    render() {
        return (
            <nav className="sidebar">
                <ul>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Message</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        )
    }
}

export default Sidebar