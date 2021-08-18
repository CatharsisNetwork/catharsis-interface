import React, {useState} from 'react';
import style from "./style.module.scss";
import Approve from "./Approve/Approve";
import FractionalizeAuction from "../fractionalize/FractionalizeAuction/FractionalizeAuction";

import {tabsData} from "../../../assets/database/admin/tabsData";
import Tabs from "../../ui/Tabs/Tabs";
import Token from "./Token/Token";


function ProfileAdmin() {
    const [content, setContent] = useState<string>('approve');

    function getProfileAdminContent(content: string) {
        if (content === 'approve') return <Approve/>;
        if (content === 'statistic') return <FractionalizeAuction/>;
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

export default ProfileAdmin;