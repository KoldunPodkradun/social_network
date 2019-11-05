import {authAPI} from "../api/api";


const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
    usersId: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

// Action Creator

export const setAuthUserData = (usersId, login, email) => ({type: SET_USERS_DATA, data: {usersId, login, email}});

// Thunk

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
};

export default authReducer;