import React, {useEffect, useState} from 'react';
import style from "./style.module.scss";
import ContentButton from "./ContentButton";
import FractionalizeNavigate from "./FractionalizeNavigate";
import FractionalizeBody from "./FractionalizeBody/FractionalizeBody";
import FractionalizeAuction from "./FractionalizeAuction/FractionalizeAuction";
import FractionalizePreview from "./FractionalizePreview/FractionalizePreview";

function Fractionalize() {
    const [content, setContent] = useState<string>("auction")
    const [button, setButton] = useState<string>("Send for approval")


    useEffect(() => {
        if (content === "body") setButton("Send for approval")
        if (content === "auction") setButton("Schedule auction")
        if (content === "preview") setButton("Fractionalize")

    }, [content])


    function getFractionalizeContent(content: string) {
        if (content === "body") return <FractionalizeBody/>
        if (content === "auction") return <FractionalizeAuction/>
        if (content === "preview") return <FractionalizePreview/>
    }

    return (
        <div className={"content"}>
            <div className={style.fractional}>
                <div className={style.fractional_title}>
                    <span>Fractionalize</span>
                </div>
                <FractionalizeNavigate setContent={setContent}/>
                {getFractionalizeContent(content)}
                <div className={style.button}>
                    <ContentButton button={button}/>
                </div>
            </div>
        </div>
    );
}

export default Fractionalize;