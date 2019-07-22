import React from 'react';
import classes from './navbar.module.css';

const Navbar = () => {
    return(
        <aside className={classes.sidebar}>
            <nav className={classes.navigation}>
                <a href="/" className={`${classes.item} ${classes.active}`}>home</a>
                <a href="/order" className={classes.item}>order</a>
                <a href="/blog" className={classes.item}>blog</a>
            </nav>
        </aside>
    )
};

export default Navbar;