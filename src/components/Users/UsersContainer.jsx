import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../redux/userReducer";


// принимает state целиком
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

// передает callback функции которые призентационная компонента может вызывать
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);