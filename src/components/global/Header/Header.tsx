import React, {useState} from 'react';
import style from './style.module.scss';
import {useModal} from '../../../hooks/useModal';
import Wallet from '../../ui/Wallet/Wallet';
import Menu from '../../ui/Menu/Menu';
import HeaderModalMenu from './HeaderModalMenu';
import Logo from '../../ui/Logo/Logo';
import Navbar from '../../ui/Navbar/Navbar';
import Avatar from '../../ui/Wallet/Avatar';
import {links} from '../../../assets/database/header/data';
import HeaderModalWallet from "./HeaderModalWallet";

function Header() {
    const [display, setDisplay] = useState<string>('')
    const children = (element: string) => {
        if (element === 'menu') return <HeaderModalMenu/>;
        if (element === 'wallet') return <HeaderModalWallet/>;
    };

    const {ModalComponent, onOpen} = useModal({
        children,
        setDisplay
    });
    return (
        <header className={style.header}>
            <div className={style.header_logo}>
                <Logo/>
            </div>
            <div className={style.header_navbar}>
                <Navbar customStyle={'header'} links={links}/>
            </div>
            <div className={style.header_wallet}
                 onClick={() =>{
                     onOpen({element: 'wallet', style: "header_wallet"})
                     setDisplay("_none");
                 }
            }
            >
                <Wallet customStyle={`header${display}`}>
                    <Avatar/>
                </Wallet>
            </div>
            <div className={style.header_menu} onClick={() => onOpen({element: 'menu', style: "header_modal"})}>
                <Menu/>
            </div>
            <ModalComponent/>
        </header>
    );
}

export default Header;
