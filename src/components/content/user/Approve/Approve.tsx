import React from 'react';
import style from "./style.module.scss";
import ProfileCard from "../../../ui/ProfileCard/ProfileCard";
import {approve} from "../../../../assets/database/admin/admin";
import ShieldBlock from "../CardComponent/ShieldBlock";
import HeaderBlock from "../CardComponent/HeaderBlock";


function Approve() {
    return (
        <div className={style.approve}>
            {approve.map((el, idx) => {
                return <ProfileCard key={idx}
                                    header={() => <HeaderBlock button={el.header.button} title={el.header.title}/>}
                                    footer={() =>         <ShieldBlock text_1={el.footer.button_1.text}
                                                                       icon_1={el.footer.button_1.icon}
                                                                       icon_2={el.footer.button_2.icon}
                                                                       text_2={el.footer.button_2.text}>
                                        <img src={el.footer.image} alt="footer"/>
                                    </ShieldBlock>}
                />
            })}

        </div>
    );
}

export default Approve;