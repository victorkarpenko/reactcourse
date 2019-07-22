import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () =>{
    return(
        <div className={c.posts}>
           {/*<div>v
               <textarea name="newPost" id="newPost" cols="30" rows="10" placeholder="Enter your post text"></textarea>
               <button type="button">Add post</button>
           </div>*/}
            <div className={c.postsList}>
                <Post msg="Hi, how are you?" likes="54" />
                <Post msg="It's my first react app" likes="102" />
                <Post likes="8" />
            </div>
        </div>
    );
};

export default MyPosts