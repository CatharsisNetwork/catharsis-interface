import React from 'react';
import Card from "./Card";
import {CardType} from "../../../assets/database/callery/data";

function CardsList({cards}: { cards: Array<CardType> }) {
    return (<>{cards.map((el, idx) => <Card data={el} key={idx}/>)}</>)
}

export default CardsList;