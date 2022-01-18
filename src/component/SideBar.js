import React, { useContext } from 'react'
import styled from 'styled-components'
import { AiFillHome,AiOutlineLike } from 'react-icons/ai';
import { MdOutlineExplore,MdOutlineSubscriptions,
    MdOutlineVideoLibrary,MdOutlineHistory,MdOutlineWatchLater } from 'react-icons/md';
import { Medium } from '../reponsive';
import { AppContext } from '../App';


const Container = styled.div`
background-color: #212121;
color: white;
flex: 1;
display: flex;
/* align-items: center; */
flex-direction: column;
height: 100vh;
transition: 1s ease-in-out all;
z-index: 999;
${Medium({
    position:'fixed',
    transform : ( props ) => props.type==='fullSideBar' ? 'translateX(0)' : 'translateX(-100%)',
})}

`
const SideWrapper = styled.div`
display: ${props=>props.type==='expand'? 'none':'flex'};
flex-direction: column;
`

const SideIcon  = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
:hover{
    background-color: lightseagreen,
}
flex-direction: ${props=>props.type==='expand'? 'column':'row'};
padding: ${props=>props.type==='expand'? '20px 0px ':'10px 10px'};

`
const Icon = styled.div`
flex: 1;
padding-left: 15px;
padding-left: ${props=>props.type==='expand'? '0px ':'15px'};
font-size: ${props=>props.type==='expand'? '25px':'24px'};
`

const Span = styled.div`
flex: 3;
font-size: ${props=>props.type==='expand'? '10px':'18px'};
padding-left: ${props=>props.type==='expand'? '10px ':'20px'};
padding-right: ${props=>props.type==='expand'? '10px':'50px'};


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


export default function SideBar() {

    const {value,signal} = useContext(AppContext)

    return (
        <Container type={value} >
            <SideWrapper >
                {/* <Wrap></Wrap> */}
            <SideIcon type={signal}>
                <Icon type={signal}><AiFillHome/></Icon>
                <Span type={signal}>Home</Span>
            </SideIcon>
            <SideIcon type={signal}>
                <Icon type={signal}><MdOutlineExplore/></Icon>
                <Span type={signal}>Explore</Span>
            </SideIcon>
            <SideIcon type={signal}>
                <Icon type={signal}><MdOutlineSubscriptions/></Icon>
                <Span type={signal}>Subscription</Span>
            </SideIcon>
            </SideWrapper>
            <Line/>
            <SideWrapper type={signal}>

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
