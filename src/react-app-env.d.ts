/// <reference types="react-scripts" />

interface Window {
    BinanceChain?: {
        on?: (...args: any[]) => void
        selectedAddress?: string
        removeListener?: (...args: any[]) => void
        send: any
        enable: any
    }
    ethereum?: {
        isMetaMask?: true
        on?: (...args: any[]) => void
        selectedAddress?: string
        removeListener?: (...args: any[]) => void
    }
    web3?: any
}

interface WindowChain {
    ethereum?: {
        isMetaMask?: true
        request?: (...args: any[]) => void
    }
}