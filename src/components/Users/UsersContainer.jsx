import React from 'react';
import {connect} from "react-redux";
import {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
    unFollow
} from "../../redux/userReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   name={this.props.name}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    };
}

// принимает state целиком
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(mapStateToProps, {
        followSuccess,
        unFollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        follow,
        unFollow
    })
)(UsersContainer);