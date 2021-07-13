import React from 'react';
import classes from './MainPage.module.scss';
import crypto from './../../img/MainPageTitle.png';
import { GalleryItem } from '../../components/GalleryItem';
import { HowItWorksItem } from '../../components/HowItWorksItem';
import { AuctionItem } from '../../components/AuctionItem';
import { VotingItem } from '../../components/VotingItem';
import { Footer } from '../../components/Footer';
import { gallery } from '../../config';
import {howWorks} from '../../config';
import {auction} from '../../config';
import {voting} from '../../config';



function MainPage() {
    return (
        <div className={classes.MainPage}>
            <div className={classes.mainText}>
                <div className={classes.title}>
                    <h1>
                        Buy, sell and mint <br />
                        fractional ownership of <span>NFTs</span>
                    </h1>
                </div>
                <div className={classes.subtitle}>
                    <p>
                        Fractional ownership of the world’s most sought <br /> after NFTs.
                        Fractional unlocks liquidity, reduces entry costs, and allows for synergy with other DeFi<br /> primitives.
                    </p>
                </div>
            </div>
            <div className={classes.vaultsBtn}>
                <button>Live vaults</button>
            </div>
            <div className={classes.mainImg}>
                <img src={crypto} alt="crypto" />
            </div>
            <section className={classes.gallery}>
                <div className={classes.galleryBg}>
                </div>
                <div className={classes.galleryTitle}>
                    <h3>Gallery</h3>
                </div>
                <div className={classes.galleryItemsContainer}>
                    <div className={classes.galleryItems}>
                        {
                            gallery.map((elem, i) => {
                                return <GalleryItem key={`gallery-item-${i}`} title={elem.title} amount={elem.amount} type={elem.type}
                                    status={elem.status} img={elem.img} supply={elem.supply} fee={elem.fee} amountETH={elem.amountETH} />
                            })
                        }
                    </div>
                </div>
                <div className={classes.galleryBtn}>
                    <button>View all</button>
                </div>
            </section>
            <section className={classes.howWorks}>
                <div className={classes.howItWorksContainer}>
                    <div className={classes.howWorksTitle}>
                        <h2>How fractional NFTs works</h2>
                    </div>
                    <div className={classes.howItWorksItems}>
                        {
                            howWorks.map((elem, i)=>{
                               return <HowItWorksItem key={`how-it-works-item-${i}`} img={elem.img} title={elem.title} text={elem.text} color={elem.color}/>
                            })
                        }
                      
                    </div>
                </div> 
            </section>
            <section className={classes.auction}>
                <div className={classes.auctionContainer}>
                <div className={classes.auctionTitle}>
                    <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0629 3.98746C21.0357 3.11571 19.9591 2.19996 18.8632 1.20446C18.3641 0.749173 17.771 0.409116 17.1259 0.208343C16.4808 0.00756982 15.7995 -0.049016 15.1301 0.0425877C14.479 0.127744 13.8545 0.354732 13.3008 0.707537C12.747 1.06034 12.2773 1.53037 11.925 2.08446C10.6187 4.23022 9.63388 6.55573 9.00173 8.98696C8.70153 8.5878 8.3166 8.26013 7.87463 8.02753C7.43265 7.79492 6.94462 7.66317 6.44563 7.64173C5.94664 7.6203 5.44911 7.70973 4.98882 7.90358C4.52852 8.09743 4.11691 8.39089 3.7836 8.76284C1.4528 11.1465 0.162239 14.3571 0.19485 17.6907C0.163861 21.074 1.26567 24.3703 3.32485 27.0549C5.38403 29.7395 8.28218 31.658 11.5579 32.505C12.8418 32.8315 14.1614 32.9978 15.4862 33C17.4967 33.0027 19.488 32.6089 21.3461 31.8413C23.2043 31.0736 24.8928 29.9471 26.3151 28.5262C27.7374 27.1053 28.8656 25.4178 29.6351 23.5605C30.4046 21.7031 30.8003 19.7122 30.7996 17.7017C30.7996 11.4125 26.7516 7.97496 22.0629 3.98746ZM22.3626 26.5182C21.9692 26.8209 21.5558 27.0965 21.1251 27.3432C21.5197 26.5193 21.7263 25.6181 21.7301 24.7046C21.7301 22.055 19.8835 18.9791 17.6051 16.2827C17.3437 15.9768 17.0191 15.7312 16.6537 15.5628C16.2883 15.3944 15.8907 15.3072 15.4883 15.3072C15.0859 15.3072 14.6883 15.3944 14.3229 15.5628C13.9575 15.7312 13.6329 15.9768 13.3715 16.2827C10.1375 20.075 8.1121 24.1752 9.99998 27.5C8.26379 26.5235 6.82125 25.0992 5.8227 23.3757C4.82415 21.6521 4.30612 19.6922 4.3226 17.7003C4.27995 15.7495 4.93584 13.8477 6.17198 12.3378C6.36631 12.6568 6.57485 12.9653 6.7976 13.2632C7.16547 13.7599 7.67083 14.1379 8.25121 14.3505C8.83159 14.5631 9.46155 14.601 10.0632 14.4595C10.6736 14.3234 11.2317 14.0141 11.6707 13.5688C12.1097 13.1235 12.4109 12.5609 12.5382 11.9487C13.0464 9.25001 14.0192 6.66001 15.4134 4.29409C15.4419 4.24711 15.481 4.20739 15.5276 4.17805C15.5741 4.1487 15.6268 4.13053 15.6815 4.12496C15.7543 4.11547 15.8284 4.12199 15.8984 4.14408C15.9685 4.16617 16.0329 4.20328 16.0871 4.25284C17.2201 5.28271 18.3325 6.22871 19.394 7.12796C23.7789 10.8515 26.6746 13.3155 26.6746 17.6962C26.6802 19.3992 26.2943 21.0808 25.5466 22.6109C24.7989 24.141 23.7096 25.4788 22.3626 26.521V26.5182Z" fill="#F24B41" />
                    </svg>
                    <h2>
                        Auction
                    </h2>
                </div>
                <div className={classes.auctionItems}>
                    <div className={classes.itemsBg}>

                    </div>
                    {auction.map((elem, i)=>{
                        return  <AuctionItem key={`auction-item-${i}`} title={elem.title} amount={elem.amount} 
                        type={elem.type} status={elem.status} img={elem.img} endsText={elem.endsText}
                        timeLeft={elem.timeLeft} />
                    })}
                  
                </div>
                <div className={classes.auctionBtn}>
                    <button>View all</button>
                </div>
                </div>
            </section>
            <section className={classes.voting}>
                <div className={classes.votingContainer}>
                <div className={classes.votingTitle}>
                    <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3033 3.27824C30.8008 3.06894 30.2474 3.01393 29.7136 3.1202C29.1798 3.22647 28.6897 3.48922 28.3057 3.87499L24.75 7.43074L18.4443 1.12499C17.9285 0.609442 17.2292 0.319824 16.5 0.319824C15.7708 0.319824 15.0715 0.609442 14.5558 1.12499L8.25 7.43074L4.69425 3.87499C4.30966 3.49051 3.81971 3.22869 3.28634 3.12263C2.75297 3.01657 2.20012 3.07103 1.6977 3.27912C1.19528 3.48722 0.765827 3.8396 0.463646 4.29173C0.161464 4.74385 0.000116117 5.27542 0 5.81924L0 20.375C0.0021833 22.1977 0.727213 23.9451 2.01605 25.2339C3.30489 26.5228 5.05231 27.2478 6.875 27.25H26.125C27.9477 27.2478 29.6951 26.5228 30.9839 25.2339C32.2728 23.9451 32.9978 22.1977 33 20.375V5.81924C33.0001 5.27538 32.839 4.7437 32.537 4.29141C32.235 3.83912 31.8056 3.48653 31.3033 3.27824Z" fill="#92E784" />
                    </svg>
                    <h2>
                        Voting
                    </h2>
                </div>
                <div className={classes.votingSubtitle}>
                    <p>Let’s choose a winner together</p>
                </div>
                <div className={classes.votingItems}>
                    {
                        voting.map((elem, i)=>{
                           return <VotingItem key={`voting-item-${i}`} title={elem.title} amount={elem.amount} img={elem.img}/>
                        })
                    }
                </div>
                </div>
            </section>
            <section className={classes.footer}>
                <Footer />
            </section>
        </div>
    )
}

export default MainPage