import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {sendMsg, subscribe, updateNewMsg} from "./redux/state";
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let renderApp = (state, addPost, updateNewPostText, updateNewMsg, sendMsg) =>{
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMsg={updateNewMsg} sendMsg={sendMsg}/>, document.getElementById('root'));
};

subscribe(renderApp);

renderApp(state, addPost, updateNewPostText, updateNewMsg, sendMsg);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

