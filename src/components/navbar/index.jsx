import React from 'react';

const Navbar = () => {
    return(
        <aside className="sidebar">
            <nav className="navigation">
                <a href="/">home</a>
                <a href="/order">order</a>
                <a href="/blog">blog</a>
            </nav>
        </aside>
    )
};

export default Navbar;