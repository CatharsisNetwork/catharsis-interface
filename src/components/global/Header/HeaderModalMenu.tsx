import React, {Dispatch, SetStateAction} from 'react';
import style from './style.module.scss';
import Logo from '../../ui/Logo/Logo';
import Wallet from '../../ui/Wallet/Wallet';
import Navbar from '../../ui/Navbar/Navbar';
import {useCloseModalContext} from '../../../hooks/useCloseModalContext';
import {links} from '../../../assets/database/header/data';
import Avatar from '../../ui/Wallet/Avatar';

function HeaderModalMenu({onOpen, setDisplay, display}:{setDisplay:Dispatch<SetStateAction<string>>,display:string,onOpen:({style, element}: { style: string, element: string })=>void}) {
    const onClose = useCloseModalContext();

    return (
        <div className={style.modal}>
            <div className={style.modal_logo}>
                <Logo/>
            </div>
            <div className={style.modal_navbar}>
                <Navbar customStyle={'modal'} onClose={onClose} links={links}/>
            </div>

            <div className={style.modal_wallet}
                 onClick={() => {
                     onOpen({element: 'wallet', style: "header_wallet"})
                     setDisplay("_none");
                 }
                 }
            >
                <Wallet customStyle={`modal${display}`}>
                    <Avatar/>
                </Wallet>
            </div>
        </div>
    );
}

export default HeaderModalMenu;
