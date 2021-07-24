import React from 'react';
import style from './style.module.scss';
import star from '../../../assets/image/gallery/star.png';
import rectangle from '../../../assets/image/gallery/rectangle.png';
import Interval from './Interval';
import {CardType} from "../../../assets/database/callery/data";


function Card({data}: { data: CardType }) {
    return (
        <div className={style.card}>
            <div className={style.card_header}>
                <div>
                    <div className={style.card_header__title}>
                        <span>{data.header.title}</span>
                    </div>
                    <div className={style.card_header__amount}>
                        <img src={rectangle} alt="rectangle"/>
                        <span>{data.header.amount}</span>
                    </div>
                </div>
                <div className={style.card_header__star}>
                    <img src={star} alt="star"/>
                    <span>{data.header.star}</span>
                </div>
            </div>
            <div className={style.card_content}>
                <img src={data.content.img} alt="card_content"/>
            </div>
            <div className={style.card_footer}>
                <div className={style.card_footer__title}>
                    <span> {data.footer.title}</span>
                </div>
                <div className={style.card_footer__countdown}>
                    <Interval interval={data.footer.interval}/>
                </div>
                <div className={style.card_footer__details}>
                    <button>View details</button>
                </div>
            </div>
        </div>
    );
}

export default Card;