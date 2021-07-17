
export interface GalleryTypes{
    title: string,
    amount: string,
    type: string,
    status: string,
    img: string,
    supply: string,
    fee: string,
    amountETH: string
}

export const gallery: GalleryTypes[] = [
    {
        title: "Here comes the squad",
        amount: "Bundle",
        type: "Fractional panks",
        status: "Live auction",
        img: "squad",
        supply: "12k",
        fee: "1 %",
        amountETH: "0.2 ETH"
    },
    {
        title: "Punk Lisa",
        amount: "1 NFT",
        type: "Panks",
        status: "Live auction",
        img: "lisaPunk",
        supply: "154k",
        fee: "0.43 %",
        amountETH: "0.8 ETH"
    },
    {
        title: "daytime Sky Ship",
        amount: "1 NFT",
        type: "Ships",
        status: "",
        img: "ships",
        supply: "12k",
        fee: "1 %",
        amountETH: "0.2 ETH"
    }
]