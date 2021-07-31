import React from 'react';
import style from "../style.module.scss";

function DescriptionCard() {
    return (
        <div className={style.content_right__description}>
            <div className={style.title}>Description</div>
            <div className={style.input}>
                <textarea placeholder={"Describe your NFT"}/>
            </div>
        </div>
    );
}

export default DescriptionCard;