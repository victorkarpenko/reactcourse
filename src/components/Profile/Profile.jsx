import React from 'react';
import c from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    } else {
        return (
            <div className={c.profile}>
                <ProfileInfo userProfile={props.userProfile} userStatus={props.userStatus} updStatus={props.updStatus}
                             isOwner={props.isOwner} savePhoto={props.savePhoto}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

export default Profile;