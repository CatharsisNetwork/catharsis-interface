import React from 'react';
import style from './style.module.scss';
import Accordion from "./Acordion";
import {data} from '../../../assets/database/faq/data';


function FAQPage() {
    return (
        <>
            <div className={"faq_bg"}/>
            <div className="_container">
                <div className={style.description}>
                    <div className={style.description_title}>
                        <span>{data.description.title.part}</span>
                        <span>{data.description.title.part_purple}</span>
                    </div>
                    <div className={style.description_text}>
                        {data.description.text}
                    </div>
                    {data.accordion.map((el, idx) => {
                            return <Accordion key={idx} content={el.content} title={el.title}/>})
                    }
                </div>
            </div>
        </>
    );
}

export default FAQPage;