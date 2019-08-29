import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: '54'},
        {id: 2, message: 'It\'s my first react app', likes: '102'},
        {id: 3, likes: '8'},
    ],
    newPostText: '',
    userProfile: null
};

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
        default:  return state;
    }
};

//action creators

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE, userProfile: userProfile
});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
};

export default profileReducer;