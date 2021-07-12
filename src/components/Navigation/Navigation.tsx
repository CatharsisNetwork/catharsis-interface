import React, { useState } from 'react';
import classes from './Navigation.module.scss';
import logo from './../../img/CatharsisLogo.png';
import account from '../../img/accountImg.png';
import connectWallet from '../../img/connectWallet.png';
import { ConnectWallet } from '../../UI/ConnectWallet';
import navMobile from '../../img/mobileNavBtn.png';
import { ConnectWalletAcount } from '../../UI/ConnectWalletAccount';

function Navigation() {

    const [toggle, setToggle] = useState<boolean>(false);

    function menuHandler() {
        setToggle(!toggle)
    }

    return (
        <>
            {
                toggle ?
                    <>
                        <div className={classes.mobileMainShadow}>
                        </div>
                        <div className={classes.mobileNavContainer}>
                            <div className={classes.mobileNav}>
                                <div className={classes.modileNavShadow}></div>
                                <div className={classes.mobileNavCont}>
                                    <div className={classes.mobileLogo}>
                                        <a href="#"> <img src={logo} alt="logo" /> </a>
                                    </div>
                                    <nav className={classes.nav}>
                                        <ul className={classes.navCont}>
                                            <li onClick={menuHandler}>Main</li>
                                            <li onClick={menuHandler}>Fractionalize</li>
                                            <li onClick={menuHandler}>The Limbo</li>
                                            <li onClick={menuHandler}>FAQ</li>
                                            <li onClick={menuHandler}>Farm LP</li>
                                        </ul>
                                    </nav>
                                    <div className={classes.connectWalletMobile}>
                                        <ConnectWalletAcount display={true} />
                                    </div>
                                </div>
                            </div>
                        </div> </> : null
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
                <ConnectWalletAcount display={false} />
                <div className={classes.userInfoMobile}>
                    <ConnectWallet />
                </div>
            </div>

        </>
    )
}

export default Navigation