import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState ={
    id: null,
    login: null,
    email: null,
    isAuth: false
};

//reducer
const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

//action creator
const setAuthUserData = (email, id, login, isAuth) =>({
    type: SET_USER_DATA, data: {
        email,
        id,
        login,
        isAuth
    }
});



//thunk creator
export const checkAuth = () => {
    return (dispatch) => {
        authAPI.getMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(email, id, login, true));
            }
        });
    }
};

export const login = (loginData) => {
    return (dispatch) => {
        authAPI.login(loginData).then(data => {
            if (data.resultCode === 0){
              dispatch(checkAuth());
            } else{
                dispatch(stopSubmit('login', {_error: data.messages[0]}))
            }
        });
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
};

export default authReducer;