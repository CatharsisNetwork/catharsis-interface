import React, {useState} from 'react';
import circle_half from "../../../assets/image/gallery/circle_half.png";
import circle_half_grey from "../../../assets/image/gallery/circle_half_grey.png";
import trophy_grey from "../../../assets/image/gallery/trophy_grey.png";
import trophy from "../../../assets/image/gallery/trophy.png";
import style from './style.module.scss';
import {getActiveClassName} from "../../../utils/lib/getActiveClassName";
import TabsButton from "./TabsButton";

type TabsDataType = {
    title: string,
    icon?: { active: string, nonactive: string },
}


function Tabs({tabsData, customStyle}: { tabsData: Array<TabsDataType>, customStyle?: string }) {
    const [activeTabs, setActiveTabs] = useState<boolean>(true)
    const [tabsId, setTabsId] = useState<number>(1)
    return (
        <div className={style[customStyle ? customStyle : ""]}>
            <div className={style.tabs_button}>

                {tabsData.map((el, idx) => {
                    return <TabsButton activeTabs={activeTabs}
                                       setActiveTabs={setActiveTabs}
                                       title={el.title}
                                       id={idx}
                                       key={idx}
                                       setTabsId={setTabsId}
                                       tabsId={tabsId}
                                       icon={el.icon}/>
                })}
            </div>
            <div className={style.tabs_line}>
                <span style={{left: `${(100 / tabsData.length) * (tabsId + 1) - (100 / tabsData.length)}%`}}/>
            </div>
        </div>
    );
}

export default Tabs;