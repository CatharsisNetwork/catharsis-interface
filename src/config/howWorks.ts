export interface HowWorksTypes{
    img: string,
    title: string,
    text: string,
    color: string
}

export const howWorks: HowWorksTypes[] = [
    {
        img: 'lock',
        title: 'Lock NFTs to Create ERC20 Tokens',
        text: 'Create a vault and deposit your NFT. After this is done you will receive ERC20 tokens. Distribute these however you please!',
        color: '#D8B2FF',
    },
    {
        img: 'dollar',
        title: 'Buy Fractional Ownership Tokens',
        text: 'Buy fractional ownership tokens from your friends, AMMs or other defi protocols. Then hold them in your wallet like a normal ERC20 token.',
        color: '#92E784',
    },
    {
        img: 'heart',
        title: 'Buyout Fractionalized NFTs',
        text: 'If you see a fractionalized NFT you like, submit a buyout to kick off an auction for the NFT. After the auction ends the winner will get the NFT and the fractional owners will get ETH.',
        color: '#F55656',
    }
]