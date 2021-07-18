import React from 'react';
import Avatar from '../../ui/Avatar/Avatar';
import Logo from '../../ui/Logo/Logo';
import Menu from '../../ui/Menu/Menu';
import Navbar from '../../ui/Navbar/Navbar';
import Wallet from '../../ui/Wallet/Wallet';
import style from './style.module.scss';

const links = [
    {label: 'Main', path: '/'},
    {label: 'Gallery', path: '/gallery'},
    {label: 'Account', path: '/account'},
    {label: 'Fractionalize', path: '/fractionalize'},
    {label: 'FAW', path: '/faw'},
    {label: 'Auction', path: '/auction'},
]


function Footer() {
    return (
        <footer className={style.footer}>
            <div className={"_container"}>
                <div className={style.content}>

                    <div className={style.footer_navbar}>
                        <Navbar customStyle={"footer"} links={links}/>
                    </div>
                    <div className={style.footer_logo}>
                        <Logo/>
                        <div className={style.footer_logo__text}>
                            <p>Fractional ownership<br/> of <span>NFTs</span></p>
                        </div>
                    </div>
                    <div className={style.footer_wallet}>
                        <Wallet customStyle={"footer"}>
                            <Avatar/>
                        </Wallet>
                        <div className={style.footer_wallet__text}>
                            <p>Terms and conditions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.copyright}>
                <span>All right reserved 2021</span>
            </div>
        </footer>
    )
}

export default Footer