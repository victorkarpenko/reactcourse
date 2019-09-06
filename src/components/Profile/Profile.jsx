import React from 'react';
import c from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo userProfile={props.userProfile} userStatus={props.userStatus} updStatus={props.updStatus} />
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;