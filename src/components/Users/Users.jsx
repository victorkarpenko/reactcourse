import React from 'react';
import c from './Users.module.css';

let Users = (props) =>{
    if(props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                fullName: 'Viktor K',
                avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
                status: 'Lorem ipsum lolsd fds fds fds',
                location: {
                    city: 'Kyiv',
                    country: 'Ukraine',
                },
                followed: false
            },
            {
                id: 2,
                fullName: 'Sebek K',
                avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
                status: 'Lorem ipsum lolsd fds fds fds',
                location: {
                    city: 'Minsk',
                    country: 'Belarus',
                },
                followed: false
            },
            {
                id: 3,
                fullName: 'Cotlovan K',
                avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
                status: 'Lorem ipsum lolsd fds fds fds',
                location: {
                    city: 'Kharkov',
                    country: 'Ukraine',
                },
                followed: true
            },
            {
                id: 4,
                fullName: 'Serega K',
                avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
                status: 'Lorem ipsum lolsd fds fds fds',
                location: {
                    city: 'Kyiv',
                    country: 'Ukraine',
                },
                followed: true
            },
        ]);
    }

  return(
      <div className={c.users}>
          {
              props.users.map(u => <div className={c.user} key={u.id}>
                  <div className={c.user__left}>
                      <img className={c.user__avatar} src={u.avatarUrl} alt=""/>
                      {u.followed ?  <button onClick={()=>{props.unfollow(u.id)}} className={c.user__button}>Unfollow</button> :  <button onClick={()=>{props.follow(u.id)}} className={c.user__button}>Follow</button>}
                  </div>
                  <div className={c.user__center}>
                      <div className={c.user__fullname}>{u.fullName}</div>
                      <div className={c.user__status}>{u.status}</div>
                  </div>
                  <div className={c.user__right}>
                      {u.location.country}, {u.location.city}
                  </div>
              </div>)
          }
      </div>
  );
};

export default Users;