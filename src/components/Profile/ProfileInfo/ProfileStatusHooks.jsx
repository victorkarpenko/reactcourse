import React, { useState } from 'react';
import c from './ProfileInfo.module.css'

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.userStatus);

    const changeEditMode = () => {
        if(editMode===true){
            props.updStatus(status)
        }
        setEditMode(!editMode);
    };

    const changeUserStatus = (e)=> {
        let newStatus= e.target.value;
        setStatus(newStatus);
    };

    debugger;
        return (
            <div>
                {!editMode ?
                    <div className={c.userProfile__status} onDoubleClick={changeEditMode}>
                        <span>
                            {props.userStatus ? props.userStatus : 'Double click to change status'}
                        </span>
                    </div>
                    :
                    <div className={c.userProfile__status}>
                        <input value={status} autoFocus={true} onChange={changeUserStatus} onBlur={changeEditMode}/>
                    </div>
                }
            </div>
        );
};


export default ProfileStatusHooks;