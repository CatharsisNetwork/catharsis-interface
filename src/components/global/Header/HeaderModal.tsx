import React from 'react';
import style from './style.module.scss';
import Logo from "../../ui/Logo/Logo";
import Wallet from "../../ui/Wallet/Wallet";
import {Link} from "react-router-dom";
import avatar from "../../../assets/image/header/avatar.png";
import Navbar from "../../ui/Navbar/Navbar";
import {useCloseModalContext} from "../../../hooks/useCloseModalContext";

const links = [
    {label: 'Main', path: '/'},
    {label: 'Fractionalize', path: '/fractionalize'},
    {label: 'The Limbo', path: '/the_limbo'},
    {label: 'FAQ', path: '/faq'},
    {label: 'Farm LP', path: '/farm_lp'},
]



function HeaderModal() {
    const onClose = useCloseModalContext()
    return (
        <div className={style.modal} >
            <div className={style.modal_logo}>
                <Logo/>
            </div>
            <div className={style.modal_logo}>
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