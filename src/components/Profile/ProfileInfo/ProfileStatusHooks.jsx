import React, { useState, useEffect } from 'react';
import c from './ProfileInfo.module.css'

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.userStatus);

    useEffect(() => {
        setStatus(props.userStatus)
    },[props.userStatus]);

    const activateEditMode = () => {
        setEditMode(!editMode);
    };

    const deactivateEditMode = (e) => {
        if(props.userStatus !== status){
            props.updStatus(status);
        }
        setEditMode(!editMode);
    };

    const changeUserStatus = (e)=> {
        let newStatus= e.target.value;
        setStatus(newStatus);
    };

    return (
        <div>
            {!editMode ?
                <div className={c.userProfile__status} onDoubleClick={activateEditMode}>
                    <span>
                        {props.userStatus ? props.userStatus : 'Double click to change status'}
                    </span>
                </div>
                :
                <div className={c.userProfile__status}>
                    <input value={status} autoFocus={true} onChange={changeUserStatus} onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    );
};


export default ProfileStatusHooks;