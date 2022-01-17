import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import VideoList from './VideoList'

const Container = styled.div`
display: flex;
`


export default function Home({value,signal}) {
   console.log('signal :',signal)
    return (
        <Container>
            <SideBar value={value} signal={signal} />
            <VideoList value={value} />
        </Container>
    )
}
