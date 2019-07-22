import React from "react";
import logo from "../../logo.svg";
import c from './header.module.css'

const Header = () => {
    return(
        <header className={c.header}>
            <img src={logo} alt="" className={c.logo}/>
        </header>
    )
};

export default Header;