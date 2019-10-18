import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'socailnetwork/auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'socialnetwork/auth/SET_CAPTCHA_URL';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
};

//reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_CAPTCHA_URL:
            return {
                ...state, captchaUrl: action.captchaUrl
            };
        default:
            return state;
    }
};

//action creator
const setAuthUserData = (email, id, login, isAuth) => ({
    type: SET_USER_DATA, data: {
        email,
        id,
        login,
        isAuth
    }
});

const setCaptchaUrl = (captchaUrl) =>({
    type: SET_CAPTCHA_URL, captchaUrl
});

//thunk creator
export const checkAuth = () => async (dispatch) => {
    const data = await authAPI.getMe();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(email, id, login, true));
    }
};

export const login = (loginData) => async (dispatch) => {
    const data = await authAPI.login(loginData);
    if (data.resultCode === 0) {
        dispatch(checkAuth());
    }
    else{
        if(data.resultCode === 10) {
            dispatch(getCaptcha());
        }

        dispatch(stopSubmit('login', {_error: data.messages[0]}))
    }
};

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptcha = () => async (dispatch) =>{
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.url;
    dispatch(setCaptchaUrl(captchaUrl));
};

export default authReducer;