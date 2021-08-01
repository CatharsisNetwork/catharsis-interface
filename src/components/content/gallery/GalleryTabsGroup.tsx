import React, {useState} from 'react';
import CheckBoxGroup from "../../ui/CheckBox/CheckBoxGroup";
import useWindowSize from "../../../hooks/useWindowSize";

import Tabs from "../../ui/Tabs/Tabs";

const tabsData = [
    {
        title: "Fractionalized",
        icon: {active: "circle_half", nonactive: "circle_half_grey"},
        content: "gallery"
    },
    {
        title: "Auction",
        icon: {active: "trophy", nonactive: "trophy_grey"},
        content: "limbo"
    },
]


function GalleryTabsGroup() {
    const [content, setContent] = useState<string>("gallery")
    console.log(content)
    const {width} = useWindowSize();
    return width && width > 768 ? <Tabs setContent={setContent} tabsData={tabsData}/> : <CheckBoxGroup/>
}

export default GalleryTabsGroup;