import React from 'react';
import style from "./style.module.scss";
import wallet from "../../img/connectWallet.png";

function Wallet() {
    return (
        <div className={style.wallet_link}>
            <a href={"/"}><p>Connect wallet</p> <img src={wallet} alt="wallet"/></a>
        </div>
    );
}

export default Wallet;