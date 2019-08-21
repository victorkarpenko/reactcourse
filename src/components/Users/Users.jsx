import React from 'react';
import c from './Users.module.css';
import * as axios from "axios";
import avatar from '../../assets/images/avatar.png';

let Users = (props) =>{
    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
    }

  return(
      <div className={c.users}>
          {
              props.users.map(u => <div className={c.user} key={u.id}>
                  <div className={c.user__left}>
                      <img className={c.user__avatar} src={u.photos.small !== null ? u.photos.small : avatar} alt=""/>
                      {u.followed ?  <button onClick={()=>{props.unfollow(u.id)}} className={c.user__button}>Unfollow</button> :  <button onClick={()=>{props.follow(u.id)}} className={c.user__button}>Follow</button>}
                  </div>
                  <div className={c.user__center}>
                      <div className={c.user__fullname}>{u.name}</div>
                      <div className={c.user__status}>{u.status}</div>
                  </div>
                  <div className={c.user__right}>
                      {/*u.location.country}, {u.location.city*/}
                  </div>
              </div>)
          }
      </div>
  );
};

export default Users;