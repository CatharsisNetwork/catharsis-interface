import React, {useState} from 'react';
import style from "./style.module.scss";
import Tabs from "../../ui/Tabs/Tabs";
import Approve from "./Approve/Approve";
import FractionalizeBody from "../fractionalize/FractionalizeBody/FractionalizeBody";
import FractionalizeAuction from "../fractionalize/FractionalizeAuction/FractionalizeAuction";
import FractionalizePreview from "../fractionalize/FractionalizePreview/FractionalizePreview";

const tabsData = [
    {
        title: 'Approve',
        content: 'approve',
        icon: {active: 'waterfalls', nonactive: 'waterfalls_grey'},
        position: 'left',
    },
    {
        title: 'Statistic',
        content: 'statistic',
        icon: {active: 'trend', nonactive: 'trend_grey'},
        position: 'center',
    },
    {
        title: 'My token stats',
        content: 'token',
        icon: {active: 'coin', nonactive: 'coin_grey'},
        position: 'right',
    },
];

function ProfileAdmin() {
    const [content, setContent] = useState<string>('approve');

    function getProfileAdminContent(content: string) {
        if (content === 'approve') return <Approve/>;
        if (content === 'statistic') return <FractionalizeAuction />;
        if (content === 'token') return <FractionalizePreview />;
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