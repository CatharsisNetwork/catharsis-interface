import React from 'react';
import style from './style.module.scss'
import login_item__1 from '../../../assets/image/header/login_item__1.png'
import login_item__2 from '../../../assets/image/header/login_item__2.png'
import login_item__3 from '../../../assets/image/header/login_item__3.png'
import PanelItem from "./PanelItem";
const panel=[
    {
        title:"MetaMask",
        icon:login_item__1,
        bg:"#C87B25"
    },
    {
        title:"WalletConnect",
        icon:login_item__2,
        bg:"#1E60C0"
    },
    {
        title:"Portis",
        icon:login_item__3,
        bg:"#1C345D"
    },
]

function LoginPanel() {
    return (
        <div className={style.panel}>
            <div className={style.panel_title}>
                <span>Connect your wallet</span>
            </div>
            <div className={style.panel_content}>
                {panel.map((el,idx)=>{
                    return <PanelItem title={el.title} key={idx} icon={el.icon} bg={el.bg}/>
                })}
            </div>
        </div>
    );
}

export default LoginPanel;