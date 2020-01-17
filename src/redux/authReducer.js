import {authAPI} from "../api/api";

const SET_USERS_DATA = 'SET_USERS_DATA';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

// Action Creator

export const setAuthUserData = (usersId, email, login, isAuth) => ({type: SET_USERS_DATA, payload: {usersId, email, login, isAuth}});

// Thunk

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        });
};


export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;