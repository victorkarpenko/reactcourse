import {AppStateType} from "./store";

export const getUserProfile = (state: AppStateType) => {
    return state.profilePage.userProfile;
};

export const getAuthUserID = (state: AppStateType) => {
    return state.auth.id;
};

export const getUserStatus = (state: AppStateType) => {
    return  state.profilePage.userStatus;
};