import React from 'react';
import CheckBoxGroup from "../../ui/CheckBox/CheckBoxGroup";
import useWindowSize from "../../../hooks/useWindowSize";

import Tabs from "../../ui/Tabs/Tabs";

function GalleryTabsGroup() {
    const {width} = useWindowSize();
    return width && width > 768 ? <Tabs/> : <CheckBoxGroup/>
}

export default GalleryTabsGroup;