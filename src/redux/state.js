import {renderApp} from "../render";

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
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likes: '54'},
            {id: 2, message: 'It\'s my first react app', likes: '102'},
            {id: 3, likes: '8'},
        ],
    },
    sidebar: {
        friends : [
            {id: '2', name: 'Sebek'},
            {id: '3', name: 'Cotlovan'},
        ]
    }
};

export let addPost = (text) =>{
    let newPost = {
        id: 5,
        message: text,
        likes: 0
    };

    state.profilePage.posts.push(newPost);

    renderApp(state, addPost);
};

export default state