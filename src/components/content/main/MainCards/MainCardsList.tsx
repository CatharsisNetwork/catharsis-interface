import React from 'react';
import MainCard from "./MainCard";
import {MainCardType} from "../../../../assets/database/main/data";
import style from "./style.module.scss";

function MainCardsList({data}: { data: Array<MainCardType> }) {
    return <>{data.map((el, idx) => <MainCard data={el} key={idx}/>)}</>
}

export default MainCardsList;