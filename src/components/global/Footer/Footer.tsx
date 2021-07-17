import React from 'react';
import classes from './style.module.scss';
import FooterLinks from "./FooterLinks";
import FooterWallet from "./FooterWallet";
import FooterLogo from "./FooterLogo";
import Wallet from "../../ui/Wallet/Wallet";


function Footer() {
    return (
        <footer className={classes.footer}>
            <div className="_container">
                <div className={classes.footer_content}>
                    <FooterLinks/>
                    <FooterLogo/>
                </div>
            </div>
            <div className={classes.footer_copyright}/>
        </footer>
    )
}

export default Footer