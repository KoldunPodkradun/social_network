import React from 'react';
import {connect} from "react-redux";
import {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
    follow,
    unFollow
} from "../../redux/userReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {pageSize, currentPage} = this.props;
        this.props.getUsers(pageSize, currentPage);
    };

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
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

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        followSuccess,
        unFollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers,
        follow,
        unFollow
    })
)(UsersContainer);