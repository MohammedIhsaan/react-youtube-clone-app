import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import VideoList from './VideoList'

const Container = styled.div`
display: flex;
`


export default function Home() {
    return (
        <Container>
            <SideBar/>
            <VideoList/>
        </Container>
    )
}
