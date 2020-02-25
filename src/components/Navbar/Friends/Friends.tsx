import React from 'react';
import c from './Friends.module.css'
import {FriendType} from "../../../types/types";

type Props = {
    friends: Array<FriendType>
}

const Friends: React.FC<Props> = (props) => {
    const items = props.friends.map((elem: FriendType) => {
        return(
            <div className={c.user} key={elem.id}>
                <div className={c.avatar}>

                </div>
                <div className={c.userName}>
                    {elem.name}
                </div>
            </div>
        )
    });
    return (
        <div className={c.friends}>
            <h3>My react friends </h3>
            {items}
        </div>
    )
};

export default Friends