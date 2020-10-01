import React, {useEffect, useRef} from 'react';
import c from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import {ProfileType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserID, getUserProfile, getUserStatus} from "../../redux/profile-selectors";
import {getProfile, getStatus, savePhoto, saveProfileData} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";

type Props = {
    match:  any
    history: any
}

const Profile: React.FC<Props> = (props) => {
    const userProfile = useSelector(getUserProfile);
    const userStatus = useSelector(getUserStatus);
    const authUserID = useSelector(getAuthUserID);
    const isOwner = !props.match.params.userId;

    const dispatch = useDispatch();

    const refreshProfile = () => {
        const userId = props.match.params.userId ? props.match.params.userId : authUserID;
        if (userId) {
            dispatch(getProfile(userId));
            dispatch(getStatus(userId));
        } else {
            props.history.push('/login');
        }
    };

    const mounted: any = useRef();

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            refreshProfile();
        }
    }, [props.match.params.userId]);

    useEffect(refreshProfile, []);

    const onSavePhoto = (photo: string) => {
        dispatch(savePhoto(photo))
    };


    const onSaveProfile = (profileData: ProfileType) => (
        dispatch(saveProfileData(profileData))
    );

    if (!userProfile) {
        return <Preloader/>
    } else {
        return (
            <div className={c.profile}>
                <ProfileInfo userProfile={userProfile} userStatus={userStatus}
                             isOwner={isOwner} savePhoto={onSavePhoto} saveProfileData={onSaveProfile}/>
                <MyPostsContainer/>
            </div>
        )
    }
};

export default compose(
    withRouter,
)(Profile)