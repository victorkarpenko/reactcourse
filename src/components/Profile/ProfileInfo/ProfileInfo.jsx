import React from 'react';
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.userProfile) {
        return <Preloader/>
    } else{
        let contactsLinks = props.userProfile.contacts;
        let contactsJSX = [];
        for (var key in contactsLinks){
            if(contactsLinks[key]){
                let classes= "icon icon--" + key;
                contactsJSX.push(<a href={contactsLinks[key]} target="_blank" rel="noopener noreferrer" className={classes}></a>);
            }
        }

        return (
            <div>
                <div className={c.img}> My React App</div>
                <div className={c.userProfile}>
                    <img src={props.userProfile.photos.large} alt=""/>
                    <div className={c.userProfile__info}>
                        <div className={c.userProfile__fullname}>
                            {props.userProfile.fullName}
                        </div>
                        <div className={c.userProfile__contacts}>
                            <div className="icons">
                                {
                                    contactsJSX
                                }
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
};

export default ProfileInfo;