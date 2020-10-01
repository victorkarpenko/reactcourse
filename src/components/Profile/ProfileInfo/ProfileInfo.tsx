import * as React from 'react';
import c from './ProfileInfo.module.css'
import avatar from '../../../assets/images/avatar.png';
import lookingIcon from '../../../assets/images/lookingJobIcon.png'
import {ReactComponent as PhotoIcon} from '../../../assets/images/changePhoto.svg'
import ProfileStatusHooks from "./ProfileStatusHooks";
import editBtn from "../../../assets/images/edit-button.svg"
import ProfileDataForm from "./ProfileDataForm";
import {ProfileType, ContactsType} from "../../../types/types";
import {updStatus} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";

type InfoProps = {
    isOwner: boolean,
    savePhoto: (photo: string) => void,
    saveProfileData: (profileData: any) => any,
    userProfile: ProfileType,
    userStatus: string,
}

const ProfileInfo: React.FC<InfoProps> = (props) => {
    const [editMode, setEditMode] = React.useState(false);


    const onPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData:ProfileType) => {
        props.saveProfileData(formData).then(() => {
            setEditMode(false);
        }).catch((e: any) => {
            console.log(e);
        });
    };

    const cancelEdit = () =>{
        setEditMode(false);
    };

    return (
        <div>
            <div className={c.img}> My React App</div>
            <div className={c.userProfile}>
                <div className={c.userProfile__avatarContainer}>
                    <img className={c.userProfile__avatar}
                         src={props.userProfile.photos.large ? props.userProfile.photos.large : avatar} alt=""/>
                    {props.isOwner && <label htmlFor="photoInput" className={c.userProfile__photoInput}><PhotoIcon
                        className={c.userProfile__photoicon}/><input id='photoInput' type={'file'}
                                                                     onChange={onPhotoSelected}/></label>}
                </div>

                <div className={c.userProfile__info}>
                    <ProfileStatusHooks isOwner={props.isOwner}
                                        userStatus={props.userStatus}/>

                    {editMode ? <ProfileDataForm cancelEdit={cancelEdit} userProfile={props.userProfile} initialValues={props.userProfile}
                                                 onSubmit={onSubmit}/> :
                        <ProfileData isOwner={props.isOwner} setEditMode={() => {
                            setEditMode(true)
                        }} userProfile={props.userProfile}/>}

                </div>


            </div>
        </div>
    )
};

type DataType = {
    isOwner: boolean,
    userProfile: ProfileType,
    setEditMode: ()=>void
}

const ProfileData: React.FC<DataType> = (props) => {
    return (
        <>
            {props.isOwner ?
                <button type="button" className={c.userProfile__editbtn} onClick={props.setEditMode}><img src={editBtn}
                                                                                                          alt=""/>
                </button> : null}
            <div className={c.userProfile__fullname}>
                {props.userProfile.fullname}
            </div>

            <ProfileContacts contacts={props.userProfile.contacts}/>
            {props.userProfile.lookingForAJob ? <div className={c.userProfile__jobInfo}>
                <img src={lookingIcon} alt="" className={c.userProfile__lookingIcon}/>
                {props.userProfile.lookingForAJobDescription}</div> : null}
            {props.userProfile.aboutMe ? <div className={c.userProfile__jobInfo}>
                {props.userProfile.aboutMe}</div> : null}
        </>
    );
};

type ContactsProps = {
    contacts: ContactsType
}

const ProfileContacts: React.FC<ContactsProps> = (props) => {
    const contactsLinks = props.contacts;


    const contactsJSX = Object.keys(contactsLinks).map((key) => {
        if (contactsLinks[key as keyof ContactsType]) {
            const classes = "icon icon--" + key;
            return <a key={key} href={contactsLinks[key as keyof ContactsType] as string} target="_blank" rel="noopener noreferrer"
                      className={classes}>{key}</a>
        } else return null;
    });

    return (<div className={c.userProfile__contacts}>
        {!!contactsJSX.length ?
            <div className="icons">
                {
                    contactsJSX
                }
            </div>
            : null
        }
    </div>);
};

export default ProfileInfo;