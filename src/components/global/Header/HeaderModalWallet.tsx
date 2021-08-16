import React from 'react';
import style from "./style.module.scss";

import LoginPanel from "../../ui/LoginPanel/LoginPanel";
import Wallet from "../../ui/Wallet/Wallet";
import Avatar from "../../ui/Wallet/Avatar";
import Logo from "../../ui/Logo/Logo";
import Navbar from "../../ui/Navbar/Navbar";
import {links} from "../../../assets/database/header/data";


function HeaderModalWallet() {
    return (
        <LoginPanel/>
    );
}

export default HeaderModalWallet;