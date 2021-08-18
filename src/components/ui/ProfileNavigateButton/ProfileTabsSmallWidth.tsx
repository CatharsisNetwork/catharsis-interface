import React, {useState} from 'react';
import {tabsData} from "../../../assets/database/admin/tabsData";

import style from './style.module.scss';
import TabsButton from "../Tabs/TabsButton";

function ProfileTabsSmallWidth() {
    const [activeTabs, setActiveTabs] = useState<boolean>(true);
    const [tabsId, setTabsId] = useState<number>(1);

    return (
        <div className={style.navigate}>
            {/*{tabsData.map((el, idx) => {*/}
            {/*    return (*/}
            {/*        <TabsButton*/}
            {/*            activeTabs={activeTabs}*/}
            {/*            setActiveTabs={setActiveTabs}*/}
            {/*            title={el.title}*/}
            {/*            setContent={setContent}*/}
            {/*            content={el.content}*/}
            {/*            id={idx}*/}
            {/*            key={idx}*/}
            {/*            setTabsId={setTabsId}*/}
            {/*            tabsId={tabsId}*/}
            {/*            icon={el.icon}*/}
            {/*        />*/}
            {/*    );*/}
            {/*})}*/}

        </div>
    );
}

export default ProfileTabsSmallWidth;