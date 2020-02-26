import React from 'react';
import c from './Posts.module.css'

type Props = {
    msg: string,
    likes: number
}

const Post: React.FC<Props> = (props) => {
    return (
        <div className={c.item}>
            <div className={c.avatar}/>
            <div className={c.text}>{props.msg ? props.msg : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consequuntur delectus deleniti"}</div>
            <div className={c.likes}> {props.likes}</div>
        </div>
    )
}

export default Post