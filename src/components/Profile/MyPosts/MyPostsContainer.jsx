import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    const updateNewPostText = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    };

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    return <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText} addPost={addPost}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer
