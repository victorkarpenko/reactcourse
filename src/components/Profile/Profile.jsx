import React from 'react';
import c from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    console.log(props);
    return (

        <div className={c.profile}>
            <ProfileInfo userProfile={props.userProfile} />
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;