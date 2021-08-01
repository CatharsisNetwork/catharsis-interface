import React, {Dispatch, SetStateAction} from 'react';
import useWindowSize from "../../../hooks/useWindowSize";
import SwitchLine from "../../ui/SwitchLine/SwitchLine";
import Tabs from "../../ui/Tabs/Tabs";

const tabsData = [
    {
        title: "NFT Fractionalization",
        content: "body",
        position: "left"
    },
    {
        title: "Auction",
        content: "auction",
        position: "center"
    },
    {
        title: "Preview and transfer",
        content: "preview",
        position: "right"
    },
]


function FractionalizeNavigate({setContent}: {setContent:Dispatch<SetStateAction<string>>}) {
    const {width} = useWindowSize()
    return <>
        {width && width > 990
            ? <SwitchLine setContent={setContent}
                          tabsData={tabsData}/>

            : <Tabs tabsData={tabsData}
                    setContent={setContent}
                    customStyle={"fractional"}/>
        }
    </>
}

export default FractionalizeNavigate;