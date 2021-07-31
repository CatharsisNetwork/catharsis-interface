import React from 'react';
import style from "../style.module.scss";
import ButtonGroup from "../../../ui/ButtonGroup/ButtonGroup";
import Button from "../../../ui/ButtonGroup/Button";
import attention from "../../../../assets/image/fractionalize/attention.png";
import InputRangeCard from "./InputRangeCard";
import TokenCard from "./TokenCard";
import PriceCard from "./PriceCard";
import DescriptionCard from "./DescriptionCard";

function RightSide() {
    return (
        <div className={style.content_right}>
            <TokenCard/>
            <PriceCard/>
            <InputRangeCard/>
            <DescriptionCard/>
        </div>
    );
}

export default RightSide;