import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    return(
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText} addPost={addPost}/>
    );
};

export default MyPostsContainer
