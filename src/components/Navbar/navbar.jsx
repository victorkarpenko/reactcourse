import React from 'react';
import classes from './navbar.module.css';

const Navbar = () => {
    return(
        <aside className={classes.sidebar}>
            <nav className={classes.navigation}>
                <a href="/profile" className={`${classes.item} ${classes.active}`}>Profile</a>
                <a href="/dialogs" className={classes.item}>Dialogs</a>
                <a href="/settings" className={classes.item}>Settings</a>
            </nav>
        </aside>
    )
};

export default Navbar;