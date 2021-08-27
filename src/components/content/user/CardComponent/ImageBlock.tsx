import React from 'react';
import style from "./style.module.scss";

function ImageBlock({image}:{image:string}) {
    return (
        <div className={style.image}>
            <img src={image} alt="icon"/>
        </div>
    );
}

export default ImageBlock;