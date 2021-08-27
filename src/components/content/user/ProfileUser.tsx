import React, {useEffect, useState} from 'react';
import style from "./style.module.scss";
import {adminTabsData, tabsData} from "../../../assets/database/user/tabsData";
import Tabs from "../../ui/Tabs/Tabs";
import {scrollToTop} from "../../../utils/lib/scroll";
import {getProfileUserContent} from "./GetProfileUserContent";


function ProfileUser() {
    useEffect(() => scrollToTop(), []);
    const [content, setContent] = useState<string>('approve');
    // eslint-disable-next-line
    const [role, setRole] = useState<string>('admin');

    return (
        <div className={'content'}>
            <div className={style.admin}>
                <Tabs
                    tabsData={role !== "admin" ? adminTabsData : tabsData}
                    setContent={setContent}
                    customStyle={'admin'}
                />
                {getProfileUserContent(content)}
            </div>
        </div>
    );
}

export default ProfileUser;