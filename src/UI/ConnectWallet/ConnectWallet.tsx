import React from 'react';
import classes from './ConnectWallet.module.scss';
import wallet from '../../img/connectWallet.png';

function ConnectWallet(){
    return (
        <div className={classes.connectWallet}>
            <button> <p>Connect wallet</p> <img src={wallet} alt="wallet" /></button>
        </div>
    )
}

export default ConnectWallet