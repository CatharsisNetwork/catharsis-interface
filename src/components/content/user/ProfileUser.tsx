import React, {useState} from 'react';
import style from "./style.module.scss";
import Approve from "./Approve/Approve";
import {tabsData} from "../../../assets/database/user/tabsData";
import Tabs from "../../ui/Tabs/Tabs";
import Token from "./Token/Token";
import Statistic from "./Statistic/Statistic";


function ProfileUser() {
    const [content, setContent] = useState<string>('approve');

    function getProfileAdminContent(content: string) {
        if (content === 'approve') return <Approve/>;
        if (content === 'statistic') return <Statistic/>;
        if (content === 'token') return <Token/>;
    }

    return (
        <div className={'content'}>
            <div className={style.admin}>
                <Tabs
                    tabsData={tabsData}
                    setContent={setContent}
                    customStyle={'admin'}
                />
                <div className={style.admin_cards}>
                    {getProfileAdminContent(content)}
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;