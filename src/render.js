import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderApp = (state, addPost, updateNewPostText, updateNewMsg, sendMsg) =>{
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMsg={updateNewMsg} sendMsg={sendMsg}/>, document.getElementById('root'));
};