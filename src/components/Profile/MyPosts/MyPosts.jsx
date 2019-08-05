import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElems = props.posts.map(p => (<Post msg={p.message} likes={p.likes} />))

    let newPostElem = React.createRef();

    const onButtonClick = () => {
        props.dispatch({type:'ADD-POST'});
    };
    const onPostChange = () =>{
        const text = newPostElem.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
    };

    return(
        <div className={c.posts}>
           <div className={c.newPost}>
               <textarea onChange={onPostChange} ref={newPostElem} name="newPost" id="newPost" cols="30" rows="10" placeholder="Enter your post text" value={props.newPostText} className={c.textarea} />
               <button type="button" onClick={onButtonClick} className={c.button}>Add post</button>
           </div>
            <div className={c.postsList}>
                {postsElems}
            </div>
        </div>
    );
};

export default MyPosts
