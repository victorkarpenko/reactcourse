import React from 'react';
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";



const AddPostForm = (props) => {
    return(
        <form className={c.newPost} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} placeholder="Enter your post text" name={'newPostText'} className={c.textarea}/>
            <button className={c.button}>Add post</button>
        </form>
    )
};

const ReduxAddPostForm = reduxForm({form: 'addPostForm'})(AddPostForm);

const MyPosts = (props) => {

    let postsElems = props.posts.map(p => (<Post msg={p.message} likes={p.likes} key={p.id} />))

    const onButtonClick = (data) => {
        props.addPost(data.newPostText);
    };

    return(
        <div className={c.posts}>
           <div>
              <ReduxAddPostForm onSubmit={onButtonClick}/>
           </div>
            <div className={c.postsList}>
                {postsElems}
            </div>
        </div>
    );
};

export default MyPosts
