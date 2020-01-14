import React from 'react';

class ProfileStatus extends React.Component {

    // метод создающий локальный стейт
    state = {
        editMode: false,
        status: this.props.status
    };


    // метод при помощи стрелочной функции для сохранения контекста
    // activateEditMode = () => {
    //     this.setState({
    //         editMode: false
    //     })
    // };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };


    // метод перерисовывающий еомпаненту если предыдущий статус не равен следующиму
    componentDidUpdate(prevProps, nextProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {/*.bind(this) привязывает контекст*/}
                {!this.state.editMode && <span onClick={this.activateEditMode.bind(this)}>{this.props.status}</span>}
                {this.state.editMode && <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.state.status}/>}
            </div>

        )
    }
}

export default ProfileStatus;