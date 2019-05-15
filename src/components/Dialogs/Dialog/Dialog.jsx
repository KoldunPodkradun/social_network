import React, {Component} from 'react'
import Classes from "Dialog.module.css";
import {NavLink} from "react-router-dom";

class Dialog extends Component {
    render() {
        return (
            <nav className={Classes.dialog}>
                <NavLink to="/dialogs/1" className={Classes.item} activeClassName={Classes.active}>User 1</NavLink>
                <NavLink to="/dialogs/2" className={Classes.item} activeClassName={Classes.active}>User 2</NavLink>
                <NavLink to="/dialogs/3" className={Classes.item} activeClassName={Classes.active}>User 3</NavLink>
                <NavLink to="/dialogs/4" className={Classes.item} activeClassName={Classes.active}>User 4</NavLink>
                <NavLink to="/dialogs/5" className={Classes.item} activeClassName={Classes.active}>User 5</NavLink>
            </nav>
        )
    }
}

export default Dialog