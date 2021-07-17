import React from 'react';
import classes from './VotingItem.module.scss';
import item from '../img/AuctionItem.jpg';
import {votingTypes} from '../../assets/config'

function VotingItem({title, amount, img}:votingTypes) {
    return (
        <div className={classes.votingItem}>
            <div className={classes.itemHeader}>
                <div className={classes.itemTitle}>
                    <div className={classes.title}>
                        <h4>{title}</h4>
                    </div>
                    <div className={classes.amount}>
                        <p>{amount}</p>
                    </div>
                </div>
            
            </div>
            <div className={classes.itemImage}>
                <img src={require(`../img/${img}.jpg`).default} alt={img} />
            </div>
            <div className={classes.itemBtn}>
                <button>Vote</button>
            </div>
        </div>
    )
}

export default VotingItem