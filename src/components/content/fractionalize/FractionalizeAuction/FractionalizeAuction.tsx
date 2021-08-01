import React from 'react';
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import style from "./style.module.scss";


function FractionalizeAuction() {
    return (
        <div className={style.content}>
            <LeftSide/>
            <RightSide/>
        </div>
    );
}

export default FractionalizeAuction;