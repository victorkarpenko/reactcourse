import React from 'react';
import c from './profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={c.profile}>
            <div className={c.img}> My React App</div>
            <MyPosts/>
        </div>
    )
};

export default Profile;