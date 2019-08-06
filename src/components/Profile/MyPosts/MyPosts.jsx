import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElems = props.posts.map(p => (<Post msg={p.message} likes={p.likes} />))

    const onButtonClick = () => {
        props.dispatch(addPostActionCreator());
    };
    const onPostChange = (e) =>{
        const text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return(
        <div className={c.posts}>
           <div className={c.newPost}>
               <textarea onChange={onPostChange} placeholder="Enter your post text" value={props.newPostText} className={c.textarea} />
               <button type="button" onClick={onButtonClick} className={c.button}>Add post</button>
           </div>
            <div className={c.postsList}>
                {postsElems}
            </div>
        </div>
    );
};

export default MyPosts
