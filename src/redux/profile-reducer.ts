import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'socailnetwork/profile/ADD-POST';
const SET_USER_PROFILE = 'socailnetwork/profile/SET-USER-PROFILE';
const SET_USER_PHOTO = 'socailnetwork/profile/SET-USER-PHOTO';
const SET_USER_STATUS = 'socailnetwork/profile/SET-USER-STATUS';
const DELETE_POST = 'socailnetwork/profile/DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 54},
        {id: 2, message: 'It\'s my first react app', likes: 102},
        {id: 3, likes: 8},
    ] as Array<PostType>,
    userProfile: null as ProfileType | null,
    userStatus: '',
};

export type InitialStateType = typeof initialState;

//reducer
const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const prevID = state.posts[state.posts.length - 1].id;
            let newPost = {
                id: prevID + 1,
                message: action.newPostText,
                likes: 0
            };

            return {...state, posts: [...state.posts, newPost]};
        case SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile};
        case SET_USER_STATUS:
            return {...state, userStatus: action.userStatus};
        case SET_USER_PHOTO:
            return {...state, userProfile: {...state.userProfile, photos: action.photo} as ProfileType};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postID)};
        default:
            return state;
    }
};

type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

//action creators
export const addPostActionCreator = (newPostText: string):AddPostActionType => ({type: ADD_POST, newPostText});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    userProfile: ProfileType
}

const setUserProfile = (userProfile: ProfileType):SetUserProfileActionType => ({
    type: SET_USER_PROFILE, userProfile: userProfile
});

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    userStatus: string
}

const setUserStatus = (userStatus: string):SetUserStatusActionType => (
    {
        type: SET_USER_STATUS,
        userStatus
    }
);

type SetUserPhotoActionType = {
    type: typeof SET_USER_PHOTO,
    photo: PhotosType
}

const setUserPhoto = (photo: PhotosType):SetUserPhotoActionType => ({
    type: SET_USER_PHOTO,
    photo
});

type DeletePostActionType = {
    type: typeof DELETE_POST,
    postID: number
}

export const deletePost = (postID: number):DeletePostActionType => ({type: DELETE_POST, postID});

//thunk creator
export const getProfile = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
};

export const savePhoto = (photo: string) => async (dispatch: any) => {
    let data = await profileAPI.uploadPhoto(photo);
    if (data.resultCode === 0) {
        dispatch(setUserPhoto(data.data.photos));
    }
};

export const saveProfileData = (profileData: ProfileType) => async (dispatch: any, getState: any) => {
    let data = await profileAPI.saveProfileData(profileData);

    if (data.resultCode === 0) {
        let profileId = getState().auth.id;
        dispatch(getProfile(profileId));
    } else {
        dispatch(stopSubmit('profileForm', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0]);
    }
};

export const updStatus = (status: string) => async (dispatch: any) => {
    try {
        let data = await profileAPI.updStatus(status);

        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    } catch (e) {
        alert(e.message)
    }
};

export default profileReducer;