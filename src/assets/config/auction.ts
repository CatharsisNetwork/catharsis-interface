export interface AuctionTypes{
    title: string,
    amount: string,
    type: string,
    status: string,
    img: string,
    endsText: string,
    timeLeft: Date
}

export const auction: AuctionTypes[] = [
    {
       title: 'Here comes the squad',
       amount: '1 NFT',
       type: 'Fractional panks',
       status: 'Live auction',
       img: 'AuctionItem',
       endsText: 'Auction ends in 2,524 blocks',
       timeLeft: new Date() 
    },
    {
        title: 'Girls & Love 1',
        amount: '1 NFT',
        type: 'Fractional panks',
        status: 'Live auction',
        img: 'girls',
        endsText: 'Auction ends in 2,524 blocks',
        timeLeft: new Date() 
     },
     {
        title: 'Mind waves',
        amount: '1 NFT',
        type: 'Fractional panks',
        status: 'Live auction',
        img: 'mindWaves',
        endsText: 'Auction ends in 2,524 blocks',
        timeLeft: new Date() 
     }
]