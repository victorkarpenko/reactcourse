let renderApp = () =>{

};

let state = {
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
};

export const addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';

    renderApp(state, addPost, updateNewPostText, updateNewMsg, sendMsg);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderApp(state, addPost, updateNewPostText, updateNewMsg, sendMsg);
};

export const updateNewMsg = (newText) =>{
    state.messagesPage.newMessage = newText;
    renderApp(state, addPost, updateNewPostText, updateNewMsg, sendMsg);
};

export const sendMsg = () =>{
    let newMsg = {
        id: 8,
        message: state.messagesPage.newMessage,
        type: 'output'
    };

    state.messagesPage.messages.push(newMsg);
    state.messagesPage.newMessage='';

    renderApp(state, addPost, updateNewPostText, updateNewMsg, sendMsg);
};

export const subscribe = (observer) => {
    renderApp = observer;
};

export default state