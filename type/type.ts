import { ReactNode } from "react"

export type btnProps = {
    children:ReactNode
    rootClass?:string
}
export type inputProps = {
    rootClass?:string
    label?:string
    error?:string
}

export type dropDownProps = {
    items:any[]
    rootClass?:string
}

export type textListResponse = {
    id:string
    category:string
    text:string
    status:boolean
}