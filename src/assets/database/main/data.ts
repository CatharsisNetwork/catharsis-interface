import card_content_1 from "../../image/card/card_content_1.png";
import card_content_2 from "../../image/card/card_content_2.png";
import card_content_3 from "../../image/card/card_content_3.png";
import card_content_4 from "../../image/card/card_content_4.png";
import card_content_5 from "../../image/card/card_content_5.png";
import card_content_6 from "../../image/card/card_content_6.png";
import card_content_7 from "../../image/card/card_content_7.png";
import card_content_8 from "../../image/card/card_content_8.png";
import card_content_9 from "../../image/card/card_content_9.png";
import card_content_10 from "../../image/card/card_content_10.png";
import card_content_11 from "../../image/card/card_content_11.png";
import card_content_12 from "../../image/card/card_content_12.png";
import main_card_1 from "../../image/main/main_card_1.png";
import main_card_2 from "../../image/main/main_card_2.png";
import main_card_3 from "../../image/main/main_card_3.png";
import main_card_vector_1 from "../../image/main/main_card_vector_1.png";
import main_card_vector_2 from "../../image/main/main_card_vector_2.png";
import main_card_vector_3 from "../../image/main/main_card_vector_3.png";
import {CardType, GalleryDataType} from "../callery/data";


export type MainCardType = {
    image_card_1: string,
    image_card_2: string,
    title: string,
    description: string,
    style: string

}


export type MainDataType = {
    header: {
        description: string
    },
    content: {
        cards_content_1: Array<CardType>,
        main_cards: Array<MainCardType>,
        cards_content_2:Array<CardType>
        cards_content_3:Array<CardType>
    }
}


export const data: MainDataType = {
    header: {
        description: ""
    },
    content: {
        cards_content_1: [
            {
                header: {
                    title: "Here comes the squad",
                    amount: "1 NFT",
                    star: "Fractional panks",
                },

                content: {
                    img: card_content_7
                },
                footer: {
                    title: "Auction ends in 2,524 blocks",
                    interval: [
                        {value: 0, period: "Days"},
                        {value: 19, period: "Hours"},
                        {value: 56, period: "Minutes"},
                        {value: 13, period: "Seconds"},
                    ]
                }
            },
            {
                header: {
                    title: "Here comes the squad",
                    amount: "1 NFT",
                    star: "Fractional panks",
                },

                content: {
                    img: card_content_6
                },
                footer: {
                    title: "Auction ends in 2,524 blocks",
                    interval: [
                        {value: 0, period: "Days"},
                        {value: 19, period: "Hours"},
                        {value: 56, period: "Minutes"},
                        {value: 13, period: "Seconds"},
                    ]
                }
            },
            {
                header: {
                    title: "Here comes the squad",
                    amount: "1 NFT",
                    star: "Fractional panks",
                },

                content: {
                    img: card_content_5
                },
                footer: {
                    title: "Auction ends in 2,524 blocks",
                    interval: [
                        {value: 0, period: "Days"},
                        {value: 19, period: "Hours"},
                        {value: 56, period: "Minutes"},
                        {value: 13, period: "Seconds"},
                    ]
                }
            },
        ],
        main_cards: [
            {
                image_card_1: main_card_1,
                image_card_2: main_card_vector_1,
                title: "Lock NFTs to Create </br> ERC20 Tokens",
                description: "Create a vault and deposit your NFT. After this " +
                    "is done you will receive <span>ERC20 tokens.</span>  Distribute " +
                    "these however you please!",
                style: "custom_purple"
            },
            {
                image_card_1: main_card_2,
                image_card_2: main_card_vector_2,
                title: "Buy Fractional </br> Ownership Tokens",
                description: "Buy <span>fractional ownership tokens </span>  from your friends, AMMs or other defi protocols." +
                    " Then hold them in your wallet like a normal ERC20 token.",
                style: "custom_green"
            },
            {
                image_card_1: main_card_3,
                image_card_2: main_card_vector_3,
                title: "Buyout Fractionalized </br> NFTs",
                description: "If you see a fractionalized NFT you like, submit a buyout to kick off an auction " +
                    "for</br> the NFT. After the auction ends the <span>winner</span>  will get the NFT and the fractional owners will get ETH.",
                style: "custom_orange"
            },
        ],
        cards_content_2:[
            {
                header: {
                    title: "Here comes the squad",
                    amount: "1 NFT",
                    star: "Fractional panks",
                },

                content: {
                    img: card_content_10
                },
                footer: {
                    title: "Auction ends in 2,524 blocks",
                    interval: [
                        {value: 0, period: "Days"},
                        {value: 19, period: "Hours"},
                        {value: 56, period: "Minutes"},
                        {value: 13, period: "Seconds"},
                    ]
                }
            },
            {
                header: {
                    title: "Here comes the squad",
                    amount: "1 NFT",
                    star: "Fractional panks",
                },

                content: {
                    img: card_content_12
                },
                footer: {
                    title: "Auction ends in 2,524 blocks",
                    interval: [
                        {value: 0, period: "Days"},
                        {value: 19, period: "Hours"},
                        {value: 56, period: "Minutes"},
                        {value: 13, period: "Seconds"},
                    ]
                }
            },
            {
                header: {
                    title: "Here comes the squad",
                    amount: "1 NFT",
                    star: "Fractional panks",
                },

                content: {
                    img: card_content_9
                },
                footer: {
                    title: "Auction ends in 2,524 blocks",
                    interval: [
                        {value: 0, period: "Days"},
                        {value: 19, period: "Hours"},
                        {value: 56, period: "Minutes"},
                        {value: 13, period: "Seconds"},
                    ]
                }
            },
        ],
        cards_content_3:[
            {
                header: {
                    title: "Here comes the squad",
                    amount: "1 NFT",
                    star: "Fractional panks",
                },

                content: {
                    img: card_content_3
                },
                footer: {
                    title: "Auction ends in 2,524 blocks",
                    interval: [
                        {value: 0, period: "Days"},
                        {value: 19, period: "Hours"},
                        {value: 56, period: "Minutes"},
                        {value: 13, period: "Seconds"},
                    ]
                }
            },
            {
                header: {
                    title: "Here comes the squad",
                    amount: "1 NFT",
                    star: "Fractional panks",
                },

                content: {
                    img: card_content_4
                },
                footer: {
                    title: "Auction ends in 2,524 blocks",
                    interval: [
                        {value: 0, period: "Days"},
                        {value: 19, period: "Hours"},
                        {value: 56, period: "Minutes"},
                        {value: 13, period: "Seconds"},
                    ]
                }
            },
            {
                header: {
                    title: "Here comes the squad",
                    amount: "1 NFT",
                    star: "Fractional panks",
                },

                content: {
                    img: card_content_1
                },
                footer: {
                    title: "Auction ends in 2,524 blocks",
                    interval: [
                        {value: 0, period: "Days"},
                        {value: 19, period: "Hours"},
                        {value: 56, period: "Minutes"},
                        {value: 13, period: "Seconds"},
                    ]
                }
            },
        ],


    }
}
