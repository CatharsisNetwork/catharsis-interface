import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {getActiveClassName} from "../../../utils/lib/getActiveClassName";
import style from "./style.module.scss";
import TabsIcon, {PngType} from "./TabsIcon";

type TabsButtonType = {
    activeTabs: boolean,
    setActiveTabs: Dispatch<SetStateAction<boolean>>,
    title: string,
    icon?: { active: string, nonactive: string },
    id: number,
    tabsId: number,
    setTabsId: Dispatch<SetStateAction<number>>
}

function TabsButton({activeTabs, setActiveTabs, title, icon, id, tabsId, setTabsId}: TabsButtonType) {

    return (
        <button className={getActiveClassName(style, "button_title", tabsId === id)}
                onClick={() => {
                    setActiveTabs(!activeTabs)
                    setTabsId(id)
                }
                }>
            <TabsIcon activeTabs={tabsId === id} icon={icon}/>
            <span>{title}</span>
        </button>
    );
}

export default TabsButton;