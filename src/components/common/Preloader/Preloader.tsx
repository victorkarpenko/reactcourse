import preloaderImg from '../../../assets/images/preloader.gif'
import React from 'react';
import c from './Preloader.module.css'

const Preloader = () => {
    return <div className={c.preloaderContainer}>
        <img src={preloaderImg} alt="" className={c.preloader}/>
    </div>
};

export default Preloader;
