import React, {Dispatch, SetStateAction} from 'react';
import {getActiveClassName} from "../../../utils/lib/getActiveClassName";
import style from "./style.module.scss";
import TabsIcon from "../TabsIcon/TabsIcon";

type TabsButtonType = {
    activeTabs: boolean,
    setActiveTabs: Dispatch<SetStateAction<boolean>>,
    title: string,
    icon?: { active: string, nonactive: string },
    id: number,
    content: string,
    tabsId: number,
    setTabsId: Dispatch<SetStateAction<number>>
    setContent: Dispatch<SetStateAction<string>>
}

function TabsButton({
                        activeTabs,
                        content,
                        setActiveTabs,
                        title,
                        icon,
                        id,
                        tabsId,
                        setTabsId,
                        setContent
                    }: TabsButtonType) {

    return (
        <button className={getActiveClassName(style, "button_title", tabsId === id)}
                onClick={() => {
                    setContent (content)
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