import React from 'react';
import style from './style.module.scss';
import {useModal} from "../../../hooks/useModal";
import Wallet from "../../ui/Wallet/Wallet";
import Menu from "../../ui/Menu/Menu";
import HeaderModal from "./HeaderModal";
import Logo from "../../ui/Logo/Logo";
import Navbar from "../../ui/Navbar/Navbar";
import Avatar from "../../ui/Avatar/Avatar";
import {links} from '../../../assets/config/header/data';


function Header() {
    const custom_style = "header_modal"

    const children = () => {
        return <HeaderModal />
    };
    const {ModalComponent, onOpen} = useModal({
        children,
        custom_style,
    });
    return (
        <header className={style.header}>
            <div className={style.header_logo}>
                <Logo/>
            </div>
            <div className={style.header_navbar}>
                <Navbar customStyle={"header"} links={links}/>
            </div>
            <div className={style.header_wallet}>
                <Wallet customStyle={"header"}>
                    <Avatar/>
                </Wallet>
            </div>
            <div className={style.header_menu} onClick={() => onOpen()}>
                <Menu/>
            </div>
            <ModalComponent/>
        </header>
    );
}

export default Header;