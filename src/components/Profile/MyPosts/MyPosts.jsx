import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id:1, message: 'Hi, how are you?', likes: '54'},
        {id:2, message: 'It\'s my first react app', likes: '102'},
        {id:3, likes: '8'},
    ];

    let postsElems = postsData.map(p => (<Post msg={p.message} likes={p.likes} />))

    return(
        <div className={c.posts}>
           <div className={c.newPost}>
               <textarea name="newPost" id="newPost" cols="30" rows="10" placeholder="Enter your post text" className={c.textarea}></textarea>
               <button type="button" className={c.button}>Add post</button>
           </div>
            <div className={c.postsList}>
                {postsElems}
            </div>
        </div>
    );
};

export default MyPosts