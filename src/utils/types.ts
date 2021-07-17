import React from "react";

export interface IParams {
    page: string
    slug: string
}

export interface IAlert {
    loading?: boolean
    success?: string | string[]
    errors?: string | string[]
}
export interface IModalProps {
    isOpen: boolean
    custom_style?: string
    onClose: () => void
    children: React.ReactNode
}