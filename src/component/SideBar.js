import React from 'react'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa';

const Container = styled.div`
background-color: lightsalmon;
flex: 1;
display: flex;
align-items: center;
flex-direction: column;
height: 100vh;
`
const SideIcon = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
cursor: pointer;
:hover{
    background-color: lightseagreen;
}
`
const Icon = styled.div`
flex: 1;
padding-left: 10px;
`

const Span = styled.div`
flex: 2;

`

// const Container = styled.div``


export default function SideBar() {
    return (
        <Container>
            <SideIcon>
                <Icon><FaBeer/></Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Subscription</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon>1</Icon>
                <Span>Home</Span>
            </SideIcon>
        </Container>
    )
}
