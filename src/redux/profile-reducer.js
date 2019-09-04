import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: '54'},
        {id: 2, message: 'It\'s my first react app', likes: '102'},
        {id: 3, likes: '8'},
    ],
    newPostText: '',
    userProfile: null,
    userStatus: ''
};

//reducer
const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            const prevID = state.posts[state.posts.length - 1].id;
            let newPost = {
                id: prevID+1,
                message: state.newPostText,
                likes: 0
            };

            let newState = {...state};

            if(!!state.newPostText){
                newState = {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }
            return newState;
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile};
        case SET_USER_STATUS:
            return {...state, userStatus: action.userStatus};
        default:  return state;
    }
};

//action creators

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE, userProfile: userProfile
});

const setUserStatus = (userStatus) => (
    {
        type: SET_USER_STATUS,
        userStatus
    }
);

//thunk creator
export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        })
    }
};

export const updStatus = (status) =>{
    return (dispatch) =>{
        profileAPI.updStatus(status).then(data => {
            if(data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
    }
};

export default profileReducer;