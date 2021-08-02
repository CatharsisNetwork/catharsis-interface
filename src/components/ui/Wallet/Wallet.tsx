import React from 'react';
import style from "./style.module.scss";
import circle from "../../../assets/image/header/circle.png";
import wallet from "../../../assets/image/header/wallet.png";
import BoxShadowButton from "../BoxShadowButton/BoxShadowButton";

/**
 The component is a wrapper and it renders nested "children" or not depending on the place of use.
 Component used in Header and HeaderModal.Styles mixin are in the folder style/_mixin.
 */


type WalletPropsType = {
    children?: React.ReactNode
    customStyle?: string
}

function Wallet({children, customStyle = ''}: WalletPropsType) {
    return (

        <div className={`${style[customStyle]} ${style.wallet}`}>
            <BoxShadowButton shadow={"wallet"}>
                {children}
                <span className={style.connect}><p>Connect wallet</p>
                    <img src={wallet} alt="wallet"/>
                        <div>
                         <img src={circle} alt="circle"/>
                      </div>
               </span>
            </BoxShadowButton>
        </div>

    );
}

export default Wallet;