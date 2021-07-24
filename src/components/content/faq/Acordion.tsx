import React, {useState, useRef} from "react";
import style from './style.module.scss';
import caret_up from "../../../assets/image/faq/caret_up.png";
import caret_down from "../../../assets/image/faq/caret_down.png";

function Accordion(props: any) {
    const [active, setActive] = useState<boolean>(false);
    const [height, setHeight] = useState<string>("0px");
    const content = useRef<HTMLDivElement>(null);

    function toggleAccordion() {
        setActive(!active);
        if (content && content.current)
            setHeight(
                active ? "0px" : `${content.current.scrollHeight + 10}px`
            );
    }

    return (
        <div className={style.section}>
            <div className={style.accordion}>
                <button className={style.accordion_title} onClick={toggleAccordion}>
                    <div>
                        <span>{props.title}</span>

                    </div>
                    <img className={active ? style.icon_down : style.icon_up}
                         src={active ? caret_down : caret_up} alt={"caret"}/>
                </button>
                <div ref={content} style={{height: `${height}`}}
                     className={active ? style.accordion_content : `${style.accordion_content} ${style.border}`}>
                    <div className={style.accordion_content_text}>
                        <span>{props.content}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;