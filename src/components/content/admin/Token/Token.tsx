import React from 'react';
import style from "./style.module.scss";
import TokenTableHead from "./TokenTableHead";
import TokenTableRow from "./TokenTableRow";
import {tokenData} from "../../../../assets/database/admin/tokenData";

function Token() {
    return (
        <div className={style.token}>
            <TokenTableHead/>
            {tokenData.map((el, idx) => {
                return <TokenTableRow key={idx} content={el}/>
            })}
        </div>
    );
}

export default Token;