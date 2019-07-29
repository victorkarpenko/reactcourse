import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderApp = (state, addPost) =>{
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
};