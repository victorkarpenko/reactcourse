import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'socailnetwork/auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'socialnetwork/auth/SET_CAPTCHA_URL';

export type InitialStateType = typeof initialState

let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
};

//reducer
const authReducer = (state = initialState, action: any):InitialStateType => {
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

type UserDataType = {
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean | null
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: UserDataType
}

//action creator
const setAuthUserData = (email: string | null, id: number | null, login: string | null, isAuth: boolean | null):SetAuthUserDataActionType => ({
    type: SET_USER_DATA, data: {
        email,
        id,
        login,
        isAuth
    }
});

type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL,
    captchaUrl: string
}

const setCaptchaUrl = (captchaUrl: string):SetCaptchaUrlActionType =>({
    type: SET_CAPTCHA_URL, captchaUrl
});

//thunk creator
export const checkAuth = () => async (dispatch: any) => {
    const data = await authAPI.getMe();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(email, id, login, true));
    }
};

export const login = (loginData: UserDataType) => async (dispatch: any) => {
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

export const logout = () => async (dispatch: any) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptcha = () => async (dispatch:any) =>{
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.url;
    dispatch(setCaptchaUrl(captchaUrl));
};

export default authReducer;