import React from 'react';
import CheckBoxGroup from "../../ui/CheckBox/CheckBoxGroup";
import useWindowSize from "../../../hooks/useWindowSize";

import Tabs from "../../ui/Tabs/Tabs";

const tabsData = [
    {
        title: "Fractionalized",
        icon: {active: "circle_half", nonactive: "circle_half_grey"},
    },
    {
        title: "Auction",
        icon: {active: "trophy", nonactive: "trophy_grey"},
    },
]


function GalleryTabsGroup() {
    const {width} = useWindowSize();
    return width && width > 768 ? <Tabs  tabsData={tabsData}/> : <CheckBoxGroup/>
}

export default GalleryTabsGroup;