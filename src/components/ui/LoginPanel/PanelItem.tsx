import React from 'react';
import style from './style.module.scss'

function PanelItem({
                       title,
                       icon,
                       bg,
                       current,
                       setCurrent

                   }: { title: string, icon: string, bg: string, setCurrent: (title: string) => void, current: string | false }) {
    console.log(current)
    return (
        <div className={`${style.panel_content__item} ${style[current ? "active" : '']}`} style={{background: `${bg}`}}
             onClick={() => setCurrent(title)}>
            <span className={style.title}>{title}
                {current ?
                    (<small>
                        {`Login using ${title} hosted wallet`}
                    </small>)
                    : null}</span>
            <div className={style.icon}>
                <img src={icon} alt=""/>
            </div>
        </div>
    );
}

export default PanelItem;