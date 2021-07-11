import React from 'react';
import classes from './Footer.module.scss';
import logo from '../../img/footerLogo.png';
import wallet from '../../img/connectWallet.png';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerWrapper}>
                <div className={classes.footerContainer}>
                    <div className={classes.footerBody}>
                        <div className={classes.footerLinks}>
                            <ul>
                                <li>Main</li>
                                <li>Gallery</li>
                                <li>Account</li>
                                <li>Fractionalize</li>
                                <li>FAW</li>
                                <li>Auction</li>
                            </ul>
                        </div>
                        <div className={classes.footerLogo}>
                            <div className={classes.logoImg}>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className={classes.logoText}>
                                <p>Fractional ownership<br /> of <span>NFTs</span></p>
                            </div>
                        </div>
                        <div className={classes.connectWallet}>
                            <button> <p>Connect wallet</p> <img src={wallet} alt="wallet" /></button>
                        </div>
                    </div>
                    <div className={classes.footerTerms}>
                        <p>Terms and conditions</p>
                    </div>
                </div>
            </div>
            <div className={classes.rightsReserved}>
                <p>All right reserved 2021</p>
            </div>
        </footer>
    )
}

export default Footer