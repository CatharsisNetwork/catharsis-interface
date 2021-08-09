import React, {useState} from 'react';
import style from "../style.module.scss";
import Slider from "../../../../ui/Slider/Slider";
import ntf from "../../../../../assets/image/fractionalize/ntf.png";
import BuyoutCard from "./BuyoutCard";


function LeftSide() {
    const [slider, setSlider] = useState<number>(50)
    const [sliderPercentage, setSliderPercentage] = useState<number>(0)

    return (
        <div className={style.content_left}>
            <div className={style.percentage}>
                <div className={style.percentage_range}>
                    <span>Percentage of fraction for sale</span>
                </div>
                <div className={style.percentage_slider}>
                    <Slider slider={slider} setSlider={setSlider} customStyle={"auction"}/>
                </div>
                <div className={style.percentage_grid}
                     style={{background: `linear-gradient(to top, #332F40 0%, #332F40 ${slider}% ,  #5469D4 ${slider}%,#5469D4 100%)`}}
                >
                    <div className={style.percentage_grid__table}/>
                    <img src={ntf} alt="ntf"/>
                </div>
            </div>
            <div className={style.buyout}>
                <div className={style.buyout_card}>
                    <BuyoutCard title={"Fraction price"} value={10984}/>
                    <BuyoutCard title={"Buyout price"} value={+(10984 + (10984 * sliderPercentage / 100)).toFixed(0)}/>
                </div>

                <div className={style.buyout_slider}>
                    <span className={style.buyout_slider__title}>You can change buyout price</span>
                    <Slider slider={sliderPercentage}
                            setSlider={setSliderPercentage}
                            customStyle={"auction_buyout"}/>
                    <span className={style.buyout_slider__scale}>
                        <span>-25%</span>
                        <small className={style.zero}>0</small>
                        <span>25%</span>
                    </span>

                </div>
            </div>
        </div>
    );
}

export default LeftSide;