const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,

    // users локальные
    // users: [
    //     {
    //         id: 'user_id_1',
    //         avatar: "https://cs8.pikabu.ru/post_img/big/2016/07/04/10/146764992311896341.jpg",
    //         followed: false,
    //         fullName: 'fullName_1',
    //         status: 'status_1',
    //         location: {
    //             city: 'city_1',
    //             country: 'town_1'
    //         }
    //     },
    //     {
    //         id: 'user_id_2',
    //         avatar: "https://cs8.pikabu.ru/post_img/big/2016/07/04/10/146764992311896341.jpg",
    //         followed: true,
    //         fullName: 'fullName_2',
    //         status: 'status_2',
    //         location: {
    //             city: 'city_2',
    //             country: 'town_2'
    //         }
    //     }
    // ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

// Action Creator

export const setUsers = (users) => ({type: SET_USERS, users});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;