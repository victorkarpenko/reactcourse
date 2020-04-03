import {authAPI, securityAPI, ResultsCodeEnum, ResultsCodeCaptcha} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {UserDataType} from "../types/types";

import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {LoginDataType} from "../components/common/FormsControls/FormFields";


const SET_USER_DATA = 'socailnetwork/auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'socialnetwork/auth/SET_CAPTCHA_URL';

let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState

//reducer
const authReducer = (state = initialState, action: ActionsType):InitialStateType => {
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

type ActionsType = SetAuthUserDataActionType | SetCaptchaUrlActionType;

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: UserDataType
}

//action creator
const setAuthUserData = (email: string | null, id: number | null, login: string | null, isAuth: boolean):SetAuthUserDataActionType => ({
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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

type ThunkFormType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType | FormAction>

//thunk creator
export const checkAuth = (): ThunkType => async (dispatch) => {
    const data = await authAPI.getMe();
    if (data.resultCode === ResultsCodeEnum.Success) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(email, id, login, true));
    }
};

export const login = (loginData: LoginDataType): ThunkFormType => async (dispatch) => {
    const data = await authAPI.login(loginData);
    if (data.resultCode === ResultsCodeEnum.Success) {
        dispatch(checkAuth());
    }
    else{
        if(data.resultCode === ResultsCodeCaptcha.CaptchaIsRequired) {
            dispatch(getCaptcha());
        }
        dispatch(stopSubmit('login', {_error: data.messages[0]}))
    }
};

export const logout = ():ThunkType => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptcha = ():ThunkType => async (dispatch) =>{
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.url;
    dispatch(setCaptchaUrl(captchaUrl));
};

export default authReducer;