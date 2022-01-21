import { css } from "styled-components"

export const Medium =(props)=>{
    return css`
    @media only screen and (max-width:950px){
        ${props}
    }
    `
}
export const Medium1 =(props)=>{
    return css`
    @media only screen and (max-width:750px){
        ${props}
    }
    `
}
export const Tablet =(props)=>{
    return css`
    @media only screen and (max-width:550px){
        ${props}
    }
    `
}
export const Tablet1 =(props)=>{
    return css`
    @media only screen and (max-width:480px){
        ${props}
    }
    `
}
export const Mobile =(props)=>{
    return css`
    @media only screen and (max-width:420px){
        ${props}
    }
    `
}
export const SmallMobile =(props)=>{
    return css`
    @media only screen and (max-width:280px){
        ${props}
    }
    `
}