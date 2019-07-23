import React from 'react';
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return(
        <div className={c.dialogs}>
            <div className={c.usersList}>
                <NavLink to='/dialogs/1' className={c.user}>
                    <div className={c.avatar}>

                    </div>
                    <div className={c.userName}>
                        Viktor
                    </div>
                </NavLink>

                <NavLink to='/dialogs/2' className={c.user}>
                    <div className={c.avatar}>

                    </div>
                    <div className={c.userName}>
                        Cat Vasyl
                    </div>
                </NavLink>

                <NavLink  to='/dialogs/3' className={c.user}>
                    <div className={c.avatar}>

                    </div>
                    <div className={c.userName}>
                       Dog Sebek
                    </div>
                </NavLink>

                <NavLink  to='/dialogs/4' className={c.user}>
                    <div className={c.avatar}>

                    </div>
                    <div className={c.userName}>
                        Sergey 01k
                    </div>
                </NavLink>
            </div>
            <div className={c.dialogsList}>
                <div className={c.dialog}>
                    <div className={c.inputMsg + " " + c.msg}>Hey, how are you</div>
                    <div className={c.outputMsg + " " + c.msg}>Hi, a'im zbs. You?</div>
                    <div className={c.outputMsg + " " + c.msg}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae blanditiis eaque explicabo illum itaque iure laboriosam libero modi, odio quisquam quos repellendus repudiandae rerum sapiente suscipit tempora tempore voluptates?</div>
                    <div className={c.inputMsg + " " + c.msg}>Okay, thanks for you respond</div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;