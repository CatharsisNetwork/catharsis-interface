import React from 'react';
import style from './style.module.scss';
import Logo from "../../ui/Logo/Logo";
import Wallet from "../../ui/Wallet/Wallet";
import {Link} from "react-router-dom";
import avatar from "../../../assets/image/header/avatar.png";
import Navbar from "../../ui/Navbar/Navbar";
import {useCloseModalContext} from "../../../hooks/useCloseModalContext";
import {links} from '../../../assets/config/header/data';


function HeaderModal() {
    const onClose = useCloseModalContext()
    return (
        <div className={style.modal} >
            <div className={style.modal_logo}>
                <Logo/>
            </div>
            <div className={style.modal_navbar}>
                <Navbar customStyle={"modal"} onClose={onClose} links={links}/>
            </div>
            <div className={style.modal_wallet}>
                <Wallet customStyle={"modal"}>
                    <Link to={"/"}>
                        <img src={avatar} alt="avatar"/>
                        <p>Account</p>
                    </Link>
                </Wallet>
            </div>
        </div>
    );
}

export default HeaderModal;