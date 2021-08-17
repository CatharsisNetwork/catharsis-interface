import React from 'react';
import style from './style.module.scss';

type ProfileCardType = {
    header: () => React.ReactNode
    footer?: () => React.ReactNode
    content?: () => React.ReactNode
}

function ProfileCard({header, footer, content}: ProfileCardType) {
    return (
        <div className={style.card}>
            <div className={style.card_header}>
                {header()}
            </div>
            {content ? <div className={style.card_content}>
                {content()}
            </div> : null}

            {footer ? <div className={style.card_footer}>
                {footer()}
            </div> : null}

        </div>
    );
}

export default ProfileCard;