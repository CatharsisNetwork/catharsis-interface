import React, {useEffect, useState} from 'react';
import style from "./style.module.scss";
import Approve from "./Approve/Approve";
import {adminTabsData, tabsData} from "../../../assets/database/user/tabsData";
import Tabs from "../../ui/Tabs/Tabs";
import Token from "./Token/Token";
import Statistic from "./Statistic/Statistic";
import {scrollToTop} from "../../../utils/lib/scroll";
import Swap from "./Swap/Swap";


function ProfileUser() {
    useEffect(() => scrollToTop(), []);
    const [content, setContent] = useState<string>('approve');
    // eslint-disable-next-line
    const [role, setRole] = useState<string>('admin');

    function getProfileAdminContent(content: string) {
        if (content === 'approve') return <Approve/>;
        if (content === 'statistic') return <Statistic/>;
        if (content === 'token') return <Token/>;
        if (content === 'swap') return <Swap/>;
    }

    return (
        <div className={'content'}>
            <div className={style.admin}>
                <Tabs
                    tabsData={role === "admin" ? adminTabsData : tabsData}
                    setContent={setContent}
                    customStyle={'admin'}
                />
                {getProfileAdminContent(content)}
            </div>
        </div>
    );
}

export default ProfileUser;