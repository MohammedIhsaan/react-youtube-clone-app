import React from 'react'
import styled from 'styled-components'
import { AiFillHome,AiOutlineLike } from 'react-icons/ai';
import { MdOutlineExplore,MdOutlineSubscriptions,
    MdOutlineVideoLibrary,MdOutlineHistory,MdOutlineWatchLater } from 'react-icons/md';

const Container = styled.div`
background-color: #212121;
color: white;
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
justify-content: center;
padding: 10px;
cursor: pointer;
:hover{
    background-color: lightseagreen;
}
`
const Icon = styled.div`
flex: 1;
padding-left: 15px;
font-size: 24px;
`

const Span = styled.div`
flex: 3;
font-size: 18px;

`
const Heading = styled.div`
padding-top: 15px;
`
const Thumb = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: red;
`
const Line = styled.hr`
background-color: #3d3d3d;
/* border: 0.1px solid lightgray; */
height: 1px;
border: none;
width: 100%;
`


export default function SideBar() {
    return (
        <Container>
            <SideIcon>
                <Icon><AiFillHome/></Icon>
                <Span>Home</Span>
            </SideIcon>
            <SideIcon>
                <Icon><MdOutlineExplore/></Icon>
                <Span>Explore</Span>
            </SideIcon>
            <SideIcon>
                <Icon><MdOutlineSubscriptions/></Icon>
                <Span>Subscription</Span>
            </SideIcon>
            <Line/>
            <SideIcon>
                <Icon><MdOutlineVideoLibrary/></Icon>
                <Span>Library</Span>
            </SideIcon>
            <SideIcon>
                <Icon><MdOutlineHistory/></Icon>
                <Span>History</Span>
            </SideIcon>
            <SideIcon>
                <Icon><MdOutlineWatchLater/></Icon>
                <Span>Watch Later</Span>
            </SideIcon>
            <SideIcon>
                <Icon><AiOutlineLike/></Icon>
                <Span>Liked Videos</Span>
            </SideIcon>
            <Line/>
            <Heading>SUBSCRIPTIONS</Heading>
           
        </Container>
    )
}
