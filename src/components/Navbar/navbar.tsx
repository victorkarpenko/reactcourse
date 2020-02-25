import React from 'react';
import classes from './navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {FriendType} from "../../types/types";

type Props = {
    friends: Array<FriendType>
}

const Navbar: React.FC<Props> = (props) => {
    return(
        <aside className={classes.sidebar}>
            <nav className={classes.navigation}>
                <NavLink to='/profile' className={classes.item} activeClassName={classes.active}> Profile</NavLink>
                <NavLink to="/dialogs" className={classes.item} activeClassName={classes.active}>Dialogs</NavLink>
                <NavLink to="/users" className={classes.item} activeClassName={classes.active}>Users</NavLink>
            </nav>
            <Friends friends={props.friends}/>
        </aside>
    )
};

export default Navbar;