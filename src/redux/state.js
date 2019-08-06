// actionNames

import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const SEND_MSG = 'SEND-MSG';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MSG = 'UPDATE-NEW-MSG';

let store = {
    _subscriber(state) {
      console.log('no subscriber');
    },
    _state: {
        messagesPage: {
            dialogs: [
                {id: '1', name: 'Viktor'},
                {id: '2', name: 'Sebek'},
                {id: '3', name: 'Cotlovan'},
            ],

            messages: [
                {id: 1, message: 'Hey, how are you', type: 'input'},
                {id: 2, message: 'Hi, a\'im zbs. You?', type: 'output'},
                {
                    id: 2,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae blanditiis ' +
                        'eaque explicabo illum itaque iure laboriosam libero modi, odio quisquam quos repellendus ' +
                        'repudiandae rerum sapiente suscipit tempora tempore voluptates?',
                    type: 'output'
                },
                {id: 1, message: 'Okay, thanks for you respond', type: 'input'},

            ],
            newMessage: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: '54'},
                {id: 2, message: 'It\'s my first react app', likes: '102'},
                {id: 3, likes: '8'},
            ],
            newPostText: '',
        },
        sidebar: {
            friends : [
                {id: '2', name: 'Sebek'},
                {id: '3', name: 'Cotlovan'},
            ]
        }
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._subscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar);

        this._subscriber(this.getState());
    },
};

//action creators

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMsgActionCreator = () => ({type: SEND_MSG});

export const updateNewMsgActionCreator = (text) =>({
    type: UPDATE_NEW_MSG, newText: text
});


export default store;
window.store = store;