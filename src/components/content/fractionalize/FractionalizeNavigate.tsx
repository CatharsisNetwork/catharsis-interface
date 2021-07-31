import React from 'react';
import useWindowSize from "../../../hooks/useWindowSize";
import SwitchLine from "../../ui/SwitchLine/SwitchLine";
import Tabs from "../../ui/Tabs/Tabs";

const tabsData = [
    {
        title: "NFT Fractionalization",

    },
    {
        title: "Auction",

    },
    {
        title: "Preview and transfer",

    },
]


function FractionalizeNavigate() {
    const {width} = useWindowSize()
    return <>{width && width > 990 ? <SwitchLine/> : <Tabs tabsData={tabsData} customStyle={"fractional"}/>}</>
}

export default FractionalizeNavigate;