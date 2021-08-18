import React from 'react';
import style from "./style.module.scss";
import ProfileCard from "../../../ui/ProfileCard/ProfileCard";
import {approve, ApproveType} from "../../../../assets/database/admin/admin";

const header = (el: ApproveType) => {
    return (
        <div className={style.approve_header}>
            <div className={style.approve_header__title}>
                <span>{el.header.title}</span>
            </div>
            <div className={style.approve_header__button}>
                <span>{el.header.button}</span>
            </div>
        </div>
    )
}
const footer = (el: ApproveType) => {
    return (
        <div className={style.approve_footer}>
            <div className={style.approve_footer__button}
                 style={{background: " linear-gradient(103.4deg, #4DB2DD -3.52%, #1CC980 86.25%)"}}>
                <img src={el.footer.button_1.icon} alt="icon"/>
                <span>{el.footer.button_1.text}</span>
            </div>
            <div className={style.approve_footer__button}
                 style={{background: "linear-gradient(99.08deg, #CA00AF 9.3%, #E56A35 93.13%)"}}>
                <img src={el.footer.button_2.icon} alt="icon"/>
                <span>{el.footer.button_2.text}</span>
            </div>
            <img src={el.footer.image} alt="image"/>
        </div>
    )
}

function Approve() {
    return (
        <div className={style.approve}>
            {approve.map((el, idx) => {
                return <ProfileCard key={idx}
                                    header={() => header(el)}
                                    footer={() => footer(el)}
                />
            })}

        </div>
    );
}

export default Approve;