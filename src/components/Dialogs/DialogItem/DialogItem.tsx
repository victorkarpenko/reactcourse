import React from 'react';
import {NavLink} from "react-router-dom";
import c from './DialogItem.module.css'

type Props = {
    id: number,
    name: string
}

const DialogItem : React.FC<Props> = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <NavLink to={path} className={c.user}>
            <div className={c.avatar}>

            </div>
            <div className={c.userName}>
                {props.name}
            </div>
        </NavLink>
    )
};

export default DialogItem;