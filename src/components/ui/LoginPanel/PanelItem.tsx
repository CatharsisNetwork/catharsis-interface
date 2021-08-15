import React from 'react';
import style from './style.module.scss'

function PanelItem({title, icon,bg}: { title: string, icon: string ,bg:string}) {
    return (
        <div 	className={style.panel_content__item} style={{background:`${bg}`}}>
            <span>{title}</span>
            <div className={style.icon}>
                <img  src={icon} alt=""/>
            </div>
        </div>
    );
}

export default PanelItem;