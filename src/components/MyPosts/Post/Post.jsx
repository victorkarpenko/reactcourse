import React from 'react';
import c from './Posts.module.css'

const Post = () => {
    return (
        <div className={c.item}>
            <div className={c.avatar}></div>
            <div className={c.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consequuntur delectus deleniti distinctio ea explicabo fuga illum laboriosam molestias nemo neque nihil, odit, quasi quia repellat repellendus sapiente temporibus!</div>
        </div>
    )
}

export default Post