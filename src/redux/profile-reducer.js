import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'socailnetwork/profile/ADD-POST';
const SET_USER_PROFILE = 'socailnetwork/profile/SET-USER-PROFILE';
const SET_USER_PHOTO = 'socailnetwork/profile/SET-USER-PHOTO';
const SET_USER_STATUS = 'socailnetwork/profile/SET-USER-STATUS';
const DELETE_POST = 'socailnetwork/profile/DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: '54'},
        {id: 2, message: 'It\'s my first react app', likes: '102'},
        {id: 3, likes: '8'},
    ],
    userProfile: null,
    userStatus: '',
};

//reducer
const profileReducer = (state = initialState, action) => {
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
            return {...state, userProfile:{...state.userProfile, photos: action.photo}};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postID)};
        default:
            return state;
    }
};

//action creators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE, userProfile: userProfile
});

const setUserStatus = (userStatus) => (
    {
        type: SET_USER_STATUS,
        userStatus
    }
);

const setUserPhoto = (photo) => ({
    type: SET_USER_PHOTO,
    photo
});

export const deletePost = (postID) => ({type: DELETE_POST, postID});

//thunk creator
export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
};

export const savePhoto = (photo) => async (dispatch) => {
    let data = await profileAPI.uploadPhoto(photo);
    if(data.resultCode === 0){
        dispatch(setUserPhoto(data.data.photos));
    }
};

export const saveProfileData = (profileData) => async (dispatch, getState) => {
    let data = await profileAPI.saveProfileData(profileData);

    if(data.resultCode === 0){
        let profileId = getState().auth.id;
        dispatch(getProfile(profileId));
    } else{
        dispatch(stopSubmit('profileForm', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0]);
    }
};

export const updStatus = (status) => async (dispatch) => {
    try{
        let data = await profileAPI.updStatus(status);
    
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    } catch (e) {
       alert(e.message)
    }
};

export default profileReducer;