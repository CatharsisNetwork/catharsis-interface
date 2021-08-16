import React, {useEffect, useState} from 'react';
import style from './style.module.scss'
import login_item__1 from '../../../assets/image/header/login_item__1.png'
import login_item__2 from '../../../assets/image/header/login_item__2.png'
import login_item__3 from '../../../assets/image/header/login_item__3.png'
import close_login from '../../../assets/image/header/close_login.png'
import initializing from '../../../assets/image/header/initializing_1.png'
import PanelItem from "./PanelItem";
import Wallet from "../Wallet/Wallet";
import Avatar from "../Wallet/Avatar";
import {useCloseModalContext} from "../../../hooks/useCloseModalContext";
import Initializing from "./Initializing";
import Refresh from "../Refresh/Refresh";


type PanelType = {
    title: string,
    icon: string,
    bg: string
}
const panel: Array<PanelType> = [
    {
        title: "MetaMask",
        icon: login_item__1,
        bg: "#C87B25"
    },
    {
        title: "WalletConnect",
        icon: login_item__2,
        bg: "#1E60C0"
    },
    {
        title: "Portis",
        icon: login_item__3,
        bg: "#1C345D"
    },
]

function LoginPanel() {

    const [current, setCurrent] = useState<string | false>(false)
    useEffect(() => {
        setCurrent(false)
    }, [])

    const filter = (panel: Array<PanelType>) => {
        if (!current) return panel
        return panel.filter(el => el.title === current)
    }


    const onClose = useCloseModalContext();
    return (
        <div className={style.panel}>
            <div className={style.panel_close} onClick={onClose}>
                <img src={close_login} alt="close"/>
            </div>
            <div className={style.panel_wallet}>
                <Wallet customStyle={'login'}>
                    <Avatar/>
                </Wallet>
            </div>
            <div className={style.panel_title}>
                <span>Connect your wallet</span>
            </div>
            {
                current ? (
                    <div className={style.panel_initializing}>
                        <span>Initializing...</span>
                        <Refresh children={() => <Initializing/>} isLoading={true} />
                    </div>
                ) : null
            }
            <div className={style.panel_content}>
                {filter(panel).map((el, idx) => {
                    return <PanelItem title={el.title} key={idx} icon={el.icon} bg={el.bg} setCurrent={setCurrent}
                                      current={current}/>
                })}
            </div>

        </div>
    );
}

export default LoginPanel;