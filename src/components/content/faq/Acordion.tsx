import React, {useState, useRef} from "react";
import Chevron from "./Chevron";
import style from './style.module.scss';


function Accordion(props: any) {
    const [active, setActive] = useState<string>("");
    const [height, setHeight] = useState<string>("1px");
    const content:any = useRef(null);

    function toggleAccordion() {
        setActive(active === "" ? "active" : "");
        setHeight(
            active === "active" ? "1px" : `${content.current.scrollHeight+10}px`
        );
    }

    return (
        <div className={style.section}>
            <div className={style.accordion}>
                <button className={style.accordion_title} onClick={toggleAccordion}>
                    <div>
                        <span>{props.title}</span>
                    </div>
                    <Chevron setActive={active}/>
                </button>
                <div ref={content} style={{height: `${height}`}}
                     className={active === "active" ? style.accordion_content : `${style.accordion_content} ${style.border}`}>
                    <div className={style.accordion_content_text}>
                        <span>{props.content}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;