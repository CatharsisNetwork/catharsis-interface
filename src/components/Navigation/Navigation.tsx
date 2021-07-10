import React, { useState } from 'react';
import classes from './Navigation.module.scss';
import logo from './../../img/CatharsisLogo.png';
import account from '../../img/accountImg.png';
import connectWallet from '../../img/connectWallet.png';
import { ConnectWallet } from '../../UI/ConnectWallet';
import navMobile from '../../img/mobileNavBtn.png';

function Navigation() {

    const [toggle, setToggle] = useState<boolean>(false);

    function menuHandler() {
        setToggle(!toggle)
    }

    return (
        <>
            {
                toggle ? <div className={classes.mobileNav}>
                    <div className={classes.mobileNavCont}>
                        <nav className={classes.nav}>
                            <ul className={classes.navCont}>
                                <li onClick={menuHandler}>Main</li>
                                <li onClick={menuHandler}>Fract</li>
                                <li onClick={menuHandler}>Limbo</li>
                                <li onClick={menuHandler}>FAQ</li>
                                <li onClick={menuHandler}>Farm LP</li>
                            </ul>
                        </nav>
                    </div>
                </div> : null
            }

            <div className={classes.Navigation}>
                <div className={classes.navLogo}>
                    <a href="#"> <img src={logo} alt="logo" /> </a>
                    <div onClick={menuHandler} className={classes.mobileBtn}>
                        <button>
                            <img src={navMobile} alt="mobile-menu" />
                        </button>
                    </div>
                </div>
                <div className={classes.navContainer}>
                    <nav className={classes.nav}>
                        <ul className={classes.navCont}>
                            <li>Main</li>
                            <li>Fract</li>
                            <li>Limbo</li>
                            <li>FAQ</li>
                            <li>Farm LP</li>
                        </ul>
                    </nav>
                </div>

                <div className={classes.userInfo}>
                    <div className={classes.userInfoContainer}>
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
                <div className={classes.userInfoMobile}>
                    <ConnectWallet />
                </div>
            </div>

        </>
    )
}

export default Navigation