import React from 'react';
import classes from "./style.module.scss";
import wallet from "../../img/connectWallet.png";
import Wallet from "../Wallet/Wallet";

function FooterWallet() {
    return (
        <div className={classes.footer_content__wallet}>
            <Wallet/>
            <div className={classes.wallet_team}>
                <p>Terms and conditions</p>
            </div>

        </div>
    );
}

export default FooterWallet;