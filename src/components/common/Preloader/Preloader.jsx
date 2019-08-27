import preloaderImg from '../../../assets/images/preloader.gif'
import React from 'react';
import c from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={c.preloaderContainer}>
        <img src={preloaderImg} alt="" className={c.preloader}/>
    </div>
};

export default Preloader;
