import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../reponsive'
import Footer from './Footer'
import SideBar from './SideBar'
import VideoList from './VideoList'

const Container = styled.div`
display: flex;
/* flex-direction: column; */
/* align-items: center;
justify-content: center; */
${Mobile({
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    
})} 
`


export default function Home() {
  
    return (
        <Container>
            <SideBar  />
            <VideoList  />
            <Footer/>
        </Container>
    )
}
