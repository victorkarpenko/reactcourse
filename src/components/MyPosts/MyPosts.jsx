import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () =>{
    return(
        <div className={c.posts}>
           <div>
               <textarea name="newPost" id="newPost" cols="30" rows="10" placeholder="Enter your post text"></textarea>
               <button type="button">Add post</button>
           </div>
            <div className={c.postsList}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts