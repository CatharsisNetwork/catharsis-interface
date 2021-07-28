import React from 'react';
import search from "../../../assets/image/gallery/search.png";
import style from './style.module.scss';

function Input() {
    return (
        <div className={style.search_input}>
            <input type="text" placeholder={"Search by name"}/>
            <img src={search} alt="caret_down"/>
        </div>
    );
}

export default Input;