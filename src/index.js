import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = {
    dialogsData: [
        {id: '1', name: 'Viktor'},
        {id: '2', name: 'Sebek'},
        {id: '3', name: 'Cotlovan'},
    ],
    messagesData: [
        {id:1, message: 'Hey, how are you', type: 'input'},
        {id:2, message: 'Hi, a\'im zbs. You?', type: 'output'},
        {id:2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae blanditiis eaque explicabo illum itaque iure laboriosam libero modi, odio quisquam quos repellendus repudiandae rerum sapiente suscipit tempora tempore voluptates?', type: 'output'},
        {id:1, message: 'Okay, thanks for you respond', type: 'input'},
    ]
};

let posts = [
    {id:1, message: 'Hi, how are you?', likes: '54'},
    {id:2, message: 'It\'s my first react app', likes: '102'},
    {id:3, likes: '8'},
];

ReactDOM.render(<App posts={posts} dialogs={dialogs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
