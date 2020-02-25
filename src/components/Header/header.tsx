import React from "react";
import logo from "../../logo.svg";
import c from './header.module.css'
import {NavLink} from "react-router-dom";
import logout from "../../assets/images/logout.svg";

type Props = {
    isAuth: boolean,
    login: string | null,
    logout: () => void
}

const Header: React.FC<Props> = (props) => {
    return(
        <header className={c.header}>
            <img src={logo} alt="" className={c.logo}/>
            <div className={c.loginBlock}>
                {props.isAuth ?
                    <>
                    <span>{props.login}</span>
                    <img src={logout} alt="" onClick={()=>(props.logout())} className={c.logout}/>
                    </>
                    : <NavLink to={'/login'}>login</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;