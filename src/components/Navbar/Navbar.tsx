import React from 'react';
import classes from './navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";


const Navbar: React.FC = (props) => {
    const friends = useSelector((state: AppStateType) => (state.sidebar.friends));

    return(
        <aside className={classes.sidebar}>
            <nav className={classes.navigation}>
                <NavLink to='/profile' className={classes.item} activeClassName={classes.active}> Profile</NavLink>
                <NavLink to="/dialogs" className={classes.item} activeClassName={classes.active}>Dialogs</NavLink>
                <NavLink to="/users" className={classes.item} activeClassName={classes.active}>Users</NavLink>
            </nav>
            <Friends friends={friends}/>
        </aside>
    )
};

export default Navbar;