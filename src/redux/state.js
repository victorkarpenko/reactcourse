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
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';

        this._subscriber(this.getState());
    },
    sendMsg(){
        let newMsg = {
            id: 8,
            message: this._state.messagesPage.newMessage,
            type: 'output'
        };

        this._state.messagesPage.messages.push(newMsg);
        this._state.messagesPage.newMessage='';

        this._subscriber(this.getState());
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._subscriber(this.getState());
    },
    updateNewMsg(newText){
        this._state.messagesPage.newMessage = newText;
        this._subscriber(this.getState());
    }
};

export default store;
window.store = store;