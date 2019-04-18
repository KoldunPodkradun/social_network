import React, {Component} from 'react'
import Classes from './Sidebar.module.css'

class Sidebar extends Component {

    render() {
        return (
            <nav className={Classes.sidebar}>
                <ul>
                    <li className={Classes.item}><a href="#">Profil</a></li>
                    <li className={Classes.item}><a href="#">Message</a></li>
                    <li className={Classes.item}><a href="#">News</a></li>
                    <li className={Classes.item}><a href="#">Music</a></li>
                    <li className={Classes.item}><a href="#">Settings</a></li>
                </ul>
            </nav>
        )
    }
}

export default Sidebar