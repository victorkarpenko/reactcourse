import React, {useState, useEffect, ChangeEvent} from 'react';
import c from './ProfileInfo.module.css'
import {useDispatch} from "react-redux";
import {updStatus} from "../../../redux/profile-reducer";

type PropsType = {
    userStatus: string,
    isOwner: boolean
}

const ProfileStatusHooks: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);

    const [status, setStatus] = useState(props.userStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        setStatus(props.userStatus)
    },[props.userStatus]);

    const activateEditMode = () => {
        setEditMode(!editMode);
    };

    const deactivateEditMode = () => {
        if(props.userStatus !== status){
            dispatch(updStatus(status));
        }
        setEditMode(!editMode);
    };

    const changeUserStatus = (e: ChangeEvent<HTMLInputElement>)=> {
        const newStatus= e.target.value;
        setStatus(newStatus);
    };

    return (
        <div>
            {(editMode && props.isOwner) ?
                <div className={c.userProfile__status}>
                    <input value={status} autoFocus={true} onChange={changeUserStatus} onBlur={deactivateEditMode}/>
                </div>
                :
                <div className={c.userProfile__status} onDoubleClick={activateEditMode}>
                    <span>
                        {props.isOwner &&  !props.userStatus ? 'Double click to change status' : props.userStatus}
                    </span>
                </div>

            }
        </div>
    );
};


export default ProfileStatusHooks;