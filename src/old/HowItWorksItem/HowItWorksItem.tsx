import React, {Fragment} from 'react'
import classes from './HowItWorksItem.module.scss';
import lock from '../img/lock.png';
import {HowWorksTypes} from '../../assets/config';


function HowItWorksItem({img, title, text, color}:HowWorksTypes){
    return (
        <>
        <div className={classes.HowItWorks}>
            <div className={classes.HowItWorksImage}>
                <img src={require(`../img/${img}.png`).default} alt="img" />
            </div>
            <div className={classes.HowItWorksTitle}>
                <h3 style={{color: color}}>{title}</h3>
            </div>
            <div className={classes.HowItWorksText}>
                <p>
                    <>
                        {text}
                    </>
                </p>
            </div>
        </div>
        </>
    )
}  

export default HowItWorksItem