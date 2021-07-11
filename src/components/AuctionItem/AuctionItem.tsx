import React from 'react';
import classes from './AuctionItem.module.scss';
import {AuctionTypes} from '../../config';

function AuctionItem({title, amount, type, status, img, endsText, timeLeft}:AuctionTypes) {
    return (
        <div className={classes.AuctionItem}>
            <div className={classes.itemHeader}>
                <div className={classes.itemTitle}>
                    <div className={classes.title}>
                        <h4>{title}</h4>
                    </div>
                    <div className={classes.amount}>
                        <p>{amount}</p>
                    </div>
                </div>
                <div className={classes.headerOption}>
                    <div className={classes.type}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.6848 6.61023C17.6068 6.36524 17.4567 6.14946 17.2542 5.99105C17.0517 5.83263 16.8061 5.73893 16.5495 5.72217L11.9096 5.39746L10.1884 1.06336C10.0953 0.823745 9.93195 0.617861 9.71979 0.472682C9.50763 0.327502 9.25656 0.2498 8.99949 0.249756H8.99827C8.74159 0.250214 8.49102 0.328114 8.27933 0.473272C8.06763 0.618429 7.90467 0.824088 7.81174 1.06336L6.06491 5.42248L1.45066 5.72217C1.19409 5.73893 0.948528 5.83263 0.746014 5.99105C0.5435 6.14946 0.393437 6.36524 0.315403 6.61023C0.233082 6.85869 0.227482 7.12619 0.299332 7.37788C0.371181 7.62957 0.517152 7.8538 0.718235 8.02136L4.26804 11.0219L3.21213 15.1753C3.13935 15.4551 3.15273 15.7503 3.25053 16.0223C3.34832 16.2944 3.52597 16.5306 3.76023 16.7C3.98639 16.8645 4.25684 16.9572 4.53639 16.9659C4.81594 16.9746 5.09164 16.8989 5.32761 16.7488L8.98972 14.4288C8.9946 14.4252 8.99948 14.4227 9.01047 14.4288L12.9509 16.9252C13.1648 17.0618 13.415 17.1308 13.6688 17.1229C13.9225 17.1151 14.1679 17.0309 14.373 16.8812C14.5853 16.7278 14.7463 16.5139 14.8349 16.2674C14.9236 16.021 14.9357 15.7535 14.8698 15.5L13.748 10.9626L17.282 8.02136C17.483 7.8538 17.629 7.62957 17.7009 7.37788C17.7727 7.12619 17.7671 6.85869 17.6848 6.61023Z" fill="#D8B2FF" />
                        </svg>
                        <p>{type}</p>
                    </div>
                    <div className={classes.status}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.182 1.93332C10.684 1.51065 10.162 1.06665 9.63062 0.583982C9.38861 0.363235 9.10104 0.198359 8.78827 0.101015C8.4755 0.00367022 8.14517 -0.0237653 7.82062 0.0206486C7.50494 0.0619367 7.20217 0.171991 6.93366 0.343048C6.66516 0.514105 6.43745 0.741998 6.26662 1.01065C5.6333 2.05101 5.15579 3.17854 4.84929 4.35732C4.70374 4.16378 4.51711 4.00491 4.30282 3.89213C4.08852 3.77936 3.8519 3.71547 3.60997 3.70508C3.36804 3.69469 3.12681 3.73805 2.90363 3.83204C2.68046 3.92603 2.4809 4.06831 2.31929 4.24865C1.1892 5.40435 0.563476 6.961 0.579288 8.57732C0.564263 10.2177 1.09847 11.8159 2.09686 13.1175C3.09525 14.4192 4.50042 15.3493 6.08862 15.76C6.71116 15.9183 7.35093 15.9989 7.99329 16C8.96806 16.0013 9.93353 15.8104 10.8344 15.4382C11.7354 15.066 12.554 14.5198 13.2437 13.8309C13.9333 13.1419 14.4803 12.3238 14.8534 11.4233C15.2264 10.5227 15.4183 9.55742 15.418 8.58265C15.418 5.53332 13.4553 3.86665 11.182 1.93332ZM11.3273 12.8573C11.1366 13.0041 10.9361 13.1377 10.7273 13.2573C10.9186 12.8579 11.0188 12.4209 11.0206 11.978C11.0206 10.6933 10.1253 9.20198 9.02062 7.89465C8.89389 7.74633 8.73651 7.62725 8.55933 7.54559C8.38215 7.46394 8.18938 7.42166 7.99429 7.42166C7.7992 7.42166 7.60643 7.46394 7.42925 7.54559C7.25207 7.62725 7.09469 7.74633 6.96796 7.89465C5.39996 9.73332 4.41795 11.7213 5.33329 13.3333C4.4915 12.8599 3.79209 12.1693 3.30794 11.3337C2.8238 10.498 2.57263 9.54774 2.58062 8.58198C2.55994 7.63613 2.87795 6.71401 3.47729 5.98198C3.57151 6.13665 3.67262 6.2862 3.78062 6.43065C3.95898 6.67148 4.20401 6.85476 4.4854 6.95784C4.7668 7.06092 5.07224 7.07928 5.36396 7.01065C5.65988 6.94467 5.93049 6.79472 6.14333 6.5788C6.35618 6.36289 6.50222 6.09015 6.56396 5.79332C6.81034 4.48485 7.28201 3.2291 7.95796 2.08198C7.97182 2.0592 7.99077 2.03995 8.01333 2.02572C8.03588 2.01149 8.06143 2.00268 8.08796 1.99998C8.12327 1.99538 8.15917 1.99854 8.19314 2.00925C8.22711 2.01996 8.25833 2.03796 8.28462 2.06198C8.83396 2.56132 9.37329 3.01998 9.88796 3.45598C12.014 5.26132 13.418 6.45598 13.418 8.57998C13.4207 9.40569 13.2336 10.221 12.871 10.9629C12.5085 11.7047 11.9804 12.3534 11.3273 12.8586V12.8573Z" fill="#F24B41" />
                        </svg>
                        <p>{status}</p>
                    </div>
                </div>
            </div>
            <div className={classes.itemImage}>
                <img src={require(`../../img/${img}.jpg`).default} alt={img} />
            </div>
            <div className={classes.itemBody}>
                <div className={classes.itemBodyTitle}>
                    <h4>{endsText}</h4>
                </div>
                <div className={classes.timesLeft}>
                    <div className={classes.timeCont}>
                        <div className={classes.time}>
                            <p>0</p>
                        </div>
                        <div className={classes.attr}>
                            <p>Days</p>
                        </div>
                    </div>
                    <div className={classes.timeCont}>
                        <div className={classes.time}>
                            <p>0</p>
                        </div>
                        <div className={classes.attr}>
                            <p>Hours</p>
                        </div>
                    </div>
                    <div className={classes.timeCont}>
                        <div className={classes.time}>
                            <p>0</p>
                        </div>
                        <div className={classes.attr}>
                            <p>Minutes</p>
                        </div>
                    </div>
                    <div className={classes.timeCont}>
                        <div className={classes.time}>
                            <p>0</p>
                        </div>
                        <div className={classes.attr}>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className={classes.viewDetailsButton}>
                    <button>View details</button>
                </div>
            </div>

        </div>
    )
}

export default AuctionItem