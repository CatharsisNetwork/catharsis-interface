import React from 'react';
import { Link } from 'react-router-dom';
import {links} from '../../../assets/database/footer/data';
import Avatar from '../../ui/Avatar/Avatar';
import Logo from '../../ui/Logo/Logo';
import Navbar from '../../ui/Navbar/Navbar';
import Wallet from '../../ui/Wallet/Wallet';
import style from './style.module.scss';


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
                            <Link to={"/"}>
                                Terms and conditions
                            </Link>

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