import React, {Component} from 'react'

class Navbar extends Component {

    render() {
        return (
            <ul>
                <li><a href="#">Profil</a></li>
                <li><a href="#">Message</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        )
    }
}

export default Navbar