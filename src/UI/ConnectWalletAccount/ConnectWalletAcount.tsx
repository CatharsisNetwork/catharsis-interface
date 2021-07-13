import React from 'react'
import classes from './ConnectWalletAcount.module.scss'
import account from '../../img/accountImg.png'
import connectWallet from '../../img/connectWallet.png'

function ConnectWalletAcount(props:any){
    return (
        <div style={props.display ? {display: "block", width: "309px"} : {}} className={classes.userInfo}>
        <div  className={classes.userInfoContainer}>
            <div className={classes.userAccount}>
                <button> <img src={account} alt="#" /> <p>Account</p></button>
            </div>
            <div className={classes.line}>

            </div>
            <div className={classes.connectWallet}>
                <button> <p>Connect wallet </p> <img src={connectWallet} alt="account" /> </button>
            </div>
        </div>
    </div>
    )
} 

export default ConnectWalletAcount