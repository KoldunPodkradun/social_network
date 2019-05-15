import React, {Component} from 'react'
import Dialog from './Dialog/Dialog'
import Classes from './Dialogs.module.css'

class Dialogs extends Component {
    render() {
        return (
            <div className={Classes.dialogs}>
                <Dialog/>
                <div className={Classes.messages}>
                    <div className={Classes.message}>message 1</div>
                    <div className={Classes.message}>message 2</div>
                    <div className={Classes.message}>message 3</div>
                    <div className={Classes.message}>message 4</div>
                </div>
            </div>
        )
    }
}

export default Dialogs