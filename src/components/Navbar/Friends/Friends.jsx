import React from 'react';
import c from './Friends.module.css'

const Friends = (props) => {
    const items = props.friends.map((elem) => {
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