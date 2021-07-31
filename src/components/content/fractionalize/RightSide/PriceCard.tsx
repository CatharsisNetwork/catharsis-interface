import React from 'react';
import style from "../style.module.scss";
import ButtonGroup from "../../../ui/ButtonGroup/ButtonGroup";
import Button from "../../../ui/ButtonGroup/Button";
import attention from "../../../../assets/image/fractionalize/attention.png";

function PriceCard() {
    return (
        <div className={style.content_right__price}>
            <div className={style.checkbox}>
                <ButtonGroup>
                    {(active, setActive) => (<>

                        <Button title={() => <span>Fixed price</span>}
                                active={active}
                                setActive={() => setActive(!active)}
                                customStyle={""}/>

                        <Button title={() => <span>Fair distribution auction</span>}
                                active={!active}
                                setActive={() => setActive(!active)}
                                customStyle={""}/>
                    </>)}
                </ButtonGroup>
            </div>


            <div className={style.info}>
                <p>
                    <span> Fixed price:</span> But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain
                </p>
                <p>
                    <span>  Fair distribution auction:</span> But I must explain to you how all this
                    mistaken idea of denouncing pleasure and praising pain
                </p>
            </div>

            <div className={style.attention}>
                <img src={attention} alt="attention"/>
                <span>
                                    After you applied for fractionalization, it will be manually moderated
                                </span>
            </div>
        </div>
    );
}

export default PriceCard;