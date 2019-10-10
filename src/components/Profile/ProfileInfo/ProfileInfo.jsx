import * as React from 'react';
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import avatar from '../../../assets/images/avatar.png';
import lookingIcon from '../../../assets/images/lookingJobIcon.png'
import {ReactComponent as PhotoIcon} from '../../../assets/images/changePhoto.svg'
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if(!props.userProfile) {
        return <Preloader/>
    }
    else{
        let contactsLinks = props.userProfile.contacts;
        let contactsJSX = [];
        for (let key in contactsLinks){
            if(contactsLinks.hasOwnProperty(key) && contactsLinks[key]){
                let classes= "icon icon--" + key;
                contactsJSX.push(<a key={key} href={contactsLinks[key]} target="_blank" rel="noopener noreferrer" className={classes}>{key}</a>);
            }
        }

        const onPhotoSelected = (e) => {
            if(e.target.files.length){
                props.savePhoto(e.target.files[0]);
            }
        };

        return (
            <div>
                <div className={c.img}> My React App</div>
                <div className={c.userProfile}>
                        <div className={c.userProfile__avatarContainer}>
                        <img className={c.userProfile__avatar} src={props.userProfile.photos.large ? props.userProfile.photos.large : avatar} alt=""/>
                            {props.isOwner && <label htmlFor="photoInput" className={c.userProfile__photoInput}><PhotoIcon className={c.userProfile__photoicon}/><input id='photoInput' type={'file'} onChange={onPhotoSelected}/></label>}
                        </div>


                    <div className={c.userProfile__info}>
                        <div className={c.userProfile__fullname}>
                            {props.userProfile.fullName}
                        </div>
                        <ProfileStatusHooks isOwner={props.isOwner} updStatus={props.updStatus} userStatus={props.userStatus}/>
                        <div className={c.userProfile__contacts}>
                            {!!contactsJSX.length ?
                                <div className="icons">
                                    {
                                        contactsJSX
                                    }
                                </div>
                                : null
                            }
                        </div>
                        {props.userProfile.lookingForAJob ? <div className={c.userProfile__jobInfo}>
                            <img src={lookingIcon} alt="" className={c.userProfile__lookingIcon}/>
                            {props.userProfile.lookingForAJobDescription}</div> : null}
                    </div>
                </div>
            </div>
        )
    }
};

export default ProfileInfo;