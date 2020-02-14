import React from 'react';
import c from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

export const User = (props) => {
    return (
    <div className={c.user} >
        <div className={c.user__left}>
            <NavLink to={'/profile/' + props.user.id}>
                <img className={c.user__avatar} src={props.user.photos.small !== null ? props.user.photos.small : avatar} alt=""/>
            </NavLink>
            {
                props.user.followed ?
                    <button disabled={props.followingInProgress.some(id => id===props.user.id)}
                            onClick={()=>{props.unfollow(props.user.id);}} className={c.user__button}>Unfollow</button>
                    :
                    <button disabled={props.followingInProgress.some(id => id===props.user.id)}
                            onClick={()=>{props.follow(props.user.id)}} className={c.user__button}>Follow</button>
            }
        </div>
        <div className={c.user__center}>
            <div className={c.user__fullname}>{props.user.name}</div>
            <div className={c.user__status}>{props.user.status}</div>
        </div>
        <div className={c.user__right}>
        </div>
    </div>
    )
}