import React from 'react';
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import avatar from '../../../assets/images/avatar.png';
import lookingIcon from '../../../assets/images/lookingJobIcon.png'
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if(!props.userProfile) {
        return <Preloader/>
    } else{
        let contactsLinks = props.userProfile.contacts;
        let contactsJSX = [];
        for (let key in contactsLinks){
            if(contactsLinks.hasOwnProperty(key) && contactsLinks[key]){
                let classes= "icon icon--" + key;
                contactsJSX.push(<a key={key} href={contactsLinks[key]} target="_blank" rel="noopener noreferrer" className={classes}>{key}</a>);
            }
        }

        return (
            <div>
                <div className={c.img}> My React App</div>
                <div className={c.userProfile}>
                    <img className={c.userProfile__avatar} src={props.userProfile.photos.large ? props.userProfile.photos.large : avatar} alt=""/>
                    <div className={c.userProfile__info}>
                        <div className={c.userProfile__fullname}>
                            {props.userProfile.fullName}
                        </div>
                        <ProfileStatusHooks updStatus={props.updStatus} userStatus={props.userStatus}/>
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