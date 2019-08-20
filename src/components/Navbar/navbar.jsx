import React from 'react';
import classes from './navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return(
        <aside className={classes.sidebar}>
            <nav className={classes.navigation}>
                <NavLink to='/profile' className={classes.item} activeClassName={classes.active}> Profile</NavLink>
                <NavLink to="/dialogs" className={classes.item} activeClassName={classes.active}>Dialogs</NavLink>
                <NavLink to="/settings" className={classes.item} activeClassName={classes.active}>Settings</NavLink>
                <NavLink to="/users" className={classes.item} activeClassName={classes.active}>Users</NavLink>
            </nav>
            <Friends friends={props.sidebar.friends}/>
        </aside>
    )
};

export default Navbar;