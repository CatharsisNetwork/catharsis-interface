import React from 'react';
import style from "../style.module.scss"
import ButtonGroup from "../../../../ui/ButtonGroup/ButtonGroupType";
import Button from "../../../../ui/ButtonGroup/Button";
import PriceCardInfoAndAttention from "./PriceCardInfoAndAttention";

function PriceCard() {
    return (
        <div className={style.content_right__price}>
            <div className={style.checkbox}>
                <ButtonGroup>
                    {(active, setActive) => (<>

                        <Button title={() => <span>Fixed price</span>}
                                active={active}
                                setActive={() => setActive(!active)}
                                customStyle={"checkbox_button"}/>

                        <Button title={() => <span>Fair distribution auction</span>}
                                active={!active}
                                setActive={() => setActive(!active)}
                                customStyle={"checkbox_button"}/>
                    </>)}
                </ButtonGroup>
            </div>
            <PriceCardInfoAndAttention/>
        </div>
    );
}


export default PriceCard;