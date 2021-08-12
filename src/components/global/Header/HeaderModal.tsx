import React from 'react';
import style from './style.module.scss';
import Logo from "../../ui/Logo/Logo";
import Wallet from "../../ui/Wallet/Wallet";
import Navbar from "../../ui/Navbar/Navbar";
import {useCloseModalContext} from "../../../hooks/useCloseModalContext";
import {links} from '../../../assets/database/header/data';
import Avatar from "../../ui/Avatar/Avatar";


function HeaderModal() {
    const onClose = useCloseModalContext()
    return (
        <div className={style.modal}>
            <div className={style.modal_logo}>
                <Logo/>
            </div>
            <div className={style.modal_navbar}>
                <Navbar customStyle={"modal"} onClose={onClose} links={links}/>
            </div>
            <div className={style.modal_wallet}>
                <Wallet customStyle={"modal"}>
                    <Avatar/>
                </Wallet>
            </div>
        </div>
    );
}

export default HeaderModal;