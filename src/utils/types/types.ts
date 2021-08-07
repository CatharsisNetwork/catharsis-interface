import React from "react";
import {ChangeEvent, FormEvent} from "react";
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

export interface LinkType {
    label: string
    path: string
}


export type InputChange = ChangeEvent<HTMLInputElement>
export type FormSubmit = FormEvent<HTMLFormElement>


