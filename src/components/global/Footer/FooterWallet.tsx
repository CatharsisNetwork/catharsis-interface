import React from 'react';
import classes from "./style.module.scss";
import wallet from "../../../old/img/connectWallet.png";
import Wallet from "../../ui/Wallet/Wallet";

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