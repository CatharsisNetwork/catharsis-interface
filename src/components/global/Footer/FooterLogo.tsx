import React from 'react';
import classes from './style.module.scss';
import logo from "../../../old/img/footerLogo.png";

function FooterLogo() {
    return (
        <div className={classes.footer_content__logo}>
            <img src={logo} alt="logo"/>
            <div className={classes.logo_text}>
                <p>Fractional ownership<br/> of <span>NFTs</span></p>
            </div>
            <span>All right reserved 2021</span>
        </div>
    );
}

export default FooterLogo;