import React from 'react';
import c from './profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )
};

export default Profile;