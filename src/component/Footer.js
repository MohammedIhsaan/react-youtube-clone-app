import styled from 'styled-components'
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineExplore,MdOutlineSubscriptions,MdOutlineVideoLibrary } from 'react-icons/md';
import { Mobile } from '../reponsive';

const Container = styled.div`
display: none;
position: absolute;
background-color: #181818;
bottom: 0;
color: white;
font-size: 18px;
align-items: center;
justify-content: space-between;
${Mobile({
    display:'flex',
    width:'100%',
})}
`
const Icon = styled.div`

`
const SideIcon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-left: 15px;
padding-right: 15px;
`
const Span = styled.div`
font-size: 10px;


`
export default function Footer (){
    return(
        <Container>
            <SideIcon >
                <Icon ><AiFillHome/></Icon>
                <Span >Home</Span>
            </SideIcon>
            <SideIcon >
                <Icon ><MdOutlineExplore/></Icon>
                <Span >Explore</Span>
            </SideIcon>
            <SideIcon >
                <Icon ><MdOutlineSubscriptions/></Icon>
                <Span >Subscription</Span>
            </SideIcon>
            <SideIcon>
                <Icon><MdOutlineVideoLibrary/></Icon>
                <Span>Library</Span>
            </SideIcon>
        </Container>
    )
}