import React from 'react';
import style from "./style.module.scss";
import {TokenDataType} from "../../../../assets/database/admin/tokenData";

function TokenTableRow({content}: { content: TokenDataType }) {
    return (
        <div className={style.token_row}>
            <span className={style.token_row__title}>
                {content.title}
                <small>{content.description.title}</small>
            <small> {content.description.subtitle}</small>
            </span>
            <span className={style.token_row__item}>{content.total}</span>
            <span className={style.token_row__item}>{content.locked}</span>
            <span className={style.token_row__item}>{content.unlocked}</span>
            <span className={style.token_row__item}>{content.claimed}</span>
        </div>
    );
}

export default TokenTableRow;