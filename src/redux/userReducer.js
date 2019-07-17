const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: []
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
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
};

export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unFollowActionCreator = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;