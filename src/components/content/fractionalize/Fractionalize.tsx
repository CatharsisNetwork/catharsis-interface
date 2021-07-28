import React, {useState} from 'react';
import style from "./style.module.scss";
import CheckBoxItem from "../../ui/CheckBox/CheckBoxItem";
import SwitchLine from "../../ui/SwitchLine/SwitchLine";
import flame from "../../../assets/image/fractionalize/flame.png";
import attention from "../../../assets/image/fractionalize/attention.png";
import FractionalizeCard from "./FractionalizeCard/FractionalizeCard";

function Fractionalize() {
    const [checked, setChecked] = useState<boolean>(false)
    let content_card: number[] = []
    content_card.length = 10
    content_card.fill(1, 1)
    return (
        <div className={"content"}>
            <div className={style.fractional}>
                <SwitchLine/>

                <div className={style.content}>
                    <div className={style.content_left}>
                        <div className={style.content_left__items}>
                            <div className={style.title}>
                                <img src={flame} alt=""/>
                                <span>You can choose even more than one item</span>
                            </div>
                            <div className={style.body}>
                                <div className={style.body_title}>
                                    <span>1212 items</span>
                                    <small> You choosed</small>
                                </div>
                                <div className={style.body_cards}>
                                    {content_card.map((el, idx) => {
                                        return <FractionalizeCard key={idx}/>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.content_right}>
                        <div className={style.content_right__token}>
                            <div className={style.card}>
                                <span>1 token</span>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and
                                    praising pain</p>
                            </div>
                            <div className={`${style.card} ${style["active"]}`}>
                                <span>Group of tokens</span>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and
                                    praising pain</p>
                            </div>
                        </div>
                        <div className={style.content_right__price}>
                            <div className={style.checkbox}>

                            </div>
                            <div className={style.description}>
                                <p>
                                    <span> Fixed price:</span> But I must explain to you how all this mistaken idea of
                                    denouncing pleasure and praising pain
                                </p>
                                <p>
                                    <span>  Fair distribution auction:</span> But I must explain to you how all this
                                    mistaken idea of denouncing pleasure and praising pain
                                </p>
                            </div>
                            <div className={style.attention}>
                                <img src={attention} alt="attention"/>
                                <span>
                                    After you applied for fractionalization, it will be manually moderated
                                </span>
                            </div>
                        </div>
                        <div className={style.content_right__number}>
                            <div className={style.title}>
                                 <span>
                                   Number of fractions
                                 </span>
                                <small>
                                    1000
                                </small>
                            </div>
                            <div className={style.input}>

                            </div>
                        </div>
                        <div className={style.content_right__description}>
                            <div className={style.title}>
                                Description
                            </div>
                            <div className={style.input}>
                                <textarea  placeholder={"Describe your NFT"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Fractionalize;