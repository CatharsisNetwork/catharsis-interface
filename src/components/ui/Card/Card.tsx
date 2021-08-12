import React from 'react';
import style from './style.module.scss';
import {CardType} from "../../../assets/database/callery/data";
import CardFooter from "./CardFooter/CardFooter";
import CardHeader from "./CardHeader/CardHeader";


function Card({data}: { data: CardType }) {
    return (
        <div className={style.card}>
            <CardHeader amount={data.header.amount}
                        flame={data.header.flame}
                        star={data.header.star}
                        title={data.header.title}/>

            <div className={style.card_content}>
                <img src={data.content.img} alt="card_content"/>
            </div>

            <CardFooter interval={data.footer.interval}
                        info={data.footer.info}
                        title={data.footer.title}
                        button={data.footer.button}/>
        </div>
    );
}

export default Card;