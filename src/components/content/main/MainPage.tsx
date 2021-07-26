import React, {useEffect} from 'react';
import style from "./style.module.scss";
import main_content_1 from "../../../assets/image/main/main_content_1.png"
import main_content_vector from "../../../assets/image/main/main_content_vector.png"
import main_content_frame_1 from "../../../assets/image/main/main_content_frame_1.png"
import main_content_frame_2 from "../../../assets/image/main/main_content_frame_2.png"
import main_content_action from "../../../assets/image/main/main_content_action.png"
import main_content_flame from "../../../assets/image/main/main_content_flame.png"
import main_content_voting from "../../../assets/image/main/main_content_voting.png"
import CardsList from "../../ui/Card/CardsList";
import {data} from "../../../assets/database/main/data";
import MainCardsList from './MainCards/MainCardsList';
import {scrollToTop} from "../../../utils/lib/scroll";
import { Link } from 'react-router-dom';

function MainPage() {
    useEffect(() => scrollToTop(), [])
    return (
        <>
            <div className={"_container"}>


                <section className={style.main_header}>
                    <div className={style.main_header__title}>
                        <h1>
                            <span>Buy, sell and mint</span><br/>
                            <span>fractional ownership of</span> <p>NFTs</p>
                        </h1>
                    </div>
                    <div className={style.main_header__description}>
                        <span>
                            Fractional ownership of the world’s most sought after NFTs.
                        Fractional unlocks liquidity, reduces entry costs, and allows for
                        synergy with other DeFi primitives.
                        </span>
                    </div>
                    <div className={style.main_header__button}>
                        <span> Live vaults</span>
                    </div>
                    <div className={style.main_header__image}>
                        <img src={main_content_1} alt="main_content"/>
                    </div>
                </section>
            </div>


            <section className={style.position}>
                <div className={"_container"}>
                    <div className={style.main_content}>
                        <div className={style.main_content__title}>
                            <span> Gallery</span>
                        </div>
                        <div className={style.main_content__cards}>
                            <CardsList cards={data.content.cards_content_1}/>
                        </div>
                        <div className={style.main_content__button}>
                            <Link to={"gallery"}>
                                <button> Gallery</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <img src={main_content_vector} alt="main_content_vector"/>
            </section>


            <section className={style.position}>
                <div className={"_container"}>
                    <div className={style.main_content}>
                        <div className={style.main_content__title}>
                            <span> How fractional NFTs works</span>
                        </div>
                        <div className={style.main_content__cards}>
                            <MainCardsList data={data.content.main_cards}/>
                        </div>
                        <div className={style.main_content__action}>
                            <img src={main_content_action} alt="main_content_action"/>
                        </div>
                    </div>
                </div>
                <div className={style.position_bg}/>
            </section>


            <section className={style.position}>
                <div className={"_container"}>
                    <div className={style.main_content}>
                        <div className={style.main_content__title}>
                            <span><img src={main_content_flame} alt=""/> Auction</span>
                        </div>
                        <div className={style.main_content__cards}>
                            <CardsList cards={data.content.cards_content_2}/>
                        </div>
                        <div className={style.main_content__button}>
                            <Link to={"gallery"}>
                                <button> Gallery</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.position_frame}>
                    <img src={main_content_frame_1} alt="main_content_frame_1"/>
                </div>
                <div className={style.position_frame}>
                    <img src={main_content_frame_2} alt="main_content_frame_2"/>
                </div>
            </section>


            <section className={style.position}>
                <div className={"_container"}>
                    <div className={style.main_content}>
                        <div className={style.main_content__title}>
                            <span><img src={main_content_voting} alt=""/> Voting</span>
                            <p>Let’s choose a winner together</p>
                        </div>
                        <div className={style.main_content__cards}>
                            <CardsList cards={data.content.cards_content_3}/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default MainPage;