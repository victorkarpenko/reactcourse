import React from "react";
import logo from "../../logo.svg";
import c from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={c.header}>
            <img src={logo} alt="" className={c.logo}/>
            <div className={c.loginBlock}>
                {props.isAuth ? <span>{props.login}</span> :
                                <NavLink to={'/login'}>login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;