import React from 'react';
import c from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import {ProfileType} from "../../types/types";

type Props = {
    userStatus: string,
    updStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (photo: string) => void,
    saveProfileData: (profileData: any) => void,
    userProfile: null| ProfileType
}

const Profile: React.FC<Props> = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    } else {
        return (
            <div className={c.profile}>
                <ProfileInfo userProfile={props.userProfile} userStatus={props.userStatus} updStatus={props.updStatus}
                             isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfileData={props.saveProfileData}/>
                <MyPostsContainer/>
            </div>
        )
    }
};

export default Profile;