import React from 'react'
import styled from 'styled-components'
import { AiFillHome,AiOutlineLike } from 'react-icons/ai';
import { MdOutlineExplore,MdOutlineSubscriptions,
    MdOutlineVideoLibrary,MdOutlineHistory,MdOutlineWatchLater } from 'react-icons/md';
import { Medium } from '../reponsive';


const Container = styled.div`
background-color: #212121;
color: white;
flex: 1;
display: flex;
/* align-items: center; */
flex-direction: column;
height: 100vh;
transition: 1s ease-in-out all;
position: fixed;
z-index: 999;
${Medium({
    transform : ( props ) => props.type ? 'translateX(0)' : 'translateX(-100%)',
})}

`
const SideWrapper = styled.div`
display: flex;
flex-direction: column;
`

const SideIcon = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
cursor: pointer;
:hover{
    background-color: lightseagreen,
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
/* display:none; */
padding-right: 50px;
padding-left: 20px;

`
const Heading = styled.div`
padding-top: 15px;
display: none;
`
const Line = styled.hr`
background-color: #3d3d3d;
/* border: 0.1px solid lightgray; */
height: 1px;
border: none;
width: 100%;
`


export default function SideBar({value}) {

    // let value = true
    return (
        <Container type={value}>
            <SideWrapper>
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
            </SideWrapper>
            <Line/>
            <SideWrapper>

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
            </SideWrapper>
            <Line/>
            <Heading>SUBSCRIPTIONS</Heading>
           
        </Container>
    )
}
