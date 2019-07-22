import React from 'react';
import c from './profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={c.main}>
            <div className={c.img}> My React App</div>
            <div className={c.profile}>author profile</div>
            <MyPosts/>
        </main>
    )
};

export default Profile;