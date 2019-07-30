import React from 'react';
import c from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} newPostText={props.state.newPostText} posts={props.state.posts} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
};

export default Profile;