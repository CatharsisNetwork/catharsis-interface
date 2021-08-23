import React from 'react';
import style from './style.module.scss'
import revert from '../../../../assets/image/admin/revert.png'
import swap from '../../../../assets/image/admin/swap.png'
import ethereum from '../../../../assets/image/admin/ethereum.png'
import caret_down from '../../../../assets/image/admin/caret_down.png'
import ContentButton from "../../fractionalize/ContentButton";


function Swap() {
    return (
        <div className={style.swap}>
            <div className={style.swap_title}>
                <img src={swap} alt="swap"/>
                <span>Swap</span>
            </div>
            <div className={style.swap_group}>
                <div className={style.swap_group__input}>
<span className={style.currency}>
    <img src={ethereum} alt="ethereum"/>
    <span>ETH</span>
    <img src={caret_down} alt="caret_down"/>
</span>
                    <small>0.0</small>
                </div>
                <img src={revert} alt="revert"/>
                <div className={style.swap_group__input}>
<span className={style.currency}>
    <span>Choose token</span>
</span>
                    <small>0.0</small>
                </div>
            </div>
            <div className={style.button}>
                <ContentButton button={'Connect Wallet'} id={4}/>
            </div>

        </div>
    );
}

export default Swap;