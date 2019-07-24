import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElems = props.posts.map(p => (<Post msg={p.message} likes={p.likes} />))

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