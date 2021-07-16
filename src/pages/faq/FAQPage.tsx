import React from 'react';
import style from './style.module.scss';
import Accordion from "./Acordion";
import {faq_data} from "./faq_data";
import bg from "../../img/faq_image/bg.png";
import Wallet from "../../components/Wallet/Wallet";
import classes from "../../components/Footer/style.module.scss";
import Menu from "../../components/Menu/Menu";



function FaqPage() {
    return (


        <div className={style.description}>
            <div className={style.description_wallet}>
                <Wallet/>
            </div>
            <div className={style.description_menu}>
                <Menu/>
            </div>
            <div className={style.description_title}>
                <span>Questions?</span>
                <span>Look here</span>
            </div>
            <div className={style.description_text}>
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If you are going
                to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text.
            </div>
            {
                faq_data.map((el, idx) => {
                    return <Accordion key={idx} content={el.content} title={el.title}/>
                })
            }
        </div>
    );
}

export default FaqPage;